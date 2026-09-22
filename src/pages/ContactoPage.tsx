import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, CheckCircle2 } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { SplitText } from '@/components/ui/SplitText'
import { Reveal } from '@/components/ui/Reveal'
import { useLanguage } from '@/i18n/LanguageContext'

export default function ContactoPage() {
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()

  const info = [
    { icon: MapPin, label: 'Dirección', value: 'Eduardo Saavedra 38, 42004 Soria (España)' },
    { icon: Phone, label: 'Teléfono', value: '+34 975 23 31 69' },
    { icon: Mail, label: 'Email', value: 'civesmundi@civesmundi.es' },
    { icon: Clock, label: 'Horario', value: 'Lunes a viernes, 8:00h – 15:00h' },
  ]

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Seo title="Contacto — Cives Mundi" description="Ponte en contacto con Cives Mundi en Soria." />

      <section className="relative overflow-hidden bg-ink-950 pb-28 pt-40 text-white">
        <div className="container-page">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-corp">{t.nav.contacto}</span>
          </Reveal>
          <SplitText as="h1" text={t.pages.contacto.title} className="mt-5 block font-display text-display-xl" />

          <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal delay={0.1} className="space-y-8">
                {info.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-orange-corp">
                      <item.icon size={16} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-white/40">{item.label}</p>
                      <p className="mt-1 text-white/90">{item.value}</p>
                    </div>
                  </div>
                ))}
              </Reveal>

              <Reveal delay={0.3} className="mt-12 overflow-hidden border border-white/10">
                <iframe
                  title="Mapa de ubicación de Cives Mundi en Soria"
                  className="h-64 w-full grayscale invert"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Eduardo+Saavedra+38,+42004+Soria&output=embed"
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={0.15}>
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-full flex-col items-center justify-center border border-white/10 bg-white/5 p-16 text-center"
                    >
                      <CheckCircle2 size={40} className="text-orange-corp" />
                      <p className="mt-6 font-display text-2xl">Mensaje enviado</p>
                      <p className="mt-3 max-w-sm text-white/60">
                        Gracias por escribirnos. Nuestro equipo contactará contigo lo antes posible.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                      <Field label="Nombre" name="name" required />
                      <Field label="Email" name="email" type="email" required />
                      <Field label="Asunto" name="subject" className="sm:col-span-2" />
                      <TextArea label="Mensaje" name="message" className="sm:col-span-2" required />
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 bg-orange px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-orange-vivid"
                        >
                          Enviar mensaje
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  className,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  className?: string
}) {
  return (
    <label className={`block ${className ?? ''}`}>
      <span className="text-xs uppercase tracking-widest text-white/40">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-b border-white/20 bg-transparent py-2.5 text-white outline-none transition-colors focus:border-orange"
      />
    </label>
  )
}

function TextArea({
  label,
  name,
  required,
  className,
}: {
  label: string
  name: string
  required?: boolean
  className?: string
}) {
  return (
    <label className={`block ${className ?? ''}`}>
      <span className="text-xs uppercase tracking-widest text-white/40">{label}</span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="mt-2 w-full resize-none border-b border-white/20 bg-transparent py-2.5 text-white outline-none transition-colors focus:border-orange"
      />
    </label>
  )
}

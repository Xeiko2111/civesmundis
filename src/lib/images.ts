// Registro central de imágenes reales de Cives Mundi disponibles.
// Todas provienen de la web actual (extracción de la página principal).
// Cuando un proyecto/sección aún no tiene fotografía real disponible,
// se debe usar <PlaceholderImage /> (ver components/ui/PlaceholderImage.tsx)
// en lugar de inventar una imagen.

import aecid from '@/assets/images/funders/aecid.jpg'
import agenciaCatalana from '@/assets/images/funders/agencia-catalana-cooperacion.jpg'
import altener from '@/assets/images/funders/altener.jpg'
import aytoArandaDeDuero from '@/assets/images/funders/ayto-aranda-de-duero.jpg'
import aytoHuesca from '@/assets/images/funders/ayto-huesca.jpg'
import aytoOviedo from '@/assets/images/funders/ayto-oviedo.jpg'
import aytoSalamanca from '@/assets/images/funders/ayto-salamanca.jpg'
import aytoSoria from '@/assets/images/funders/ayto-soria.jpg'
import aytoTeruel from '@/assets/images/funders/ayto-teruel.jpg'
import aytoZamora from '@/assets/images/funders/ayto-zamora.jpg'
import bbva from '@/assets/images/funders/bbva.jpg'
import cajaEspanaDuero from '@/assets/images/funders/caja-espana-duero.jpg'
import cajaRuralSoria from '@/assets/images/funders/caja-rural-soria.jpg'
import comunidadMadrid from '@/assets/images/funders/comunidad-madrid.jpg'
import cristalPharma from '@/assets/images/funders/cristal-pharma.jpg'
import diputacionAlmeria from '@/assets/images/funders/diputacion-almeria.jpg'
import diputacionBadajoz from '@/assets/images/funders/diputacion-badajoz.jpg'
import diputacionBurgos from '@/assets/images/funders/diputacion-burgos.jpg'
import diputacionCiudadReal from '@/assets/images/funders/diputacion-ciudad-real.jpg'
import diputacionLeon from '@/assets/images/funders/diputacion-leon.jpg'
import diputacionSalamanca from '@/assets/images/funders/diputacion-salamanca.jpg'
import diputacionSoria from '@/assets/images/funders/diputacion-soria.jpg'
import diputacionZaragoza from '@/assets/images/funders/diputacion-zaragoza.jpg'
import fundacionBiodiversidad from '@/assets/images/funders/fundacion-biodiversidad.jpg'
import fundacionIco from '@/assets/images/funders/fundacion-ico.jpg'
import fundacionNavalpotro from '@/assets/images/funders/fundacion-navalpotro.jpg'
import grupoHerce from '@/assets/images/funders/grupo-herce.jpg'
import heraldoSoria from '@/assets/images/funders/heraldo-soria.jpg'
import juntaCastillaLeon from '@/assets/images/funders/junta-castilla-leon.jpg'
import ministerioEducacion from '@/assets/images/funders/ministerio-educacion.jpg'
import ministerioExterioresFrancia from '@/assets/images/funders/ministerio-exteriores-francia.jpg'
import obraSocialCajaMadrid from '@/assets/images/funders/obra-social-caja-madrid.jpg'
import obraSocialLaCaixa from '@/assets/images/funders/obra-social-la-caixa.jpg'
import sociedadConmemoracionesCulturales from '@/assets/images/funders/sociedad-conmemoraciones-culturales.jpg'
import unionEuropea from '@/assets/images/funders/union-europea.jpg'
import universidadComplutense from '@/assets/images/funders/universidad-complutense.jpg'
import universidadValladolid from '@/assets/images/funders/universidad-valladolid.jpg'

import heroCaras from '@/assets/images/hero/caras.jpg'
import heroFondo35anos from '@/assets/images/hero/fondo-35anos.jpg'
import heroFondoHueco from '@/assets/images/hero/fondo-hueco.jpg'
import heroFondoMemorias from '@/assets/images/hero/fondo-memorias.jpg'
import heroFondo from '@/assets/images/hero/fondo.jpg'
import heroMundoBg from '@/assets/images/hero/mundo-bg.jpg'
import heroSocios from '@/assets/images/hero/socios.jpg'

import logoInverse from '@/assets/images/decor/logo-inverse.png'
import logoInverseRetina from '@/assets/images/decor/logo-inverse-retina.png'
import popupDecor from '@/assets/images/decor/popup-decor.png'
import whiteDecoration from '@/assets/images/decor/white-decoration.png'

import teamDummy from '@/assets/images/team/dummy.png'
import teamAnaElizalde from '@/assets/images/team/ana-elizalde.jpg'
import teamAnaGomez from '@/assets/images/team/ana-gomez.jpg'
import teamGonzaloGil from '@/assets/images/team/gonzalo-gil.jpg'
import teamJaimeDiez from '@/assets/images/team/jaime-diez.jpg'
import teamJoaquinAlcalde from '@/assets/images/team/joaquin-alcalde.jpg'
import teamJordanFernandez from '@/assets/images/team/jordan-fernandez.jpg'

import projectAgrokolda from '@/assets/images/projects/agrokolda.jpg'
import projectBateyNinos from '@/assets/images/projects/batey-ninos.jpg'
import projectCan from '@/assets/images/projects/can.jpg'
import projectCommau from '@/assets/images/projects/commau.jpg'
import projectPinaresLab from '@/assets/images/projects/pinares-lab.jpg'
import projectRadiAecid from '@/assets/images/projects/radi-aecid.jpg'
import projectTimor from '@/assets/images/projects/timor.jpg'

export const funderImages: Record<string, string> = {
  aecid,
  'agencia-catalana-cooperacion': agenciaCatalana,
  altener,
  'ayto-aranda-de-duero': aytoArandaDeDuero,
  'ayto-huesca': aytoHuesca,
  'ayto-oviedo': aytoOviedo,
  'ayto-salamanca': aytoSalamanca,
  'ayto-soria': aytoSoria,
  'ayto-teruel': aytoTeruel,
  'ayto-zamora': aytoZamora,
  bbva,
  'caja-espana-duero': cajaEspanaDuero,
  'caja-rural-soria': cajaRuralSoria,
  'comunidad-madrid': comunidadMadrid,
  'cristal-pharma': cristalPharma,
  'diputacion-almeria': diputacionAlmeria,
  'diputacion-badajoz': diputacionBadajoz,
  'diputacion-burgos': diputacionBurgos,
  'diputacion-ciudad-real': diputacionCiudadReal,
  'diputacion-leon': diputacionLeon,
  'diputacion-salamanca': diputacionSalamanca,
  'diputacion-soria': diputacionSoria,
  'diputacion-zaragoza': diputacionZaragoza,
  'fundacion-biodiversidad': fundacionBiodiversidad,
  'fundacion-ico': fundacionIco,
  'fundacion-navalpotro': fundacionNavalpotro,
  'grupo-herce': grupoHerce,
  'heraldo-soria': heraldoSoria,
  'junta-castilla-leon': juntaCastillaLeon,
  'ministerio-educacion': ministerioEducacion,
  'ministerio-exteriores-francia': ministerioExterioresFrancia,
  'obra-social-caja-madrid': obraSocialCajaMadrid,
  'obra-social-la-caixa': obraSocialLaCaixa,
  'sociedad-conmemoraciones-culturales': sociedadConmemoracionesCulturales,
  'union-europea': unionEuropea,
  'universidad-complutense': universidadComplutense,
  'universidad-valladolid': universidadValladolid,
}

export const heroImages = {
  caras: heroCaras,
  fondo35anos: heroFondo35anos,
  fondoHueco: heroFondoHueco,
  fondoMemorias: heroFondoMemorias,
  fondo: heroFondo,
  mundoBg: heroMundoBg,
  socios: heroSocios,
}

export const decor = {
  logoInverse,
  logoInverseRetina,
  popupDecor,
  whiteDecoration,
}

export const teamDummyImage = teamDummy

export const teamImages: Record<string, string> = {
  'ana-elizalde': teamAnaElizalde,
  'ana-gomez': teamAnaGomez,
  'gonzalo-gil': teamGonzaloGil,
  'jaime-diez': teamJaimeDiez,
  'joaquin-alcalde': teamJoaquinAlcalde,
  'jordan-fernandez': teamJordanFernandez,
}

export const projectImages: Record<string, string> = {
  agrokolda: projectAgrokolda,
  'batey-ninos': projectBateyNinos,
  can: projectCan,
  commau: projectCommau,
  'pinares-lab': projectPinaresLab,
  'radi-aecid': projectRadiAecid,
  timor: projectTimor,
}

export function getProjectImage(key?: string): string | undefined {
  if (!key) return undefined
  return projectImages[key]
}

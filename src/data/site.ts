export const SITE = {
  name: "Asociación de Municipalidades Territorio de Riego Canal Laja-Diguillín",
  short: "Asociación Laja-Diguillín",
  domain: "asociacionlajadiguillin.cl",
  url: "https://asociacionlajadiguillin.cl",
  email: "asociacionlajadiguillin@gmail.com",
  phoneDisplay: "+56 9 9511 9970",
  phoneTel: "+56995119970",
  address: "Serrano N° 300, Chillán Viejo",
  region: "Región de Ñuble",
  rut: "65.079.116-9",
  registry: "11",
  resolution: "Resolución Exenta N° 17.209",
  resolutionDate: "28 de diciembre de 2012",
  expediente: "E153047/2012",
  constituted: "15 de diciembre de 2000",
  boardUntil: "6 de junio de 2027",
  certifiedOn: "5 de agosto de 2025",
  secretary: "Pía Sandoval Manosalva",
  feeMonthly: "$180.000",
  registryUrl: "https://registroasociaciones.subdere.gov.cl/ldiguillin",
  decreeUrl: "https://bcn.cl/3fuub",
  municipalitiesLawUrl: "https://bcn.cl/IKTtta",
  transparencyLawUrl: "https://bcn.cl/gPKjtt",
  law20527Url:
    "https://www.subdere.gov.cl/content/ley-n%C2%B0-20527modifica-la-ley-n%C2%BA-18695-org%C3%A1nica-constitucional-de-municipalidades",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Serrano+300+Chillan+Viejo+Chile",
} as const;

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/quienes-somos/", label: "Quiénes somos" },
  { href: "/directorio/", label: "Directorio" },
  { href: "/transparencia/", label: "Transparencia activa" },
  { href: "/contacto/", label: "Contacto" },
] as const;

export const PHOTOS = {
  valle: { src: "/media/canal-valle.jpg", alt: "Canal de riego entre álamos y praderas, con la cordillera al fondo", w: 1792, h: 1008 },
  aereo: { src: "/media/aereo-riego.jpg", alt: "Vista aérea de predios agrícolas divididos por canales de riego", w: 1600, h: 900 },
  detalle: { src: "/media/canal-detalle.jpg", alt: "Agua de un canal de riego entre pastos y álamos", w: 1400, h: 933 },
  huertos: { src: "/media/huertos.jpg", alt: "Huertos y sementeras junto a una acequia en el valle", w: 1400, h: 933 },
  camino: { src: "/media/camino-alamos.jpg", alt: "Camino rural de álamos junto a un canal y campos de cultivo", w: 1400, h: 933 },
  plaza: { src: "/media/plaza-civica.jpg", alt: "Plaza y edificio cívico de un pueblo de valle, usada solo como referencia visual", w: 1400, h: 933 },
} as const;

export const REF_CAPTION =
  "Imagen referencial del territorio de riego. No es una fotografía oficial de una comuna ni de la sede. Puede reemplazarse.";

export const BOARD = [
  { role: "Presidente", name: "Renán Cabezas Arroyo", commune: "El Carmen", office: "Alcalde" },
  { role: "Vicepresidente", name: "Gonzalo Bustamante Troncoso", commune: "Bulnes", office: "Alcalde" },
  { role: "Secretario", name: "Jairo Del Pino Lema", commune: "Pinto", office: "Alcalde" },
  { role: "Tesorero", name: "Patricio Suazo Romero", commune: "San Ignacio", office: "Alcalde" },
  { role: "Primer director", name: "Johnson Guíñez Núñez", commune: "Pemuco", office: "Alcalde" },
  { role: "Segundo director", name: "Rafael Cifuentes Rodríguez", commune: "Yungay", office: "Alcalde" },
] as const;

export const COMMUNES = [
  { name: "El Carmen", role: "Presidencia", photo: PHOTOS.valle },
  { name: "Bulnes", role: "Vicepresidencia", photo: PHOTOS.huertos },
  { name: "Pinto", role: "Secretaría", photo: PHOTOS.camino },
  { name: "San Ignacio", role: "Tesorería", photo: PHOTOS.aereo },
  { name: "Pemuco", role: "Primer director", photo: PHOTOS.detalle },
  { name: "Yungay", role: "Segundo director", photo: PHOTOS.plaza },
] as const;

export const LINES = [
  { title: "Recursos y convenios", text: "Obtención y gestión de recursos mediante convenios y proyectos de fuentes públicas y privadas, nacionales e internacionales." },
  { title: "Obras y desarrollo local", text: "Ejecución de obras y programas de desarrollo local en el territorio irrigado por el Canal Laja-Diguillín." },
  { title: "Gestión municipal", text: "Fortalecimiento de los instrumentos de gestión y de la información municipal de las comunas asociadas." },
  { title: "Medio ambiente, turismo y salud", text: "Programas vinculados a la protección del medio ambiente, el turismo y la salud de las comunidades residentes." },
  { title: "Capacitación", text: "Capacitación y perfeccionamiento del personal municipal, de los alcaldes y de los concejales." },
] as const;

export const TRANSPARENCY = [
  { id: "marco", index: "01", title: "Marco normativo y actos constitutivos" },
  { id: "estructura", index: "02", title: "Estructura orgánica y autoridades" },
  { id: "socias", index: "03", title: "Municipalidades socias" },
  { id: "presupuesto", index: "04", title: "Presupuesto y ejecución presupuestaria" },
  { id: "cuotas", index: "05", title: "Cuotas y aportes de las municipalidades socias" },
  { id: "contrataciones", index: "06", title: "Contrataciones y adquisiciones" },
  { id: "actas", index: "07", title: "Actas de asamblea y de directorio" },
  { id: "transferencias", index: "08", title: "Transferencias y aportes de fondos públicos" },
  { id: "solicitudes", index: "09", title: "Solicitudes de información pública" },
] as const;

export function initials(name: string) {
  const parts = name.split(" ").filter(Boolean);
  return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();
}

export function isCurrent(pathname: string, href: string) {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return href === "/" ? path === "/" : path === href;
}

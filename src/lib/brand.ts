export const BRAND = {
  name: "Elfurat Spices",
  domain: "elfuratspices.com",
  phones: ["+91 70119 21692"],
  whatsapp: "917011921692", // primary, digits only for wa.me
  emails: ["abdullah@elfuratspices.com", "yunus@elfuratspices.com"],
  address:
    "RZ-3285 Third Floor, Gali No-37, Tughlakabad Extn, Near Shahi Public School, Kalkaji, South Delhi, India 110019",
} as const;

export const CDN = "/assets";

export const LOGOS = {
  whatsapp: `${CDN}/whatsapp.webp`,
  color3x1: `${CDN}/Multicolor%203x1%20Logo.webp`,
  colorIcon: `${CDN}/Multicolor%20Icon.webp`,
  colorRound: `${CDN}/Multicolor%20Round%20Logo.webp`,
  colorSquare: `${CDN}/Multicolor%20Square%20Logo.webp`,
  white3x1: `${CDN}/White%203x1%20Logo.webp`,
  whiteIcon: `${CDN}/White%20Icon.webp`,
  whiteRound: `${CDN}/White%20Round%20logo.webp`,
  whiteSquare: `${CDN}/White%20Square%20logo.webp`,
};

export const CERTS = [
  { name: "APEDA", src: `${CDN}/APEDA%20Logo.webp` },
  { name: "FSSAI", src: `${CDN}/FSSAI%20Logo.webp` },
  { name: "FDA", src: `${CDN}/FDA-Emblem-logo.webp` },
  { name: "ISO", src: `${CDN}/ISO%20Logo.webp` },
  { name: "Spice Board of India", src: `${CDN}/Spice%20Board%20Logo.webp` },
];

export const HERO_IMAGES = {
  spicesHero: `${CDN}/01.webp`,
  farmSourcing: `${CDN}/03A.webp`,
  fresh: `${CDN}/04A.webp`,
  processing: `${CDN}/04B.webp`,
  packaging: `${CDN}/04C.webp`,
  export: `${CDN}/04D.webp`,
  wholeSpicesA: `${CDN}/05A.webp`,
  wholeSpicesB: `${CDN}/05B.webp`,
  wholeSpicesC: `${CDN}/05C.webp`,
  wholeSpicesD: `${CDN}/05D.webp`,
  turmericVisual: `${CDN}/06A.webp`,
  chilliVisual: `${CDN}/06B.webp`,
  corianderVisual: `${CDN}/06C.webp`,
  masalaVisual: `${CDN}/06D.webp`,
  aromaticsA: `${CDN}/07A.webp`,
  aromaticsB: `${CDN}/07B.webp`,
  aromaticsC: `${CDN}/07C.webp`,
  nutsA: `${CDN}/11A.webp`,
  nutsB: `${CDN}/11B.webp`,
  nutsC: `${CDN}/11C.webp`,
  nutsD: `${CDN}/11D.webp`,
  driedA: `${CDN}/12A.webp`,
  driedB: `${CDN}/12B.webp`,
  driedC: `${CDN}/12C.webp`,
  makhanaA: `${CDN}/13A.webp`,
  makhanaB: `${CDN}/13B.webp`,
  dairy1: `${CDN}/14A.webp`,
  dairy2: `${CDN}/14B.webp`,
  warehouse1: `${CDN}/15A.webp`,
  warehouse2: `${CDN}/15B.webp`,
  warehouse3: `${CDN}/15C.webp`,
  facility1: `${CDN}/16A.webp`,
  facility2: `${CDN}/16B.webp`,
  extra1: `${CDN}/18A.webp`,
  extra2: `${CDN}/20A.webp`,
};

export const USPS = [
  "Export Quality",
  "ISO Certified",
  "Farm to Fork",
  "100% Pure",
  "APEDA Registered",
  "FSSAI Approved",
  "Global Shipping",
  "Bulk B2B Orders",
  "Traceable Sourcing",
  "Spice Board of India",
];

export function waUrl(message: string) {
  return `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`;
}


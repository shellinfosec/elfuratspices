export const BRAND = {
  name: "Elfurat Spices",
  domain: "elfuratspices.com",
  phones: ["+91 78382 63460", "+91 70119 21692"],
  whatsapp: "917838263460", // primary, digits only for wa.me
  emails: ["abdullah@elfuratspices.com", "yunus@elfuratspices.com"],
  address:
    "RZ-3285 Third Floor, Gali No-37, Tughlakabad Extn, Near Shahi Public School, Kalkaji, South Delhi, India 110019",
} as const;

export const CDN = "/assets";

export const LOGOS = {
  whatsapp: `${CDN}/whatsapp.png`,
  color3x1: `${CDN}/Multicolor%203x1%20Logo.png`,
  colorIcon: `${CDN}/Multicolor%20Icon.png`,
  colorRound: `${CDN}/Multicolor%20Round%20Logo.png`,
  colorSquare: `${CDN}/Multicolor%20Square%20Logo.png`,
  white3x1: `${CDN}/White%203x1%20Logo.png`,
  whiteIcon: `${CDN}/White%20Icon.png`,
  whiteRound: `${CDN}/White%20Round%20logo.png`,
  whiteSquare: `${CDN}/White%20Square%20logo.png`,
};

export const CERTS = [
  { name: "APEDA", src: `${CDN}/APEDA%20Logo.png` },
  { name: "FSSAI", src: `${CDN}/FSSAI%20Logo.png` },
  { name: "FDA", src: `${CDN}/FDA-Emblem-logo.png` },
  { name: "ISO", src: `${CDN}/ISO%20Logo.png` },
  { name: "Spice Board of India", src: `${CDN}/Spice%20Board%20Logo.png` },
];

export const HERO_IMAGES = {
  spicesHero: `${CDN}/01.png`,
  farmSourcing: `${CDN}/03A.png`,
  fresh: `${CDN}/04A.png`,
  processing: `${CDN}/04B.png`,
  packaging: `${CDN}/04C.png`,
  export: `${CDN}/04D.png`,
  wholeSpicesA: `${CDN}/05A.png`,
  wholeSpicesB: `${CDN}/05B.png`,
  wholeSpicesC: `${CDN}/05C.png`,
  wholeSpicesD: `${CDN}/05D.png`,
  turmericVisual: `${CDN}/06A.png`,
  chilliVisual: `${CDN}/06B.png`,
  corianderVisual: `${CDN}/06C.png`,
  masalaVisual: `${CDN}/06D.png`,
  aromaticsA: `${CDN}/07A.png`,
  aromaticsB: `${CDN}/07B.png`,
  aromaticsC: `${CDN}/07C.png`,
  nutsA: `${CDN}/11A.png`,
  nutsB: `${CDN}/11B.png`,
  nutsC: `${CDN}/11C.png`,
  nutsD: `${CDN}/11D.png`,
  driedA: `${CDN}/12A.png`,
  driedB: `${CDN}/12B.png`,
  driedC: `${CDN}/12C.png`,
  makhanaA: `${CDN}/13A.png`,
  makhanaB: `${CDN}/13B.png`,
  dairy1: `${CDN}/14A.png`,
  dairy2: `${CDN}/14B.png`,
  warehouse1: `${CDN}/15A.png`,
  warehouse2: `${CDN}/15B.png`,
  warehouse3: `${CDN}/15C.png`,
  facility1: `${CDN}/16A.png`,
  facility2: `${CDN}/16B.png`,
  extra1: `${CDN}/18A.png`,
  extra2: `${CDN}/20A.png`,
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

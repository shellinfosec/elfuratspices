import { CDN } from "./brand";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  hero: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string; // category slug
  image: string;
  origin: string;
  form: string;
  packSizes: string[];
  shelfLife: string;
  moq: string;
  description: string;
  highlights: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "whole-spices",
    name: "Whole Spices",
    tagline: "Hand-selected, sun-dried, and export-graded.",
    description:
      "Single-origin whole spices sourced from India's finest growing belts. Cleaned, graded, and packed to preserve essential oil content for maximum aroma and shelf life.",
    hero: `${CDN}/05A.webp`,
  },
  {
    slug: "ground-spices",
    name: "Ground Spices",
    tagline: "Cold-milled powders with lab-verified color values.",
    description:
      "Precision-milled powders with consistent granulometry, natural color, and rich flavor profile. Ideal for retail packaging and industrial food manufacturing.",
    hero: `${CDN}/06D.webp`,
  },
  {
    slug: "masala-blends",
    name: "Masala Blends",
    tagline: "Signature Indian recipes, formulated for global palates.",
    description:
      "Master-blended by seasoned formulators, our masalas deliver a repeatable, authentic Indian taste - from Chaat to Garam Masala.",
    hero: `${CDN}/06D.webp`,
  },
  {
    slug: "aromatics",
    name: "Aromatics & Herbs",
    tagline: "Fragrant leaves, seeds, and specialty botanicals.",
    description:
      "A curated shelf of niche aromatics - from Bay Leaves to Kokum - sourced from indigenous belts across India.",
    hero: `${CDN}/07A.webp`,
  },
  {
    slug: "nuts",
    name: "Nuts",
    tagline: "Premium kernels, calibrated and lot-coded.",
    description:
      "Grade A almonds, cashews, walnuts, and pistachios - export packed with vacuum and nitrogen options to retain freshness.",
    hero: `${CDN}/11A.webp`,
  },
  {
    slug: "dried-fruits-seeds",
    name: "Dried Fruits & Seeds",
    tagline: "Wellness-grade functional foods.",
    description:
      "Premium dried fruits, functional seeds, and superfood ingredients for HORECA and retail channels.",
    hero: `${CDN}/12A.webp`,
  },
  {
    slug: "makhana",
    name: "Makhana (Fox Nuts)",
    tagline: "Bihar-sourced, hand-popped fox nuts.",
    description:
      "Puffed, sorted, and grade-tested makhana - plain and roasted variants ready for retail SKUs.",
    hero: `${CDN}/13A.webp`,
  },
  {
    slug: "dairy-staples",
    name: "Dairy & Staples",
    tagline: "Complementary pantry staples.",
    description:
      "Pure ghee, paneer, cheese, and curd - dairy staples produced under HACCP certified units.",
    hero: `${CDN}/14A.webp`,
  },
];

const img = (name: string) => `${CDN}/${encodeURIComponent(name)}.webp`;

const P = (
  slug: string,
  name: string,
  category: string,
  file: string,
  origin: string,
  description: string,
  extra: Partial<Product> = {}
): Product => ({
  slug,
  name,
  category,
  image: img(file),
  origin,
  form: extra.form ?? "Whole",
  packSizes: extra.packSizes ?? ["100g", "500g", "1kg", "5kg", "25kg bulk"],
  shelfLife: extra.shelfLife ?? "24 months",
  moq: extra.moq ?? "500 kg",
  description,
  highlights:
    extra.highlights ?? [
      "Single-origin sourcing",
      "Lab-tested purity",
      "Export-grade packaging",
      "Traceable lot coding",
    ],
});

export const PRODUCTS: Product[] = [
  // Whole spices
  P("green-cardamom", "Green Cardamom", "whole-spices", "Green Cardamom", "Idukki, Kerala",
    "Bold 7mm+ green cardamom pods with vibrant color and intense aromatic oil content - the gold standard for premium blends."),
  P("black-cardamom", "Black Cardamom", "whole-spices", "Black Cardamom", "Sikkim & Darjeeling",
    "Smoke-cured large black cardamom with a robust, resinous aroma - essential for slow-cooked meat curries."),
  P("cinnamon", "Cinnamon", "whole-spices", "Cinnamon", "Kerala, India",
    "Sweet-woody cinnamon quills, hand-rolled and sun-cured for consistent essential oil yield."),
  P("cloves", "Cloves", "whole-spices", "Cloves", "Kerala & Tamil Nadu",
    "Plump, oil-rich cloves with intact heads - sorted by hand for whole-bud consistency."),
  // (whole black pepper skipped - see ground-spices for Black Pepper Powder)
  P("cumin-seeds", "Cumin Seeds", "whole-spices", "Cumin Seeds", "Unjha, Gujarat",
    "Machine-cleaned Gujarat cumin with 99% purity and >2.5% volatile oil - the international benchmark."),
  P("coriander-seeds", "Coriander Seeds", "whole-spices", "Coriander Seeds", "Rajasthan & MP",
    "Eagle-green coriander seeds prized for citrus-forward aroma and low chaff content."),
  P("fennel-seeds", "Fennel Seeds", "whole-spices", "Fennel Seeds", "Gujarat",
    "Sweet, plump lucknowi fennel - a mainstay of digestive blends and premium mukhwas."),
  P("fenugreek-seeds", "Fenugreek Seeds", "whole-spices", "Fenugrek Seeds", "Rajasthan",
    "Sharp, maple-sweet methi seeds with clean color grading."),
  P("mustard-seeds", "Mustard Seeds", "whole-spices", "Mustard Seeds", "Rajasthan & Haryana",
    "Black and yellow mustard seeds sorted for size and oil content."),
  P("nigella-seeds", "Nigella Seeds (Kalonji)", "whole-spices", "Nigella Seeds", "West Bengal",
    "Clean, sharp kalonji seeds - a Middle-Eastern and South Asian bakery essential."),
  P("black-cumin", "Black Cumin (Shahi Jeera)", "whole-spices", "Black Cumin Seeds", "Kashmir",
    "Rare Himalayan black cumin - dark, slender, and aromatic - from high-altitude farms."),
  P("carom-seeds", "Carom Seeds (Ajwain)", "whole-spices", "Carom Seeds", "Rajasthan",
    "Ajwain with pronounced thymol notes - high oil, sharp fragrance."),
  P("sesame-seeds", "Sesame Seeds", "whole-spices", "Sesame Seeds", "Gujarat",
    "Hulled and natural sesame - bakery grade, low FFA."),
  P("star-anise", "Star Anise", "whole-spices", "Star Anise", "Meghalaya & Import",
    "Whole eight-point stars, sorted for size and aroma."),
  P("mace", "Mace (Javitri)", "whole-spices", "Mace", "Kerala",
    "Bright orange mace petals with intact structure and rich volatile oils."),
  P("nutmeg", "Nutmeg", "whole-spices", "Nutmeg", "Kerala",
    "Dense, oil-rich nutmeg - machine-cracked from mature Kerala kernels."),
  P("long-pepper", "Long Pepper (Pippali)", "whole-spices", "Long Pepper", "South India",
    "Rare pippali - pungent, sweet, and slow-burning."),
  P("white-pepper", "White Pepper", "whole-spices", "White Pepper", "Karnataka",
    "Water-cured, decorticated white pepper for light sauces and dressings."),

  // Ground / powdered
  P("turmeric-powder", "Turmeric Powder", "ground-spices", "Turmeric Powder", "Erode & Sangli",
    "High-curcumin turmeric powder (>3%) with brilliant golden color - the export benchmark.",
    { form: "Powder" }),
  P("red-chilli-powder", "Red Chilli Powder", "ground-spices", "Red Chilli Powder", "Guntur & Byadgi",
    "Guntur and Byadgi blends calibrated for ASTA color and heat - customizable to buyer spec.",
    { form: "Powder" }),
  P("coriander-powder", "Coriander Powder", "ground-spices", "Coriander Powder", "Rajasthan",
    "Freshly milled coriander powder with citrus-bright top notes and low water content.",
    { form: "Powder" }),
  P("cumin-powder", "Cumin Powder", "ground-spices", "Cumin Powder", "Gujarat",
    "Cold-milled cumin powder retaining essential oils for aromatic potency.",
    { form: "Powder" }),
  P("black-pepper-powder", "Black Pepper Powder", "ground-spices", "Black Pepper Powder", "Malabar Coast",
    "Machine-cleaned Malabar black pepper, milled to spec granulometry.",
    { form: "Powder" }),
  P("ginger-powder", "Ginger Powder", "ground-spices", "Ginger Powder", "Kerala & NE India",
    "Sonth powder - sharp, pungent, and light in color.",
    { form: "Powder" }),
  P("garlic-powder", "Garlic Powder", "ground-spices", "Garlic Powder", "Madhya Pradesh",
    "Air-dried garlic powder without anti-caking agents - pure and aromatic.",
    { form: "Powder" }),
  P("dry-mango-powder", "Dry Mango Powder (Amchur)", "ground-spices", "Dry Mango Powder", "UP & MP",
    "Sun-dried raw mango milled to a tangy, chef-grade souring agent.",
    { form: "Powder" }),
  P("dried-ginger", "Dried Ginger", "ground-spices", "Dried Ginger", "Kerala",
    "Whole and split dried ginger - clean, low-fibre grade.",
    { form: "Whole/Split" }),

  // Masala blends
  P("garam-masala", "Garam Masala", "masala-blends", "Garam Masala", "In-house formulation",
    "Signature warm-spice blend layered with 14 whole spices - roasted then stone-ground.", { form: "Powder Blend" }),
  P("chaat-masala", "Chaat Masala", "masala-blends", "Chaat Masala", "In-house formulation",
    "Tangy, savory, sulfurous - a classic Indian street-snack finisher.", { form: "Powder Blend" }),
  P("curry-powder", "Curry Powder", "masala-blends", "Curry Powder", "In-house formulation",
    "Balanced curry blend developed for European and Middle-Eastern culinary use.", { form: "Powder Blend" }),
  P("panch-phoron", "Panch Phoron", "masala-blends", "Panch Phoron", "Eastern India",
    "The classic five-seed Bengali tempering blend - whole, un-milled.", { form: "Whole Blend" }),

  // Aromatics
  P("bay-leaves", "Bay Leaves (Tej Patta)", "aromatics", "Bay Leaves", "Himalayan foothills",
    "Broad, unbroken tej patta leaves with strong cinnamaldehyde profile."),
  P("curry-leaves", "Curry Leaves", "aromatics", "Curry Leaves", "South India",
    "Fresh-dried curry leaves retaining pigment and aroma - no preservatives."),
  P("dried-fenugreek-leaves", "Kasuri Methi", "aromatics", "Dried Fenugreek Leaves", "Rajasthan",
    "Air-dried fenugreek leaves - the finishing herb of North Indian cuisine."),
  P("asafoetida", "Asafoetida (Hing)", "aromatics", "Asafoetida", "Afghanistan / Kashmir",
    "Compounded hing powder in food-safe wheat-flour base - sulfurous, umami depth."),
  P("saffron", "Saffron", "aromatics", "Saffron", "Pampore, Kashmir",
    "Premium Kashmiri Mongra saffron - deep red stigmas, high crocin and safranal values."),
  P("kokum", "Kokum", "aromatics", "Kokum", "Konkan Coast",
    "Sun-dried kokum rinds - a natural souring agent with cooling properties."),
  P("tamarind", "Tamarind", "aromatics", "Tamarind", "Tamil Nadu & AP",
    "Seedless tamarind slabs and paste - clean color, balanced acidity."),
  P("rock-salt", "Rock Salt (Sendha Namak)", "aromatics", "Rock Salt", "Himalayan reserves",
    "Pink Himalayan rock salt in crystal, granule, and powder forms."),
  P("black-salt", "Black Salt (Kala Namak)", "aromatics", "Black Salt", "Himalayan reserves",
    "Kiln-fired kala namak with sulfurous, egg-like depth."),
  P("pomegranate-seed-powder", "Anardana", "aromatics", "Pomegranate Seed Powder", "Himachal Pradesh",
    "Dried wild pomegranate seed powder - a tart, ruby-toned souring agent."),
  P("bamboo-shoot-powder", "Bamboo Shoot Powder", "aromatics", "Bamboo Shoot Powder", "North-East India",
    "Fermented bamboo shoot powder - a signature NE Indian umami ingredient.", { form: "Powder" }),

  // Nuts
  P("almonds", "Almonds", "nuts", "Almonds", "California & Kashmir",
    "Non-pareil and Kashmiri almonds - sortex-clean, calibrated by size."),
  P("mamra-almonds", "Mamra Almonds", "nuts", "Mamra Almonds", "Iran / Kashmir",
    "Rare mamra badam - organic, sweet-oiled, chef and gifting grade."),
  P("cashews", "Cashews", "nuts", "Cashews", "Goa & Kerala",
    "W180 to W320 cashew grades - vacuum-nitrogen packed for maximum shelf life."),
  P("pistachio", "Pistachio", "nuts", "Pistachio", "Iran / USA imports",
    "Naturally opened jumbo pistachios - roasted-salted or plain."),
  P("walnuts", "Walnuts", "nuts", "Walnuts", "Kashmir",
    "Kashmiri walnut halves and kernels - light-color grade, low breakage."),
  P("peanuts", "Peanuts", "nuts", "Peanuts", "Gujarat & AP",
    "Bold Java and Bold Runner peanuts - HPS grade for confectionery and roasting."),

  // Dried fruits & seeds
  P("chia-seeds", "Chia Seeds", "dried-fruits-seeds", "Chia Seeds", "MP & Rajasthan",
    "Cleaned chia seeds - a wellness-grade omega-3 functional seed.", { form: "Seed" }),
  P("watermelon-seeds", "Watermelon Seeds", "dried-fruits-seeds", "Watermelon Seeds", "Rajasthan",
    "Hulled watermelon seeds - protein-rich, mild flavor."),
  P("foxnut-plain", "Foxnut (Plain)", "dried-fruits-seeds", "Foxnut", "Bihar",
    "Grade A plain makhana - large, uniform puff.", { form: "Puffed" }),

  // Makhana
  P("foxnut", "Fox Nuts (Makhana)", "makhana", "Foxnut", "Bihar",
    "Signature Elfurat makhana - grade tested, uniform pop, ready for retail SKUs.", { form: "Puffed" }),

  // Dairy & staples
  P("pure-ghee", "Pure Cow Ghee", "dairy-staples", "Pure Ghee", "Haryana & Punjab",
    "Traditional bilona-method cow ghee - granular texture, rich caramel aroma.", { form: "Ghee" }),
  P("honey", "Honey", "dairy-staples", "Honey", "India",
    "100% Natural, Raw & Unadulterated Honey. FSSAI Certified. Varieties available: Jamun Honey, Lychee Honey, Eucalyptus Honey, Mustard Honey.", { form: "Liquid" }),
  P("paneer", "Paneer", "dairy-staples", "Paneer", "India",
    "Fresh farm paneer - firm bite, high protein.", { form: "Fresh" }),
  P("cheese", "Cheese", "dairy-staples", "Cheese", "India",
    "Processed and mozzarella cheese - HORECA grade.", { form: "Block" }),
  P("curd", "Curd", "dairy-staples", "Curd", "India",
    "Set curd - thick, creamy, and probiotic-rich.", { form: "Set" }),
];

export function productsByCategory(slug: string) {
  return PRODUCTS.filter((p) => p.category === slug);
}
export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}


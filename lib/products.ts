export type Product = {
  name: string;
  slug: string;
  category: "Pulses & Lentils" | "Grains" | "Seeds" | "Spices";
  image: string;
  shortDescription: string;
  overview: string;
  specs: {
    origin: string;
    harvestPeriod: string;
    color: string;
    packaging: string;
    labeling: string;
    shelfLife: string;
    gmoStatus: string;
    specification: string;
  };
  containerCapacity: {
    twentyFt: string;
    fortyFt: string;
  };
  applications: string[];
  benefits: string[];
};

const SEO_SUFFIX = "-suppliers-exporter";

export function getProductRouteSlug(slug: string) {
  return `${slug}${SEO_SUFFIX}`;
}

export function getProductHref(slug: string) {
  return `/products/${getProductRouteSlug(slug)}`;
}

export function getProductByRouteSlug(routeSlug: string) {
  const normalizedRouteSlug =
    routeSlug === "toor-dal-suupliers-exporter"
      ? "toor-dal-suppliers-exporter"
      : routeSlug;

  const normalizedSlug = normalizedRouteSlug.endsWith(SEO_SUFFIX)
    ? normalizedRouteSlug.slice(0, -SEO_SUFFIX.length)
    : normalizedRouteSlug;

  return products.find((product) => product.slug === normalizedSlug);
}

export const products: Product[] = [
  {
    name: "Alfalfa Seeds",
    slug: "alfalfa-seeds",
    category: "Seeds",
    image: "/products_images/Alfalfa_seeds.webp",
    shortDescription: "Cleaned export-grade alfalfa seeds for food and agricultural applications.",
    overview:
      "Opelion Global supplies premium alfalfa seeds sourced from trusted Indian growers and processed for consistent export quality. The product is cleaned, sorted, and packed for reliable international shipments.",
    specs: {
      origin: "India",
      harvestPeriod: "February to April",
      color: "Natural greenish-brown",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "18-20 MT",
      fortyFt: "26-27 MT",
    },
    applications: ["Sprouting", "Health foods", "Animal feed blends", "Retail packing"],
    benefits: ["Protein rich", "High fiber", "Versatile use", "Consistent export quality"],
  },
  {
    name: "Cumin Seeds",
    slug: "cumin-seeds",
    category: "Spices",
    image: "/products_images/Cumin_seeds.webp",
    shortDescription: "Bold, aromatic cumin seeds processed for export markets.",
    overview:
      "Our cumin seeds are selected for strong aroma, uniform size, and clean appearance. They are suitable for importers, spice blenders, wholesalers, and private-label buyers.",
    specs: {
      origin: "India",
      harvestPeriod: "March to May",
      color: "Brown",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "14 MT",
      fortyFt: "26 MT",
    },
    applications: ["Spice blends", "Seasoning", "Food manufacturing", "Retail spice packs"],
    benefits: ["Strong aroma", "Bold seeds", "Uniform grading", "Suitable for bulk export"],
  },
  {
    name: "Ragi",
    slug: "ragi",
    category: "Grains",
    image: "/products_images/Ragi.webp",
    shortDescription: "Nutritious finger millet grains with reliable export-grade cleaning.",
    overview:
      "Opelion Global offers high-quality ragi sourced from dependable farming regions in India. The grains are cleaned and packed for consistent delivery to global buyers seeking healthy grain ingredients.",
    specs: {
      origin: "India",
      harvestPeriod: "November to January",
      color: "Reddish brown",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "24 MT",
      fortyFt: "26 MT",
    },
    applications: ["Flour milling", "Breakfast cereals", "Health foods", "Bulk grain supply"],
    benefits: ["Rich in calcium", "Good fiber content", "Popular health grain", "Bulk-ready packing"],
  },
  {
    name: "Sunflower Seeds",
    slug: "sunflower-seeds",
    category: "Seeds",
    image: "/products_images/Sunflower_seeds.webp",
    shortDescription: "Oil-rich sunflower seeds for food, snacking, and industrial use.",
    overview:
      "These sunflower seeds are processed with attention to cleanliness, uniformity, and export packing standards. They are suitable for food processors, snack brands, and ingredient traders.",
    specs: {
      origin: "India",
      harvestPeriod: "January to March",
      color: "Black and white striped",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "13 MT",
      fortyFt: "26 MT",
    },
    applications: ["Bakery ingredients", "Snacking", "Bird feed", "Oil extraction"],
    benefits: ["Oil-rich", "Cleaned and sorted", "Multi-use ingredient", "Export friendly"],
  },
  {
    name: "Flax Seeds",
    slug: "flax-seeds",
    category: "Seeds",
    image: "/products_images/Flax_seeds.webp",
    shortDescription: "Premium flax seeds with stable quality for global food buyers.",
    overview:
      "Our flax seeds are sourced for consistency, cleaned to export norms, and packed for bulk and retail requirements. They work well across health food, bakery, and nutraceutical channels.",
    specs: {
      origin: "India",
      harvestPeriod: "February to April",
      color: "Brown",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "19 MT",
      fortyFt: "26 MT",
    },
    applications: ["Baking", "Healthy mixes", "Cold milling", "Food processing"],
    benefits: ["Omega-rich profile", "Clean appearance", "Bulk shipment ready", "Popular health ingredient"],
  },
  {
    name: "Pumpkin Seeds",
    slug: "pumpkin-seeds",
    category: "Seeds",
    image: "/products_images/Pumpkin_seeds.webp",
    shortDescription: "Nutrient-dense pumpkin seeds processed for bulk export supply.",
    overview:
      "Opelion Global supplies carefully cleaned pumpkin seeds suitable for ingredient buyers and food brands. The product is packed to maintain quality throughout export logistics.",
    specs: {
      origin: "India",
      harvestPeriod: "September to December",
      color: "Dark green",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "16 MT",
      fortyFt: "24 MT",
    },
    applications: ["Snacking", "Trail mixes", "Bakery toppings", "Ingredient supply"],
    benefits: ["High protein", "Uniform quality", "Bulk-ready packing", "Good visual appeal"],
  },
  {
    name: "Chia Seeds",
    slug: "chia-seeds",
    category: "Seeds",
    image: "/products_images/Chia_seeds.webp",
    shortDescription: "Export-quality chia seeds with excellent cleanliness and uniformity.",
    overview:
      "These chia seeds are processed for purity, consistent sizing, and safe export packing. They fit health food brands, wholesalers, and ingredient importers across multiple markets.",
    specs: {
      origin: "India",
      harvestPeriod: "February to April",
      color: "Black",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "22 MT",
      fortyFt: "28 MT",
    },
    applications: ["Health foods", "Beverage mixes", "Bakery", "Retail packs"],
    benefits: ["Omega-3 rich", "Uniform size", "Cleaned product", "Strong export demand"],
  },
  {
    name: "White Quinoa",
    slug: "white-quinoa",
    category: "Grains",
    image: "/products_images/White_Quinoa.webp",
    shortDescription: "Premium white quinoa for importers, retailers, and food processors.",
    overview:
      "Opelion Global offers export-grade white quinoa sourced and processed for international markets. The product is known for its clean finish, uniform grain size, and dependable supply quality.",
    specs: {
      origin: "India",
      harvestPeriod: "February to March",
      color: "Cremish Colour",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "20-22 MT",
      fortyFt: "26-27 MT",
    },
    applications: ["Retail grains", "Ready-to-cook products", "Healthy meal mixes", "Food service"],
    benefits: ["High protein", "Gluten-free", "Uniform grain size", "Excellent export presentation"],
  },
    {
    name: "Red Quinoa",
    slug: "red-quinoa",
    category: "Grains",
    image: "/products_images/Red_Quinoa.webp",
    shortDescription: "Premium red quinoa with distinct color and export-grade processing.",
    overview:
      "Opelion Global supplies red quinoa for buyers looking for premium grains with strong shelf appeal and dependable export quality. It is cleaned, graded, and packed for retail, food service, and ingredient applications.",
    specs: {
      origin: "India",
      harvestPeriod: "February to March",
      color: "Red",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "20-22 MT",
      fortyFt: "26-27 MT",
    },
    applications: ["Retail grains", "Salad bowls", "Premium meal kits", "Food service"],
    benefits: ["Distinctive color", "Premium grain appeal", "Clean finish", "Export-ready supply"],
  },
  {
    name: "Black Quinoa",
    slug: "black-quinoa",
    category: "Grains",
    image: "/products_images/Organic_BlackQuinoa.webp",
    shortDescription: "Premium black quinoa for buyers seeking bold color and strong shelf appeal.",
    overview:
      "Black quinoa is supplied with attention to visual quality, grain consistency, and export packaging. It is suitable for premium grain programs, retail blends, and food service applications.",
    specs: {
      origin: "India",
      harvestPeriod: "February to March",
      color: "Black",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "20-22 MT",
      fortyFt: "26-27 MT",
    },
    applications: ["Premium retail packs", "Healthy grain blends", "Food service", "Meal kits"],
    benefits: ["Distinctive appearance", "Premium positioning", "Clean grading", "Export-ready quality"],
  },
  {
    name: "Tricolour Quinoa",
    slug: "tricolour-quinoa",
    category: "Grains",
    image: "/products_images/Tricolour_Quinoa.webp",
    shortDescription: "A premium tricolour quinoa blend designed for visual appeal and balanced texture.",
    overview:
      "Our tricolour quinoa combines strong shelf appeal with dependable processing quality. It is suitable for retail packs, food service channels, and premium healthy grain brands.",
    specs: {
      origin: "India",
      harvestPeriod: "February to March",
      color: "Mixed white, red, and black",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "20-22 MT",
      fortyFt: "26-27 MT",
    },
    applications: ["Retail blends", "Salad mixes", "Ready meals", "Health-focused menus"],
    benefits: ["Premium appearance", "Balanced texture", "Clean sorting", "Strong buyer appeal"],
  },
  {
    name: "Quinoa Flour",
    slug: "quinoa-flour",
    category: "Grains",
    image: "/products_images/Quinoa_flour1.webp",
    shortDescription: "Fine quinoa flour for baking, health foods, and functional ingredient use.",
    overview:
      "Quinoa flour is milled from quality quinoa grains and packed for export consistency. It is suitable for gluten-free product manufacturers, baking applications, and retail health food programs.",
    specs: {
      origin: "India",
      harvestPeriod: "February to March",
      color: "Off-white",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "20-22 MT",
      fortyFt: "26-27 MT",
    },
    applications: ["Gluten-free baking", "Health mixes", "Functional foods", "Retail flour packs"],
    benefits: ["Fine milling", "Gluten-free appeal", "Consistent texture", "Premium ingredient positioning"],
  },
   {
    name: "Quinoa Puff",
    slug: "quinoa-puff",
    category: "Grains",
    image: "/products_images/Quinoa_puffs.webp",
    shortDescription: "Light quinoa puffs for cereals, snacks, and healthy food formulations.",
    overview:
      "Quinoa puff is prepared for food manufacturers and retail brands looking for a clean-label grain ingredient. It is packed to preserve quality and handling convenience through export logistics.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Light cream",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "10 MT",
      fortyFt: "18 MT",
    },
    applications: ["Breakfast cereals", "Snack bars", "Healthy snacks", "Ingredient mixes"],
    benefits: ["Light texture", "Ready-to-use format", "Premium grain ingredient", "Retail friendly"],
  },
  // {
  //   name: "Organic Black Quinoa",
  //   slug: "organic-black-quinoa",
  //   category: "Grains",
  //   image: "/products_images/Organic_BlackQuinoa.webp",
  //   shortDescription: "Organic black quinoa with strong visual appeal and premium positioning.",
  //   overview:
  //     "This organic black quinoa is supplied for buyers looking for distinctive premium grains. It is processed and packed with care to meet export expectations for consistency and presentation.",
  //   specs: {
  //     origin: "India",
  //     harvestPeriod: "February to March",
  //     color: "Black",
  //     packaging: "10 kg and 25 kg paper bags",
  //     labeling: "Private labeling as per buyer requirement",
  //     shelfLife: "24 months",
  //     gmoStatus: "GMO Free",
  //     specification: "Detailed specification on request",
  //   },
  //   containerCapacity: {
  //     twentyFt: "22 MT",
  //     fortyFt: "25 MT",
  //   },
  //   applications: ["Premium retail packs", "Healthy grain blends", "Food service", "Organic ranges"],
  //   benefits: ["Organic positioning", "Distinctive appearance", "High nutritional value", "Export-ready quality"],
  // },
  
  {
    name: "Kalonji Seeds",
    slug: "kalonji-seeds",
    category: "Seeds",
    image: "/products_images/Kaloni_seeds.webp",
    shortDescription: "Cleaned kalonji seeds with strong flavor and export-grade handling.",
    overview:
      "Kalonji seeds are supplied for spice, bakery, and traditional food applications. The product is cleaned, packed, and prepared for buyers who need stable supply and export-ready presentation.",
    specs: {
      origin: "India",
      harvestPeriod: "February to April",
      color: "Black",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 6-12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "14 MT",
      fortyFt: "26 MT",
    },
    applications: ["Seasoning", "Bakery toppings", "Spice blends", "Retail spice packs"],
    benefits: ["Strong flavor", "Fine seed quality", "Cleaned product", "Export suitable"],
  },
  {
    name: "Turmeric Powder",
    slug: "turmeric-powder",
    category: "Spices",
    image: "/products_images/Turmeric_Powder.webp",
    shortDescription: "Bright turmeric powder with strong color and export-grade processing.",
    overview:
      "Opelion Global supplies turmeric powder suitable for spice importers, food manufacturers, and wholesale distributors. The powder is prepared for color consistency, cleanliness, and packaging reliability.",
    specs: {
      origin: "India",
      harvestPeriod: "January to March",
      color: "Bright yellow",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "12-14 MT",
      fortyFt: "24-26 MT",
    },
    applications: ["Seasoning blends", "Food processing", "Retail spice packs", "Bulk spice trade"],
    benefits: ["Strong color", "Clean grind", "Bulk packaging options", "Suitable for export programs"],
  },
  {
    name: "Toor Dal",
    slug: "toor-dal",
    category: "Pulses & Lentils",
    image: "/products_images/Toor_Dal.webp",
    shortDescription: "Premium toor dal with uniform grains and export-ready packing.",
    overview:
      "Our toor dal is selected for consistency, cleanliness, and dependable supply. It is ideal for importers, wholesalers, and food distributors seeking stable pulse quality for international markets.",
      specs: {
        origin: "India",
        harvestPeriod: "December to February",
        color: "Yellow",
        packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
        labeling: "Private labeling as per buyer requirement",
        shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
        gmoStatus: "GMO Free",
        specification: "Detailed specification on request",
      },
    containerCapacity: {
      twentyFt: "24 MT",
      fortyFt: "26 MT",
    },
    applications: ["Wholesale pulse supply", "Food distribution", "Retail packs", "Institutional supply"],
    benefits: ["Uniform grains", "Reliable cleaning", "Export packaging", "Widely demanded pulse"],
  },
  {
    name: "White Sesame Seeds",
    slug: "white-sesame-seeds",
    category: "Seeds",
    image: "/products_images/White_sesame.webp",
    shortDescription: "Premium white sesame seeds for bakery, oil, and ingredient markets.",
    overview:
      "Opelion Global supplies white sesame seeds processed for export consistency and attractive appearance. The product is suitable for food manufacturers, importers, and private-label packaging programs.",
    specs: {
      origin: "India",
      harvestPeriod: "October to December",
      color: "White",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "18-19 MT",
      fortyFt: "26-27 MT",
    },
    applications: ["Bakery toppings", "Tahini and paste", "Oil extraction", "Retail packs"],
    benefits: ["Bright appearance", "High purity", "Food industry use", "Strong export suitability"],
  },

  {
    name: "Watermelon Seeds",
    slug: "watermelon-seeds",
    category: "Seeds",
    image: "/products_images/Dry_Melon_seeds.webp",
    shortDescription: "Cleaned watermelon seeds for snacking, bakery, and ingredient buyers.",
    overview:
      "Our watermelon seeds are processed for cleanliness, consistent sizing, and dependable export packing. They are suitable for snacking, confectionery, bakery, and ingredient use.",
    specs: {
      origin: "India",
      harvestPeriod: "May to August",
      color: "Off-white to cream",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 6-12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "18 MT",
      fortyFt: "27-28 MT",
    },
    applications: ["Snacking", "Bakery toppings", "Confectionery", "Ingredient supply"],
    benefits: ["Uniform quality", "Good kernel recovery", "Bulk-ready packing", "Export suitable"],
  },
  {
    name: "Basil Seeds",
    slug: "basil-seeds",
    category: "Seeds",
    image: "/products_images/Basil_seeds.webp",
    shortDescription: "Premium basil seeds processed for beverage, dessert, and health food markets.",
    overview:
      "Basil seeds are supplied with attention to purity, moisture control, and export-safe packaging. They are suitable for beverage processors, wholesalers, and health-focused retail brands.",
    specs: {
      origin: "India",
      harvestPeriod: "February to April",
      color: "Black",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 6-12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "19 MT",
      fortyFt: "26 MT",
    },
    applications: ["Beverages", "Desserts", "Health foods", "Retail packs"],
    benefits: ["Hydration-friendly seed", "Uniform quality", "Cleaned product", "Export demand"],
  },
  {
    name: "Hemp Seeds",
    slug: "hemp-seeds",
    category: "Seeds",
    image: "/products_images/Hemp_seeds.webp",
    shortDescription: "Nutrient-rich hemp seeds with dependable cleaning and export packing.",
    overview:
      "Our hemp seeds are processed for ingredient buyers seeking quality consistency, food safety, and reliable bulk supply. They are suitable for health foods, baking, and retail blends.",
    specs: {
      origin: "India",
      harvestPeriod: "February to April",
      color: "Greenish brown",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 6-12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "18-20 MT",
      fortyFt: "25-27 MT",
    },
    applications: ["Health foods", "Protein blends", "Baking", "Retail packs"],
    benefits: ["Protein rich", "Versatile use", "Cleaned and sorted", "Bulk-ready supply"],
  },
  
  {
    name: "Chickpeas",
    slug: "chickpeas",
    category: "Pulses & Lentils",
    image: "/products_images/Chickpeas.webp",
    shortDescription: "Premium chickpeas with consistent grading and export-ready packing.",
    overview:
      "Chickpeas are supplied for wholesalers, food manufacturers, and retail programs requiring dependable cleaning, grading, and bulk export supply. The product is suitable for multiple food applications.",
    specs: {
      origin: "India",
      harvestPeriod: "February to April",
      color: "Cream",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-24 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "24 MT",
      fortyFt: "26 MT",
    },
    applications: ["Retail packs", "Hummus and dips", "Food service", "Bulk pulse trade"],
    benefits: ["Uniform grading", "Reliable cleaning", "Strong food use", "Export-ready supply"],
  },
  {
    name: "Carrot Flakes",
    slug: "carrot-flakes",
    category: "Spices",
    image: "/products_images/Carrot_flakes.webp",
    shortDescription: "Dehydrated carrot flakes for soups, seasonings, and food processing.",
    overview:
      "Carrot flakes are prepared for food ingredient buyers who need dependable dehydration quality, color retention, and export-ready packing. They work well across dry mixes and processing applications.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Orange",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "7-10 MT",
      fortyFt: "25-27 MT",
    },
    applications: ["Soup mixes", "Seasonings", "Ready meals", "Food processing"],
    benefits: ["Good color retention", "Convenient format", "Bulk-ready packing", "Processing friendly"],
  },
  {
    name: "Carrot Powder",
    slug: "carrot-powder",
    category: "Spices",
    image: "/products_images/Carrot_powder1.webp",
    shortDescription: "Fine carrot powder for food blends, natural coloring, and processing applications.",
    overview:
      "Carrot powder is supplied for ingredient buyers looking for dependable dehydration quality, stable color, and export-ready packing. It is suitable for health blends, processed foods, soups, and specialty ingredient programs.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Orange",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "7-10 MT",
      fortyFt: "25-27 MT",
    },
    applications: ["Health blends", "Soup mixes", "Seasonings", "Food processing"],
    benefits: ["Fine powder texture", "Good color retention", "Convenient format", "Export-ready packing"],
  },
  {
    name: "Beetroot Powder",
    slug: "beetroot-powder",
    category: "Spices",
    image: "/products_images/Beetroot_powder.webp",
    shortDescription: "Fine beetroot powder for natural color, health blends, and food processing.",
    overview:
      "Beetroot powder is supplied for nutraceutical, food, and beverage applications. It is processed for stable quality, fine texture, and export-ready packaging.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Deep red",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "11-12 MT",
      fortyFt: "24-25 MT",
    },
    applications: ["Health blends", "Natural coloring", "Bakery", "Food processing"],
    benefits: ["Fine powder texture", "Good color value", "Versatile use", "Export packing ready"],
  },
  {
    name: "Beetroot Flakes",
    slug: "beetroot-flakes",
    category: "Spices",
    image: "/products_images/Beetroot_flakes.webp",
    shortDescription: "Dehydrated beetroot flakes for dry mixes, snacks, and ingredient programs.",
    overview:
      "Beetroot flakes are processed for color consistency and stable export handling. They suit food manufacturers, dry mix processors, and specialty ingredient buyers.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Dark red",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "9-10 MT",
      fortyFt: "18-20 MT",
    },
    applications: ["Soup mixes", "Dry meals", "Snack formulations", "Ingredient supply"],
    benefits: ["Good visual appeal", "Stable dehydration", "Bulk-ready format", "Processing-friendly"],
  },
  {
    name: "Ginger Powder",
    slug: "ginger-powder",
    category: "Spices",
    image: "/products_images/Ginger_powder.webp",
    shortDescription: "Aromatic ginger powder prepared for food, beverage, and spice buyers.",
    overview:
      "Our ginger powder is processed for consistent aroma, controlled moisture, and export packing reliability. It fits spice traders, beverage processors, and food manufacturers.",
      specs: {
        origin: "India",
        harvestPeriod: "January to March",
        color: "Light beige",
        packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
        labeling: "Private labeling as per buyer requirement",
        shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
        gmoStatus: "GMO Free",
        specification: "Detailed specification on request",
      },
      containerCapacity: {
        twentyFt: "11-12 MT",
        fortyFt: "24-25 MT",
      },
      applications: ["Spice blends", "Tea mixes", "Bakery", "Food processing"],
      benefits: ["Strong aroma", "Fine grind", "Stable export packing", "Versatile ingredient"],
    },
    {
      name: "Garlic Powder",
      slug: "garlic-powder",
      category: "Spices",
      image: "/products_images/Garlic_powder.webp",
      shortDescription: "Fine garlic powder for seasonings, dry mixes, and food processing applications.",
      overview:
        "Garlic powder is supplied for buyers who need dependable dehydration quality, balanced aroma, and export-ready packing. It is suitable for spice blends, snack seasoning, food manufacturing, and institutional use.",
      specs: {
        origin: "India",
        harvestPeriod: "Year-round processing",
        color: "Off-white",
        packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
        labeling: "Private labeling as per buyer requirement",
        shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
        gmoStatus: "GMO Free",
        specification: "Detailed specification on request",
      },
      containerCapacity: {
        twentyFt: "12-15 MT",
        fortyFt: "25-27 MT",
      },
      applications: ["Seasoning blends", "Snack coatings", "Ready meals", "Food processing"],
      benefits: ["Strong aroma", "Fine powder texture", "Export-ready packing", "Versatile ingredient"],
    },
    {
      name: "Onion Powder",
      slug: "onion-powder",
      category: "Spices",
      image: "/products_images/Onion_powder.webp",
      shortDescription: "Dehydrated onion powder for seasoning systems, convenience foods, and bulk ingredient supply.",
      overview:
        "Onion powder is prepared for buyers looking for stable dehydration quality, clean flavor, and reliable export handling. It works well across spice blends, snacks, soups, sauces, and food processing programs.",
      specs: {
        origin: "India",
        harvestPeriod: "Year-round processing",
        color: "Cream to light beige",
        packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
        labeling: "Private labeling as per buyer requirement",
        shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
        gmoStatus: "GMO Free",
        specification: "Detailed specification on request",
      },
      containerCapacity: {
        twentyFt: "11-12 MT",
        fortyFt: "24-27 MT",
      },
      applications: ["Seasoning blends", "Soup mixes", "Snack formulations", "Food processing"],
      benefits: ["Convenient powder format", "Stable flavor", "Bulk-ready packing", "Processing friendly"],
    },
    {
      name: "Onion Flakes",
      slug: "onion-flakes",
      category: "Spices",
      image: "/products_images/Onion_flakes.webp",
      shortDescription: "Dehydrated onion flakes for soups, seasonings, dry meals, and ingredient programs.",
      overview:
        "Onion flakes are processed for consistent dehydration, dependable export packing, and practical use across dry mixes and food manufacturing. They suit ingredient buyers, food processors, and bulk importers.",
      specs: {
        origin: "India",
        harvestPeriod: "Year-round processing",
        color: "Off-white to pale yellow",
        packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
        labeling: "Private labeling as per buyer requirement",
        shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
        gmoStatus: "GMO Free",
        specification: "Detailed specification on request",
      },
      containerCapacity: {
        twentyFt: "9-10 MT",
        fortyFt: "18-20 MT",
      },
      applications: ["Soup mixes", "Seasoning blends", "Ready meals", "Food processing"],
      benefits: ["Convenient flake format", "Stable dehydration", "Bulk supply ready", "Good processing performance"],
    },
    {
      name: "Garlic Flakes",
      slug: "garlic-flakes",
      category: "Spices",
      image: "/products_images/Garlic_flakes.webp",
      shortDescription: "Dehydrated garlic flakes for seasonings, food processing, and dry ingredient applications.",
      overview:
        "Garlic flakes are supplied for buyers needing stable dehydration quality, convenient handling, and export-ready packing. They are suitable for seasoning systems, snack applications, ready meals, and ingredient supply.",
      specs: {
        origin: "India",
        harvestPeriod: "Year-round processing",
        color: "Cream to pale yellow",
        packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
        labeling: "Private labeling as per buyer requirement",
        shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
        gmoStatus: "GMO Free",
        specification: "Detailed specification on request",
      },
      containerCapacity: {
        twentyFt: "9-10 MT",
        fortyFt: "18-20 MT",
      },
      applications: ["Seasoning blends", "Dry meals", "Snack formulations", "Food processing"],
      benefits: ["Strong garlic profile", "Convenient flake format", "Export-ready packing", "Bulk ingredient friendly"],
    },
    {
     name: "Tomato Chips",
      slug: "tomato-chips",
      category: "Spices",
    image: "/products_images/Dried_tomato.webp",
    shortDescription: "Dehydrated tomato chips for snack, seasoning, and processing applications.",
    overview:
      "Tomato chips are prepared with controlled drying and suitable export packing for ingredient buyers and food processors. They offer convenience, stable handling, and broad application potential.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Red",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "5-7 MT",
      fortyFt: "10-14 MT",
    },
    applications: ["Snack blends", "Dry meals", "Seasonings", "Food processing"],
    benefits: ["Convenient format", "Good color retention", "Processing friendly", "Bulk export ready"],
  },
  {
    name: "Tomato Powder",
    slug: "tomato-powder",
    category: "Spices",
    image: "/products_images/Tomato_powder.webp",
    shortDescription: "Fine tomato powder for seasoning, sauces, and food manufacturing.",
    overview:
      "Tomato powder is supplied for ingredient buyers who need uniform texture, color, and packaging reliability. It is suitable for dry mixes, sauces, snacks, and institutional food processing.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Red",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
     twentyFt: "11-12 MT",
      fortyFt: "24-25 MT",
    },
    applications: ["Seasoning", "Sauce bases", "Snack blends", "Food processing"],
    benefits: ["Fine powder texture", "Good flavor retention", "Versatile use", "Export-ready packing"],
  },
  {
    name: "Cabbage Powder",
    slug: "cabbage-powder",
    category: "Spices",
    image: "/products_images/Cabbage_powder.webp",
    shortDescription: "Dehydrated cabbage powder for convenience foods and ingredient programs.",
    overview:
      "Cabbage powder is processed for stable shelf life, export packing, and food industry use. It is suitable for dry mixes, soups, snacks, and processing formulations.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Light green",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "11-12 MT",
      fortyFt: "24-25 MT",
    },
    applications: ["Soup blends", "Dry mixes", "Seasonings", "Processed foods"],
    benefits: ["Fine texture", "Stable shelf life", "Bulk packing ready", "Convenient ingredient"],
  },
  {
    name: "Broccoli Powder",
    slug: "broccoli-powder",
    category: "Spices",
    image: "/products_images/Broccoli_powder.webp",
    shortDescription: "Broccoli powder for health blends, food ingredients, and specialty formulations.",
    overview:
      "Broccoli powder is supplied for buyers seeking vegetable-based ingredients with controlled processing quality and export-ready packing. It supports health, food, and specialty product applications.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Green",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "11-12 MT",
      fortyFt: "24-25 MT",
    },
    applications: ["Health blends", "Functional foods", "Soup mixes", "Food processing"],
    benefits: ["Fine powder format", "Convenient use", "Export packing", "Suitable for specialty products"],
  },
  {
    name: "Moringa Powder",
    slug: "moringa-powder",
    category: "Spices",
    image: "/products_images/Moringa_powder.webp",
    shortDescription: "Premium moringa powder for wellness, nutraceutical, and ingredient markets.",
    overview:
      "Moringa powder is supplied for health-conscious product lines, nutraceutical formulations, and export ingredient buyers. It is processed for fine texture and dependable packaging quality.",
    specs: {
      origin: "India",
      harvestPeriod: "Year-round processing",
      color: "Green",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "11-12 MT",
      fortyFt: "24-25 MT",
    },
    applications: ["Health blends", "Nutraceuticals", "Functional foods", "Retail packs"],
    benefits: ["Fine grind", "Wellness positioning", "Bulk-ready packing", "Strong ingredient demand"],
  },
  {
    name: "Mango Powder",
    slug: "mango-powder",
    category: "Spices",
    image: "/products_images/Dry_Mango_Powder.webp",
    shortDescription: "Tangy mango powder for seasoning blends, snacks, and culinary use.",
    overview:
      "Mango powder is processed for flavor consistency, moisture control, and export-safe packaging. It is suitable for spice blenders, snack manufacturers, and wholesale buyers.",
    specs: {
      origin: "India",
      harvestPeriod: "April to June",
      color: "Light beige to pale green",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "11-12 MT",
      fortyFt: "24-25 MT",
    },
    applications: ["Seasonings", "Snack blends", "Spice mixes", "Food processing"],
    benefits: ["Tangy flavor profile", "Consistent quality", "Retail and bulk use", "Export-ready packing"],
  },
  {
    name: "Tamarind Paste",
    slug: "tamarind-paste",
    category: "Spices",
    image: "/products_images/Tamaring_paste.webp",
    shortDescription: "Tamarind paste for culinary, processing, and export ingredient buyers.",
    overview:
      "Tamarind paste is prepared for food manufacturers, wholesalers, and ingredient importers requiring reliable acidity, safe packing, and export-friendly handling.",
    specs: {
      origin: "India",
      harvestPeriod: "January to April",
      color: "Dark brown",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 6-12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "15-22.5 MT",
      fortyFt: "25-28 MT",
    },
    applications: ["Sauces", "Curries", "Marinades", "Food processing"],
    benefits: ["Convenient format", "Strong flavor", "Food-service ready", "Export packing options"],
  },
  {
    name: "Tamarind Seeds Kernel",
    slug: "tamarind-seeds-kernel",
    category: "Seeds",
    image: "/products_images/Tamarind_seeds_kernel.webp",
    shortDescription: "Processed tamarind seed kernel for industrial and food-related applications.",
    overview:
      "Tamarind seed kernel is supplied for buyers needing stable quality, clean processing, and export-ready handling. It is used across food, industrial, and specialty ingredient applications.",
    specs: {
      origin: "India",
      harvestPeriod: "January to April",
      color: "Brown to cream",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "18-20 MT",
      fortyFt: "26-27 MT",
    },
    applications: ["Industrial use", "Food ingredients", "Specialty processing", "Bulk trade"],
    benefits: ["Processed consistency", "Bulk supply ready", "Stable export packing", "Versatile application"],
  },
  {
    name: "Tamarind Powder",
    slug: "tamarind-powder",
    category: "Spices",
    image: "/products_images/Tamarind_powder.webp",
    shortDescription: "Fine tamarind powder for seasoning, culinary, and processing applications.",
    overview:
      "Tamarind powder is prepared with attention to acidity profile, texture, and export packaging quality. It is suitable for spice blends, culinary products, and food processing lines.",
    specs: {
      origin: "India",
      harvestPeriod: "January to April",
      color: "Brown",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "11-12 MT",
      fortyFt: "20-22 MT",
    },
    applications: ["Seasonings", "Snack blends", "Food processing", "Retail spice packs"],
    benefits: ["Fine texture", "Tangy flavor", "Convenient handling", "Export-ready quality"],
  },
  {
    name: "Tamarind Whole Seeds",
    slug: "tamarind-whole-seeds",
    category: "Seeds",
    image: "/products_images/Tamarind_seeds.webp",
    shortDescription: "Whole tamarind seeds supplied for specialty processing and bulk trade.",
    overview:
      "Whole tamarind seeds are cleaned and packed for buyers requiring dependable export handling and bulk supply. The product is suitable for industrial, ingredient, and specialty programs.",
    specs: {
      origin: "India",
      harvestPeriod: "January to April",
      color: "Dark brown",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "18-20 MT",
      fortyFt: "26-27 MT",
    },
    applications: ["Bulk trade", "Industrial processing", "Ingredient programs", "Specialty use"],
    benefits: ["Bulk-ready format", "Clean handling", "Stable export supply", "Versatile downstream use"],
  },
  {
    name: "Tamarind Pulp",
    slug: "tamarind-pulp",
    category: "Spices",
    image: "/products_images/Tamarind_pulp.webp",
    shortDescription: "Export-ready tamarind pulp for sauces, seasonings, and food manufacturing.",
    overview:
      "Tamarind pulp is supplied for culinary and industrial food use with suitable export packing and stable handling. It is ideal for sauces, curries, beverages, and processing applications.",
    specs: {
      origin: "India",
      harvestPeriod: "January to April",
      color: "Dark brown",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 6-12 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "18-20 MT",
      fortyFt: "22-24 MT",
    },
    applications: ["Curries", "Sauces", "Chutneys", "Food processing"],
    benefits: ["Rich flavor", "Convenient use", "Food-service ready", "Export packing available"],
  },
  {
    name: "Masoor Dal",
    slug: "masoor-dal",
    category: "Pulses & Lentils",
    image: "/products_images/Masoor_dal.webp",
    shortDescription: "Premium masoor dal with consistent grading and export-ready packing.",
    overview:
      "Masoor dal is supplied for wholesalers, retail programs, and food distributors seeking dependable pulse quality, clean processing, and stable export packaging for international markets.",
    specs: {
      origin: "India",
      harvestPeriod: "February to April",
      color: "Red to orange",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-18 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "20 MT",
      fortyFt: "27 MT",
    },
    applications: ["Retail packs", "Food service", "Bulk pulse trade", "Institutional supply"],
    benefits: ["Uniform grading", "Reliable cleaning", "Widely consumed pulse", "Export-ready supply"],
  },
  {
    name: "Chana Dal",
    slug: "chana-dal",
    category: "Pulses & Lentils",
    image: "/products_images/Chana_dal.webp",
    shortDescription: "Quality chana dal processed for wholesale, retail, and export markets.",
    overview:
      "Chana dal is supplied with attention to cleanliness, uniform splitting, and dependable export packing. It is suitable for importers, wholesalers, food processors, and retail pulse programs.",
    specs: {
      origin: "India",
      harvestPeriod: "February to April",
      color: "Yellow",
      packaging: "10 kg, 25 kg, 50 kg in PP Bags or Vacuum Packaging",
      labeling: "Private labeling as per buyer requirement",
      shelfLife: "Up to 12-18 months when stored in a cool, dry place, away from moisture and light",
      gmoStatus: "GMO Free",
      specification: "Detailed specification on request",
    },
    containerCapacity: {
      twentyFt: "20 MT",
      fortyFt: "27 MT",
    },
    applications: ["Retail packs", "Food processing", "Institutional supply", "Bulk pulse trade"],
    benefits: ["Uniform split quality", "Clean handling", "Reliable export packing", "High market demand"],
  },
];


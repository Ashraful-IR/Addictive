import ogCrunch from "@/assets/product-og-crunch.jpg";
import redEmber from "@/assets/product-red-ember.jpg";
import verdantFire from "@/assets/product-verdant-fire.jpg";

export const products = [
  {
    id: "og-crunch",
    name: "The OG Crunch",
    tagline: "Where it all began.",
    price: 12.99,
    spiceLevel: 3,
    image: ogCrunch,
    description: "Our signature chili crunch that started the obsession. A perfect balance of heat, crunch, and umami that transforms any dish into an addictive experience. Not for the weak.",
    ingredients: ["Red chili flakes", "Garlic", "Shallots", "Sesame oil", "Soy", "Szechuan peppercorn", "Sea salt"],
    flavorProfile: "Crunchy, garlicky, smoky heat with a lingering tingle.",
  },
  {
    id: "red-ember",
    name: "The Red Ember",
    tagline: "Slow burn. Deep flavor.",
    price: 14.99,
    spiceLevel: 4,
    image: redEmber,
    description: "A deep, smoky chili paste that builds heat slowly and never lets go. Made from fire-roasted red chilies aged to perfection. Handle with caution.",
    ingredients: ["Fire-roasted red chilies", "Smoked paprika", "Tomato", "Garlic", "Cumin", "Black pepper", "Olive oil"],
    flavorProfile: "Deep, smoky, slow-building heat with rich umami undertones.",
  },
  {
    id: "verdant-fire",
    name: "The Verdant Fire",
    tagline: "Green fury unleashed.",
    price: 13.99,
    spiceLevel: 4.5,
    image: verdantFire,
    description: "Our hottest creation. Fresh green chilies blended with herbs for a bright, fiery punch that hits fast and hard. You've been warned.",
    ingredients: ["Green bird's eye chili", "Cilantro", "Lime", "Lemongrass", "Ginger", "Thai basil", "Coconut oil"],
    flavorProfile: "Bright, herbaceous, explosively hot with citrus finish.",
  },
];

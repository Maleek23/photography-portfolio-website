export interface Preset {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  accent: string;
  features: string[];
  compatibleWith: string[];
  beforeImage: string;
  afterImage: string;
  sampleImages: string[];
}

export const presets: Preset[] = [
  {
    slug: "golden-hour",
    name: "Golden Hour",
    tagline: "Warm tones. Soft light. That magic hour feeling — anytime.",
    description:
      "Inspired by late afternoon light in Houston. Rich golden tones, lifted shadows, and warm skin tones that make every portrait glow. Perfect for outdoor sessions, golden hour shoots, and graduation photos.",
    price: 25,
    accent: "#F59E0B",
    features: [
      "10 Lightroom Presets (Desktop + Mobile)",
      "Warm golden color grading",
      "Lifted shadows with rich highlights",
      "Optimized for skin tones",
      "Works on RAW & JPEG",
      "One-click install guide included",
    ],
    compatibleWith: ["Lightroom Classic", "Lightroom Mobile", "Lightroom CC"],
    beforeImage: "/images/portraits/portrait-1.jpg",
    afterImage: "/images/portraits/portrait-2.jpg",
    sampleImages: [
      "/images/portraits/portrait-3.jpg",
      "/images/portraits/portrait-4.jpg",
      "/images/graduation/graduation-1.jpg",
    ],
  },
  {
    slug: "film-noir",
    name: "Film Noir",
    tagline: "Moody. Cinematic. Every shadow tells a story.",
    description:
      "Deep blacks, desaturated tones, and a cinematic grain that gives your photos that analog film look. Built for creative shoots, street photography, and editorial work.",
    price: 25,
    accent: "#94A3B8",
    features: [
      "10 Lightroom Presets (Desktop + Mobile)",
      "Deep cinematic blacks",
      "Desaturated cool tones",
      "Built-in grain texture",
      "Works on RAW & JPEG",
      "One-click install guide included",
    ],
    compatibleWith: ["Lightroom Classic", "Lightroom Mobile", "Lightroom CC"],
    beforeImage: "/images/creative/creative-1.jpg",
    afterImage: "/images/creative/creative-2.jpg",
    sampleImages: [
      "/images/creative/creative-3.jpg",
      "/images/creative/creative-4.jpg",
      "/images/creative/creative-5.jpg",
    ],
  },
  {
    slug: "leek-signature",
    name: "Leek Signature",
    tagline: "The exact look from my portfolio. My edit. Your photos.",
    description:
      "This is the preset pack I use on my own client work. Balanced exposure, clean skin tones, subtle contrast, and a signature color grade that makes every image feel intentional. This is the Leekshotit look.",
    price: 35,
    accent: "#2563EB",
    features: [
      "15 Lightroom Presets (Desktop + Mobile)",
      "The signature Leekshotit color grade",
      "Clean, balanced exposure",
      "Natural skin tone optimization",
      "Versatile — works for portraits, events, creative",
      "Works on RAW & JPEG",
      "One-click install guide included",
    ],
    compatibleWith: ["Lightroom Classic", "Lightroom Mobile", "Lightroom CC"],
    beforeImage: "/images/hero.png",
    afterImage: "/images/hero_small.png",
    sampleImages: [
      "/images/portraits/portrait-1.jpg",
      "/images/graduation/graduation-1.jpg",
      "/images/creative/creative-1.jpg",
    ],
  },
];

export function getPreset(slug: string): Preset | undefined {
  return presets.find((p) => p.slug === slug);
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  editorial?: string;
  client: string;
  date: string;
  category: string;
  coverImage: string;
  videoUrl?: string;
  description: string;
  story: string[];
  images: string[];
  technicalDetails?: {
    camera?: string;
    lenses?: string;
    lighting?: string;
    lut?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "houston-afro-plex",
    title: "Houston Afro-Plex",
    subtitle: "Celebrating culture and identity",
    editorial: "A studio session turned cultural moment — 12 creatives, one vision, zero scripts.",
    client: "Community",
    date: "2022",
    category: "Creative Projects",
    coverImage: "/images/projects/houston-afro-plex/afroplex-1.jpg",

    description: "A vibrant portrait series celebrating culture and community in Houston.",
    story: [
      "This studio portrait session captured the energy and spirit of Houston's diverse cultural scene.",
      "Every frame tells a story of community, identity, and artistic expression.",
    ],
    images: [
      "/images/projects/houston-afro-plex/Afroplex-PG.1.jpg",
      "/images/projects/houston-afro-plex/Afroplex-PG.2.jpg",
      "/images/projects/houston-afro-plex/Afroplex-PG.3.jpg",
      "/images/projects/houston-afro-plex/fareedah.jpg",
      "/images/projects/houston-afro-plex/idayah.jpg",
      "/images/projects/houston-afro-plex/lynn.jpg",
      "/images/projects/houston-afro-plex/mariam.jpg",
      "/images/projects/houston-afro-plex/teni.jpg",
      "/images/projects/houston-afro-plex/timi.jpg",
      "/images/projects/houston-afro-plex/malik.jpg",
      "/images/projects/houston-afro-plex/Anand.jpg",
      "/images/projects/houston-afro-plex/men.jpg",
      "/images/projects/houston-afro-plex/women.jpg",
      "/images/projects/houston-afro-plex/MEE09578.jpg",
      "/images/projects/houston-afro-plex/MEE09579.jpg",
      "/images/projects/houston-afro-plex/honorable-mentions.jpg",
    ],
    technicalDetails: {
      camera: "Sony A7III",
      lenses: "35mm f/1.8, 85mm f/1.8",
      lighting: "Natural light",
      lut: "Custom preset",
    },
  },
  {
    slug: "man-of-the-year",
    title: "Man of the Year",
    subtitle: "Bold portraits celebrating individuality",
    editorial: "What happens when confidence meets the lens — a portrait series that speaks before you do.",
    client: "Private Client",
    date: "2024",
    category: "Portraits",
    coverImage: "/images/portraits/portrait-1.jpg",

    description: "A portrait series capturing confidence, style, and personal expression.",
    story: [
      "This series is about showcasing personality and confidence through powerful imagery.",
      "Each shot was carefully crafted to highlight the subject's unique presence and style.",
    ],
    images: [
      "/images/portraits/portrait-1.jpg",
      "/images/portraits/portrait-2.jpg",
      "/images/portraits/portrait-3.jpg",
      "/images/portraits/portrait-4.jpg",
    ],
    technicalDetails: {
      camera: "Sony A7III",
      lenses: "50mm f/1.4, 85mm f/1.8",
      lighting: "Studio + natural light",
      lut: "Custom preset",
    },
  },
  {
    slug: "lottery-kid",
    title: "Lottery Kid",
    subtitle: "Dreams and determination",
    editorial: "Chasing a dream with nothing but a camera and a plan — the story behind the shot.",
    client: "Self-Portrait",
    date: "2024",
    category: "Creative Projects",
    coverImage: "/images/projects/lottery-kid-cover.png",

    description: "A creative project exploring themes of ambition, dreams, and the journey to success.",
    story: [
      "This project tells a visual story of chasing dreams and beating the odds.",
      "Through creative direction and intentional framing, we captured the essence of perseverance.",
    ],
    images: [
      "/images/projects/lottery-kid/MEE07008.jpg",
      "/images/projects/lottery-kid/MEE06873.jpg",
      "/images/projects/lottery-kid/MEE07029.jpg",
      "/images/projects/lottery-kid/MEE07018.jpg",
      "/images/projects/lottery-kid/MEE07001.jpg",
      "/images/projects/lottery-kid/MEE06963.jpg",
      "/images/projects/lottery-kid/MEE06961.jpg",
    ],
    technicalDetails: {
      camera: "Sony A7III",
      lenses: "24mm f/1.4, 35mm f/1.8",
      lighting: "Mixed lighting",
      lut: "Cinematic preset",
    },
  },
  {
    slug: "where-to-next",
    title: "Where to Next?",
    subtitle: "Journey and exploration",
    client: "Self-Portrait",
    date: "2024",
    category: "Creative Projects",
    coverImage: "/images/creative/creative-3.jpg",

    description: "A visual exploration of movement, travel, and the excitement of new beginnings.",
    story: [
      "This project captures the anticipation and energy of embarking on new adventures.",
      "Every image invites viewers to imagine their own journey and possibilities ahead.",
    ],
    images: [
      "/images/creative/creative-3.jpg",
      "/images/creative/creative-4.jpg",
      "/images/creative/creative-5.jpg",
      "/images/creative/creative-6.jpg",
    ],
    technicalDetails: {
      camera: "Sony A7III",
      lenses: "16-35mm f/2.8, 50mm f/1.4",
      lighting: "Natural light",
      lut: "Travel tones preset",
    },
  },
  {
    slug: "highstatus",
    title: "HIGHSTATUS",
    subtitle: "Clothing brand campaign",
    client: "HIGHSTATUS",
    date: "2024",
    category: "Creative Projects",
    coverImage: "/images/creative/creative-1.jpg",

    description: "A bold fashion campaign for HIGHSTATUS clothing brand.",
    story: [
      "This campaign captured the essence of the HIGHSTATUS brand through striking visuals and bold styling.",
      "Every shot was crafted to showcase the brand's unique aesthetic and streetwear influence.",
    ],
    images: [
      "/images/creative/creative-1.jpg",
      "/images/creative/creative-2.jpg",
      "/images/creative/creative-7.jpg",
      "/images/creative/creative-8.jpg",
    ],
    technicalDetails: {
      camera: "Sony A7III",
      lenses: "35mm f/1.8, 85mm f/1.8",
      lighting: "Studio lighting",
      lut: "Custom preset",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
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
    subtitle: "Celebrating culture and community",
    client: "Private Client",
    date: "2024",
    category: "Creative Projects",
    coverImage: "/images/projects/houston-afro-plex/afroplex-1.jpg",
    videoUrl: "",
    description: "A vibrant celebration of culture, community, and creativity in Houston.",
    story: [
      "This project captures the energy and spirit of Houston's diverse cultural scene.",
      "Every frame tells a story of community, identity, and artistic expression.",
    ],
    images: ["/images/projects/houston-afro-plex/afroplex-1.jpg"],
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
    client: "Private Client",
    date: "2024",
    category: "Portraits",
    coverImage: "/images/portraits/portrait-1.jpg",
    videoUrl: "",
    description: "A portrait series capturing confidence, style, and personal expression.",
    story: [
      "This series is about showcasing personality and confidence through powerful imagery.",
      "Each shot was carefully crafted to highlight the subject's unique presence and style.",
    ],
    images: [],
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
    client: "Private Client",
    date: "2024",
    category: "Creative Projects",
    coverImage: "/images/creative/creative-2.jpg",
    videoUrl: "",
    description: "A creative project exploring themes of ambition, dreams, and the journey to success.",
    story: [
      "This project tells a visual story of chasing dreams and beating the odds.",
      "Through creative direction and intentional framing, we captured the essence of perseverance.",
    ],
    images: [],
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
    client: "Private Client",
    date: "2024",
    category: "Creative Projects",
    coverImage: "/images/creative/creative-3.jpg",
    videoUrl: "",
    description: "A visual exploration of movement, travel, and the excitement of new beginnings.",
    story: [
      "This project captures the anticipation and energy of embarking on new adventures.",
      "Every image invites viewers to imagine their own journey and possibilities ahead.",
    ],
    images: [],
    technicalDetails: {
      camera: "Sony A7III",
      lenses: "16-35mm f/2.8, 50mm f/1.4",
      lighting: "Natural light",
      lut: "Travel tones preset",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  date: string;
  category: string;
  coverImage: string;
  videoUrl?: string; // YouTube or Vimeo embed URL
  description: string;
  story: string[]; // Array of paragraphs
  images: string[]; // 10-15 images from this specific shoot
  technicalDetails?: {
    camera?: string;
    lenses?: string;
    lighting?: string;
    lut?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "downtown-editorial-shoot",
    title: "Downtown Editorial Shoot",
    subtitle: "Urban fashion photography in the heart of Houston",
    client: "Private Client",
    date: "October 2024",
    category: "Creative Projects",
    coverImage: "/images/creative-smoke.jpg",
    videoUrl: "", // Add YouTube/Vimeo embed URL when available
    description: "A cinematic editorial shoot capturing urban fashion and architecture in Downtown Houston's most iconic locations.",
    story: [
      "This editorial shoot was all about blending high fashion with Houston's urban landscape. We spent an afternoon exploring downtown, using the city's architecture as our canvas.",
      "The goal was to create a series of images that felt both editorial and authentic - polished enough for a magazine spread, but real enough to connect with viewers. We focused on intentional poses against geometric backgrounds, letting the city's lines and textures become part of the story.",
      "Shot during golden hour, we maximized natural light while adding subtle fill to maintain consistency. The result is a collection that showcases both the subject's style and Houston's architectural beauty."
    ],
    images: [
      "/images/creative-smoke.jpg",
      "/images/portrait-yellow.jpg",
      "/images/back-portrait.png",
      "/images/heart-portrait.jpg",
      "/images/creative-smoke.jpg",
      "/images/portrait-yellow.jpg",
      "/images/back-portrait.png",
      "/images/heart-portrait.jpg",
      "/images/creative-smoke.jpg",
      "/images/portrait-yellow.jpg",
      "/images/back-portrait.png",
      "/images/heart-portrait.jpg",
    ],
    technicalDetails: {
      camera: "Sony A7III",
      lenses: "35mm f/1.8, 85mm f/1.8",
      lighting: "Natural light + reflector",
      lut: "Urban Teal preset",
    },
  },
  {
    slug: "graduation-milestone-session",
    title: "Graduation Milestone Session",
    subtitle: "Celebrating academic achievement with style",
    client: "Private Client",
    date: "May 2024",
    category: "Graduation",
    coverImage: "/images/graduation-nike.jpg",
    videoUrl: "", // Add YouTube/Vimeo embed URL when available
    description: "A vibrant graduation session blending traditional cap-and-gown portraits with creative, personalized shots that celebrate individuality.",
    story: [
      "Graduation sessions are more than just cap-and-gown photos - they're about capturing a milestone while showcasing personality. This session was designed to balance classic graduation portraits with creative, fashion-forward imagery.",
      "We chose multiple locations around campus and nearby urban spots, creating variety in the final gallery. From traditional poses at iconic campus buildings to candid moments that showed genuine joy and excitement, every image tells part of the story.",
      "The key was making the graduate feel comfortable and confident. By mixing structured poses with natural movement and authentic reactions, we created a collection that feels both professional and personal - images they'll be proud to share and frame."
    ],
    images: [
      "/images/graduation-nike.jpg",
      "/images/creative-smoke.jpg",
      "/images/portrait-yellow.jpg",
      "/images/graduation-nike.jpg",
      "/images/back-portrait.png",
      "/images/heart-portrait.jpg",
      "/images/graduation-nike.jpg",
      "/images/creative-smoke.jpg",
      "/images/portrait-yellow.jpg",
      "/images/graduation-nike.jpg",
      "/images/back-portrait.png",
      "/images/heart-portrait.jpg",
    ],
    technicalDetails: {
      camera: "Sony A7III",
      lenses: "24-70mm f/2.8, 50mm f/1.4",
      lighting: "Natural afternoon light",
      lut: "Warm Golden preset",
    },
  },
  {
    slug: "concert-energy-capture",
    title: "Live Concert Coverage",
    subtitle: "Capturing high-energy performances and crowd moments",
    client: "Event Organizer",
    date: "September 2024",
    category: "Concerts & Events",
    coverImage: "/images/hero.png",
    videoUrl: "", // Add YouTube/Vimeo embed URL when available
    description: "Fast-paced concert photography capturing the raw energy of live performances, dramatic stage lighting, and unforgettable crowd moments.",
    story: [
      "Concert photography is all about anticipation and reaction. With constantly changing lighting and fast-moving performers, every moment requires quick decisions and precise timing.",
      "I positioned myself in the photo pit for the first three songs, capturing close-ups of the performers, crowd interactions, and those split-second moments that define live music - the guitar solo, the crowd sing-along, the dramatic stage lighting.",
      "The challenge was balancing technical settings with creative vision. Shooting in low light with dramatic colored gels meant embracing the mood rather than fighting it. The result is a collection that doesn't just document the concert - it makes you feel like you were there."
    ],
    images: [
      "/images/hero.png",
      "/images/creative-smoke.jpg",
      "/images/portrait-yellow.jpg",
      "/images/hero.png",
      "/images/back-portrait.png",
      "/images/heart-portrait.jpg",
      "/images/hero.png",
      "/images/creative-smoke.jpg",
      "/images/portrait-yellow.jpg",
      "/images/hero.png",
      "/images/back-portrait.png",
      "/images/heart-portrait.jpg",
    ],
    technicalDetails: {
      camera: "Sony A7III",
      lenses: "24mm f/1.4, 70-200mm f/2.8",
      lighting: "Stage lighting only",
      lut: "Concert Vibrance preset",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

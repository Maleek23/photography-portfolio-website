import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Abdulmalik Ajisegiri | Leekshotit Houston Photographer',
  description: 'Meet Abdulmalik Ajisegiri (Leekshotit) - self-taught Houston/Dallas photographer specializing in capturing melanin-richness through portraits, graduation sessions, and creative photography.',
  keywords: ['Abdulmalik Ajisegiri', 'Leekshotit photographer', 'Houston photographer about', 'Dallas photographer', 'melanin photography', 'Black photographer Texas', 'self-taught photographer HTX'],
  openGraph: {
    title: 'About Leekshotit | Houston Professional Photographer',
    description: 'Self-taught photographer, videographer, and artist based in Houston & Dallas, specializing in capturing authentic moments and melanin-richness.',
    url: 'https://leekshotit.com/about',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

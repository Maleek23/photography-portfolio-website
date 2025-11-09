import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Photography Portfolio Collections | Leekshotit Houston Photographer',
  description: 'Explore Leekshotit\'s photography portfolio featuring portraits, graduation sessions, creative projects, and concert/event coverage in Houston and Dallas, Texas.',
  keywords: ['photography portfolio', 'Houston photographer portfolio', 'portrait gallery', 'graduation photos Houston', 'creative photography Texas', 'concert photographer Dallas', 'event photography HTX'],
  openGraph: {
    title: 'Photography Collections | Leekshotit Portfolio',
    description: 'Browse stunning portrait, graduation, creative, and event photography by Houston-based photographer Leekshotit.',
    url: 'https://leekshotit.com/collections',
    images: ['/images/portraits-cover.jpg'],
  },
  alternates: {
    canonical: '/collections',
  },
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

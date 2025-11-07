import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photography Services & Pricing | Leekshotit Houston Dallas Photographer',
  description: 'Professional photography services in Houston and Dallas. Graduation sessions ($220-$400), Solo portraits ($185-$400), Events ($100/hr). Book your session today!',
  keywords: ['photography services Houston', 'graduation photographer Houston', 'portrait photographer Dallas', 'event photographer Texas', 'photography pricing Houston', 'senior photos Texas', 'professional photographer HTX DTX'],
  openGraph: {
    title: 'Photography Services & Pricing | Leekshotit',
    description: 'Professional graduation, portrait, and event photography services in Houston and Dallas. View packages and book your session.',
    url: 'https://leekshotit.com/services',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

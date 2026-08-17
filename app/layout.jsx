import { Comfortaa, Nunito } from 'next/font/google';
import { SITE_URL } from '../lib/site';
import './globals.css';

const serif = Comfortaa({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const sans = Nunito({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport = {
  themeColor: '#0e4d33',
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Матвій Іванов — дитячий психолог · Київ, онлайн',
    template: '%s · Матвій Іванов, дитячий психолог',
  },
  description:
    'Дитячий психолог у Києві та онлайн. Консультації для батьків, сімейні консультації, терапія для дітей 5–10 та підлітків 11–18 років.',
  keywords: [
    'дитячий психолог',
    'дитячий психолог Київ',
    'дитячий психолог онлайн',
    'психолог для підлітків',
    'консультація для батьків',
    'психологічна група для дітей',
  ],
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    siteName: 'Матвій Іванов — дитячий психолог',
    images: [{ url: '/assets/og.jpg', width: 1200, height: 630, alt: 'Матвій Іванов — дитячий психолог' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/assets/og.jpg'],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Матвій Іванов — дитячий психолог',
  description:
    'Дитячий психолог у Києві та онлайн: консультації для батьків, сімейні консультації, терапія для дітей 5–10 і підлітків 11–18 років, психологічна група для дітей 5–8 років.',
  areaServed: [
    { '@type': 'City', name: 'Київ' },
    { '@type': 'Country', name: 'Україна' },
  ],
  url: SITE_URL,
  image: `${SITE_URL}/assets/og.jpg`,
  priceRange: '800–1700 UAH',
  foundingDate: '2019',
  sameAs: ['https://www.instagram.com/with.matvii/'],
  founder: {
    '@type': 'Person',
    name: 'Матвій Іванов',
    jobTitle: 'Дитячий психолог',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Київський національний університет імені Тараса Шевченка',
    },
    knowsLanguage: 'uk',
    image: `${SITE_URL}/assets/portrait.jpg`,
  },
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Індивідуальна консультація (діти 5–10, підлітки 11–18, батьки)',
      price: '1700',
      priceCurrency: 'UAH',
      description: 'Зустріч 50 хвилин, онлайн або в Києві.',
    },
    {
      '@type': 'Offer',
      name: 'Групові заняття для дітей 5–8 років «Говорити, а не кричати»',
      price: '800',
      priceCurrency: 'UAH',
      description: '8 онлайн-зустрічей по 50 хвилин у групі з 4–5 дітей, раз на тиждень.',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

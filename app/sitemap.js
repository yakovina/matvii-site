import { SITE_URL } from '../lib/site';

export const dynamic = 'force-static';

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/group/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/children/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/teens/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/parents/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/quiz/`, changeFrequency: 'monthly', priority: 0.8 },
  ];
}

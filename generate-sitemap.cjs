const fs = require('fs');
const path = require('path');

const { services } = require('./src/constants/constants.ts');

const BASE_URL = 'https://www.titanillakozmetikus.hu';
const CHANGEFREQ = 'quarterly';

const urls = [
  { loc: `${BASE_URL}/`, changefreq: CHANGEFREQ, priority: 1.0 },
  ...services.map((s) => ({
    loc: `${BASE_URL}/services/${s.slug}`,
    changefreq: CHANGEFREQ,
    priority: 0.8,
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xml:lang="hu">
${urls
  .map(
    (u) => `
  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('Sitemap generated successfully!');

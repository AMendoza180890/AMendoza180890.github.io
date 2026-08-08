import type { APIRoute } from 'astro';

const site = 'https://allanmendoza.tech';

const pages = [
  { path: '/en/', priority: '1.0' },
  { path: '/en/resume/', priority: '0.8' },
  { path: '/en/projects/', priority: '0.8' },
  { path: '/es/', priority: '1.0' },
  { path: '/es/resume/', priority: '0.8' },
  { path: '/es/projects/', priority: '0.8' },
] as const;

function alternatePath(path: string, locale: 'en' | 'es'): string {
  return path.replace(/^\/(en|es)/, `/${locale}`);
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();

  const urls = pages
    .map(({ path, priority }) => {
      const loc = `${site}${path}`;
      const en = `${site}${alternatePath(path, 'en')}`;
      const es = `${site}${alternatePath(path, 'es')}`;

      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-US" href="${escapeXml(en)}" />
    <xhtml:link rel="alternate" hreflang="es-ES" href="${escapeXml(es)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(en)}" />
  </url>`;
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

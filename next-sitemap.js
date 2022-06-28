const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: siteUrl || 'https://example.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
}

export default config
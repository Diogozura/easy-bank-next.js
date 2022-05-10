/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: 'akamai',
    path: 'https://2esestechnology.com.br/',
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  'fontawesome-svg-core': {
    'license': 'free'
  },
}

module.exports = nextConfig


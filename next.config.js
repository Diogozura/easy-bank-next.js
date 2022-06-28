/** @type {import('next').NextConfig} */


const nextConfig = {
  optimizeFonts: true,
  compress:true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    loader: 'akamai',
    path: 'https://easyimobiliario.com.br/',
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  'fontawesome-svg-core': {
    'license': 'free'
  },
  
}

module.exports = nextConfig


/** @type {import('next').NextConfig} */


const nextConfig = {
  optimizeFonts: true,
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
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/sobre': { page: '/sobre' },
      '/contato': { page: '/contato' },
      '/404': { page: '/404' },
      '/Jogador': { page: '/Jogador' },
      '/termosUso': { page: '/termosUso' },
      '/jogo': { page: '/jogo' },
      '/termosPrivacidade': { page: '/termosPrivacidade' },
      '/criarSala': { page: '/criarSala' },
    }
  },
  typescript: {
    ignoreBuildErrors: true,
  },
 
  
}

module.exports = nextConfig


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
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/sobre': { page: '/sobre'},
      '/contato': { page: '/contato'},
      '/jogador': { page: '/jogador'},
      '/criarSala': { page: '/criarSala'},
      '/jogo': { page: '/jogo'},
      '/termosPrivacidade': { page: '/termosPrivacidade'},
      '/termosUso': { page: '/termosUso'},
      
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
}

module.exports = nextConfig


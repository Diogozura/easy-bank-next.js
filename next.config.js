/** @type {import('next').NextConfig} */


const nextConfig = {
  compress:true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
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
      '/Jogador': { page: '/Jogador'},
      '/criarSala': { page: '/criarSala'},
      '/jogo': { page: '/jogo'},
      '/termosPrivacidade': { page: '/termosPrivacidade'},
      '/termosUso': { page: '/termosUso'},
      // '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
      // '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
    }
  },
}

module.exports = nextConfig


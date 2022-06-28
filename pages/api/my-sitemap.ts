const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {
  const links = [
    { url: '/', priority: 1.0 },
    { url: '/contato/', priority: 0.5 },
    { url: '/criarSala/', priority: 0.8 },
    { url: '/Jogador/', priority: 0.5 },
    { url: '/jogo/', priority: 0.5 },
    { url: '/sobre/', priority: 0.8 },
    { url: '/termosPrivacidade/', priority: 0.5 },
    { url: '/termosUso/', priority: 0.5 },
  ]

  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    'Content-Type': 'application/xml'
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
}
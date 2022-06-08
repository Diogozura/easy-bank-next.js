import Document, { Html } from 'next/document'
import Head from 'next/head'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <Html lang="pt-br">
            {initialProps.styles}
            {sheet.getStyleElement()}

            <Head>
              <link
                href="/fonts/Museo700/Museo700-Regular.otf"
                rel="stylesheet"
              />
              <link
                href="/fonts/Museo300/Museo300-Regular.otf"
                rel="stylesheet"
              />
              
            </Head>
          </Html>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}

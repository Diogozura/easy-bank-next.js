import Head from 'next/head'
import Link from "next/link";
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:#F4F4F4; 
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    secundary: '#ffff'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
        <link rel="icon" href="/favicon/favicon.ico"/>
        </Head>
        <body/>

        
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

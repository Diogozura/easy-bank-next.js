import Head from 'next/head'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components'


const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Museo300";
  src: url("/fonts/Museo300/Museo300-Regular.otf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Museo700";
  src: url("/fonts/Museo700/Museo700-Regular.otf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:#F4F4F4; 
  }
  *{
    font-family: 'Museo300';
  }
`

const theme = {
  colors: {
    primary: '#0070f3',

  },
}


export default function App({ Component, pageProps }) {
  return (
    <>
      
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
       href="/fonts/Museo700/Museo700-Regular.otf"
       rel="stylesheet"
        />
        <link
       href="/fonts/Museo300/Museo300-Regular.otf"
       rel="stylesheet"
        />
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
         {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" /> */}
        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4JHHYSLB83"></script>
        <script
          dangerouslySetInnerHTML={{
           __html: `
             window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-4JHHYSLB83');
            `
          }}
        />
        


      </Head>


      <GlobalStyle />
      <ThemeProvider theme={theme}>

        <body />


        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

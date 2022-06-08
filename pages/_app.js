import Head from 'next/head'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { NextSeo, SocialProfileJsonLd  } from 'next-seo';


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
export const Body = styled.body`
    background-image:url('/image/fundo.png') ;
`


export default function App({ Component, pageProps }) {
  return (
    <>
      <NextSeo nofollow={true}
        description="Easy Bank, um novo jeito de Jogar Banco imobiliário, confira agora nosso game e compartilhe com seus amigos - desenvolvido por 2eSes"
        
        robotsProps={{ 
          nosnippet : true , 
          notranslate : true , 
          noimageindex : true , 
          noarchive : true , 
          maxSnippet : - 1 , 
          maxImagePreview : 'none' , 
          maxVideoPreview : - 1 , 
        }} 
        
        openGraph={{
          type: 'website',
          url: 'https://easyimobiliario.com.br/',
          title: 'Open Graph Title',
          description: 'Easy bank, uma nova maneira de jogar banco imobiliário, confira agora o nosso game ',
          images: [
            {
              url: 'https://2esestechnology.com.br/image/logo.svg',
              width: 800,
              height: 600,
              alt: 'logo easy bank',
            },
          ],
        }}
      />
       <SocialProfileJsonLd
      type="Person"
      name="Easy Bank Imobiliário "
      url="https://easyimobiliario.com.br/"
      sameAs={[
        'https://www.instagram.com/easybankgame/',
      ]}
    />
      <Head>

      <link rel="icon" href="/favicon/favicon.ico" />
       
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

        <script id="Adsense-id" data-ad-client="ca-pub-5434892248042693"
          async strategy="afterInteractive"
          onError={(e) => { console.error('Script failed to load', e) }}
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />

      </Head>


      <GlobalStyle />
      <ThemeProvider theme={theme}>

        <Body />


        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

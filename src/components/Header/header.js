import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Cabecalho = styled.header`
    background: linear-gradient(
    20deg,
    #951B81,
    #E6332A);
    padding: 10px;
    text-align: center;
`
export  const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  margin: 0px;
  font-family: 'Museo700', sans-serif;
  
`

// const PropsBox = styled.div(props => ({
//     background: props.color,
//     height: '50px',
//     width: '50px'
//   }));


export default function Topo() {
    return (
       
        <>
         
            <Head>
            <title>Criar player - Easy Imobiliário </title>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Link href="/">
            <Cabecalho >
                <Image
                src='/image/logo.svg'
                alt="Logo easy imobiliário"
                // layout="responsive"
                width={250}
                height={80}/>
            </Cabecalho>
            </Link>
        </>



    )
}

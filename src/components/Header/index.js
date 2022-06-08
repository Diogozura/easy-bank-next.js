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
`
export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 0px;
  font-family: 'Museo700', sans-serif;
  
`
const NavBar = styled.nav`
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 850px){
      
    }
`
const Navlink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.3em;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  cursor: pointer;  
  &:hover {
    background-color: ${props => props.bg};
    text-decoration: underline;
    color: white;
  }
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
                <title>Easy imobiliário</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Cabecalho >
                <Image
                    src='/image/logo.svg'
                    alt="Logo easy imobiliário"
                    // layout="responsive"
                    width={250}
                    height={80} />
            </Cabecalho>
            <NavBar>


                <Link href="/" scroll={false} passHref
                ><Navlink bg="#9F1E77">Home</Navlink></Link>
                <Link href="#regras" passHref>
                    <Navlink bg='#AF2265'>Regras</Navlink>
                </Link>
                <Link href="/contato" passHref>
                    <Navlink bg='#C12852'>Contato</Navlink>
                </Link>
                <Link href="/sobre" passHref>
                    <Navlink bg='#D22D3F'>sobre</Navlink>
                </Link>


            </NavBar>

        </>



    )
}

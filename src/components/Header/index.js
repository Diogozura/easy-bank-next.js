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
export  const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  margin: 0px;
  font-family: 'Museo700', sans-serif;
  
`
const NavBar = styled.nav`
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const Navlink = styled.a`
  color: black;
  text-decoration: none;
  font-size: 1.3em;
  padding: 10px;
  border-radius: 0px 0px 10px 10px;
  cursor: pointer;  
  &:hover {
    background-color: ${props => props.bg };
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
                height={80}/>
            </Cabecalho>
            <NavBar>
              
                
                <Link href="/" 
                ><Navlink bg="#A11E74">Home</Navlink></Link>
                    <Link href="/">
                        <Navlink bg='#B8255C'>Regras</Navlink>
                    </Link>
                    <Link href="#pages">
                        <Navlink  bg='#CE2C43'>Contato</Navlink>
                    </Link>
               

            </NavBar>

        </>



    )
}

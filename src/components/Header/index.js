import { faBaby, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import react from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
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


    // Toggle for Modal
    const [isOpen, setIsOpen] = react.useState(false);
    return (

        <>
            <Head>
                <title>Easy imobiliário</title>
            </Head>
            {/* <Cabecalho >
                <Image
                    src='/image/logo.svg'
                    alt="Logo easy imobiliário"
                    // layout="responsive"
                    width={250}
                    height={80} />
            </Cabecalho> */}
            {/* <NavBar>


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


            </NavBar> */}
            <Navbar style={{background: "linear-gradient(to right , #951B81, #E6332A)" }}
                // color="light"

                 className="sticky-top"
                fixed="top"
                expand="lg"
            >
                <Link href="/" scroll={true} passHref
                ><Navlink > <Image
                    src='/image/logo.svg'
                    alt="Logo easy imobiliário"
                    // layout="responsive"
                    width={250}
                    height={80} /></Navlink></Link>
                {/* <NavbarBrand href="/" scroll={false}>
   
    </NavbarBrand> */}
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} >
                    <FontAwesomeIcon icon={faBars} className="fa-2x"/>
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto text-center"
                        navbar
                    >
                         {/* <NavItem>
                            <Link href="#regras" onClick={() => { setIsOpen(!isOpen) }}>
                            <Navlink>Regras</Navlink>
                            </Link>
                        </NavItem> */}

                        <NavItem className="text-center">
                            <Link href="/contato" isOpen={isOpen}>
                                <Navlink>Contato</Navlink>
                            </Link>
                        </NavItem>

                       
                        <NavItem>
                            <Link href="/sobre" onClick={() => { setIsOpen(!isOpen) }}>
                            <Navlink>Sobre</Navlink>
                            </Link>
                        </NavItem>

                    </Nav>

                </Collapse>
            </Navbar>

        </>



    )
}

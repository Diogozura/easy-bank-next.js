import Image from 'next/image'
import styled from 'styled-components'


const Cabecalho = styled.header`
    background: linear-gradient(
    20deg,
    #951B81,
    #E6332A);
    padding: 10px;
`
const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  margin: 0px;
  font-family: 'Museo700', sans-serif;
  color: ${({ theme }) => theme.colors.secundary};
`
const NavBar = styled.nav`
    text-align: center;
`
const Li = styled.li`
    list-style: none;
    margin: 5px;
    margin-top: 0px;
    background-color: #0988f6;
    padding:10px;
    border-radius: 0px 0px 10px 10px;

`
const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0px;
`



export default function Cabeca() {
    return (
        <>
            <Cabecalho >
                
                <Image
                src='/logo.svg'
                alt="Logo easy imobiliário"
                // layout="responsive"
                width={250}
                height={100}/>
            </Cabecalho>
            <NavBar>
                <Ul>
                    <Li><a href="#home">Home</a></Li>
                    <Li>Regras</Li>
                    <Li>Contato</Li>
                </Ul>

            </NavBar>
        </>



    )
}

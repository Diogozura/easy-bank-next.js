import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Footer from '../../components/Footer'
import Topo from '../../components/Header'
import Regras from '../../components/Regras'
import TokenExiste from '../../components/TokenExiste'





export default function Home(props) {

  return (
    <>
      <Topo />

      <Conteudo>

        <Parte margiBaixo="7.5em"
        alinhamento="center">
          <Box >
            <Titulo>
              O FUTURO É EASY
            </Titulo>

            <SubTitulo>
              Seja bem vindo!
            </SubTitulo>
            <Text>
              Easy Bank  é uma site para criar salas para jogar e
              facilitar transações dos jogos banco imobiliário, monopólio,
              mercado imobiliário, clique em criar sala e aproveite.

            </Text>
            <Text>
              Você está a um passo de conhecer o futuro
            </Text>
          </Box>

          <Box
            bg="#FFFF"
            shadow="2px 2px 5px 1px rgb(0 0 0 / 64%);"
            padding="40px"
          >
            <Text>
              Olá, para começar coloque o link da
              sala ou crie sua própria
            </Text>
            <Text>
              <strong>Codigo da Sala</strong>
            </Text>

            <TokenExiste />

            <Link href="/criarSala" passHref prefetch={false}>
              <Botao
                color="#737176"
              >
                Criar Sala
              </Botao>
            </Link>

          </Box>
        </Parte>

        <Regras props="props"/>



      </Conteudo>



      <Footer />
    </>
  )
}

export const Titulo = styled.h1`
  text-align: center;
  font-family: 'Museo700';
  font-size: 3em;
  margin: 0px;
`
export const SubTitulo = styled.h2`
  color: #737176;
  font-size:2em;
  font-family: 'Museo700';
  margin: 1em 0; 
  @media only screen and (max-width: 850px){
    margin: 0;
  }
`
export const Text = styled.p`
  color: #737176;
  font-size: 1.4em;
  margin: 0.6em 0;
  @media only screen and (max-width: 850px){
    margin: 0;
  }
`
const Conteudo = styled.main`
margin: 3em 0;
padding: 0;
`
export const Box = styled.aside`
  width: 500px;
  padding: ${props => props.padding};
  margin-top: ${props => props.margin};
  text-align: center;
  background-color: ${props => props.bg};
  box-shadow:${props => props.shadow} ;
  border-radius: 64px;
  display: grid;
  justify-items: center;
  @media only screen and (max-width: 850px){
    width: 90%;
    padding: 10;
    margin: 10px;
  }
`

const Botao = styled.a`
    text-decoration: none;
    padding: 10px;
    cursor: pointer;
    background: ${props => props.bgBotao};
    color: ${props => props.color};
    border-radius: 20px;
    margin: 5px 0;
    &:hover{
      color: ${props => props.color};
      text-decoration: underline;
    }
`
export const Parte = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: ${props => props.alinhamento};
  justify-items: center;
  margin-bottom: ${props => props.margiBaixo};
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    margin:0px;
  }
`
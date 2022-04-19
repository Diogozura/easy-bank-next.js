import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import Cabeca from '../../components/Header'



export default function Home() {
  return (
    <>
      <Cabeca />
      <Conteudo>
        <BoxTexto>
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
        </BoxTexto>


        <BoxSala>
          <Text>
            Olá, para começar coloque o link da
            sala ou crie sua própria
          </Text>
          <Text>
            <strong>Codigo da Sala</strong>
          </Text>

          <Input type="text">
          </Input>
          <Link href="#">
            <a>
            Entrar em Sala
            </a>
          </Link>
          <Link href="/criarSala">
            <a>
            Criar Sala
            </a>
          </Link>
          
        </BoxSala>
      </Conteudo>
    </>
  )
}

const Titulo = styled.h1`
  text-align: center;
  font-family: sans-serif;
  font-size: 3em;
`
const SubTitulo = styled.h2`
  color: #737176;
  font-size:2em;
`
const Text = styled.p`
  color: #737176;
  font-size: 1.4em;
 
`
const Conteudo = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2em;
  justify-items: center;

  @media only screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    
  }
`
const BoxTexto = styled.aside`
  width: 500px;
  text-align: center;
  @media only screen and (max-width: 850px){
    width: 95%;
    margin: 5px;
    
  }
`

const BoxSala = styled.aside`
  width: 400px;
  padding: 30px;
  text-align: center;
  background-color: #FFFFFF;
  border-radius: 64px ;
  display: grid;
  @media only screen and (max-width: 850px){
    width: 80%;
  }
`
const Input = styled.input`
    margin-top: 2em;
    border: none;
    font-size: 1.2em;
    border-bottom: 2px solid rgb(0, 0, 0);
    width: 300px;
    text-align: center;
`
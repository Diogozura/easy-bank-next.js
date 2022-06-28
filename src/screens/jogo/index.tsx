import Footer from "../../components/Footer";
import Topo from "../../components/Header";
import { Titulo } from "../../components/Titulo";
import React from "react";
import nookies from 'nookies'
import styled from 'styled-components'
import { DadosJogador } from "../../components/DadoJogador";
import Jogadores from "../../components/DadosJogadores";
import Sair from "../../components/Sair";
import useSWR from 'swr'
import Head from "next/head";
import { useRouter } from "next/router";
import History from '../../components/Extrato'
import {
    WhatsappShareButton,
    WhatsappIcon,
    TelegramShareButton,
  TelegramIcon,
  } from 'next-share'



const BoxJogadores = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
const Codigo = styled.input`
    background: whitesmoke;
    padding: 10px;
    border-radius: 20px;
    text-align: center;
    margin-left: 2rem;
    width: 300px;
`
const SaireToken = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
const Contatos = styled.aside`
    display: grid;
    justify-items: center;
    margin: 1em;
`

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Jogo({ children, ...props }, ctx = null) {
    const router = useRouter()
    const cookie = nookies.get(ctx)
   
    const { data, error } = useSWR(
        `https://ffgames134.herokuapp.com/api/dadosSala?keyRoom=${cookie.chave}&idPlayer=${cookie.Player}`,
        fetcher,{ refreshInterval: 3000 }
    )
    
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    
     { data.erro == 'chave invalida' ? router.push('/?error=401'): null }
        


    return (
        <>
            <Head>
             <title>Sala game - Easy Imobiliário </title>
            </Head>
            <Topo  >
                <Sair data={data}/>
            </Topo>
            <Titulo>Bem Vindo a sala</Titulo>

            <SaireToken>
                <Contatos>
                    Compartilhar Link da Sala
                    <div>
                    <WhatsappShareButton
                        
                        url={`https://easyimobiliario.com.br//Jogador?keyRoom=${cookie.chave}`}
                        
  title={'Entre agora na Sala do Easy imobiliário game'}
  separator=":: "
>
  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TelegramShareButton
  url={`https://easyimobiliario.com.br//Jogador?keyRoom=${cookie.chave}`}
  title={'Entre agora na Sala do Easy imobiliário game'}
>
  <TelegramIcon size={32} round />
</TelegramShareButton>
                    </div>

                   
                </Contatos>
          
                <Codigo defaultValue={data.keyRoom} />
               
            </SaireToken>
            <DadosJogador  data={data} />
            
            <BoxJogadores >
                <Jogadores data={data}/>


            </BoxJogadores>
            <History />
            <Footer />
        </>)
}


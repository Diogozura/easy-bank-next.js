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
import HistoricoDeTransferencia from "../../components/Historico";
import Head from "next/head";
import { useRouter } from "next/router";





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

`

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Jogo({ children, ...props }, ctx = null) {
    const router = useRouter()
    const cookie = nookies.get(ctx)
    const { data, error } = useSWR(
        `https://ffgames134.herokuapp.com/api/dadosSala?keyRoom=${cookie.chave}&idPlayer=${cookie.Player}`,
        fetcher
      );
    
      if (error) return "An error has occurred.";
      if (!data) return "Loading...";
      console.log(data)
       { data.erro == 'chave invalida' ? router.push('/?error=401'): null }



    return (
        <>
            <Head>
             <title>Sala game - Easy Imobiliário </title>
            </Head>
            <Topo />
            <Titulo>Bem Vindo a sala</Titulo>
            <SaireToken>
                <Codigo defaultValue={data.keyRoom} />
                <Sair data={data}/>
            </SaireToken>
            
            
            <DadosJogador  data={data} />
            
            <BoxJogadores >
                <Jogadores data={data}/>


            </BoxJogadores>
            <HistoricoDeTransferencia/>
            <Footer />
        </>)
}


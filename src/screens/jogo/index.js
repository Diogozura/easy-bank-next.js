import Footer from "../../components/Footer";
import Topo from "../../components/Header/header";
import { Titulo } from "../../components/Titulo";
import React from 'react'
import nookies from 'nookies'
import styled from 'styled-components'
import { DadosJogador } from "../../components/DadoJogador";
import Jogadores from "../../components/DadosJogadores";
import Sair from "../../components/Sair";
import useSWR from "swr";
import HistoricoDeTransferencia from "../../components/Historico";
import Head from "next/head";
import {  useRouter } from "next/router";




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
export default function Jogo({ children, ...props }, ctx = null) {
    const router = useRouter()
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const cookie = nookies.get(ctx)
    // console.log(isChecked ? 1 : 0)
    const api =  `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dadosSala?keyRoom=${cookie.chave}&idPlayer=${cookie.Player}`
    const { data, error } = useSWR(
        api,
         fetcher, {
           refreshInterval : 30000,  
       }
       );
    //    {error ? router.push("/") : null  }
       if (!data) return "Loading...";
       
    
    //   {cookie.chave && cookie.Player ? ' ' : router.push("/")}

    return (
        <>
             <Head>
             <title>Sala game - Easy Imobiliário </title>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topo />
            <Titulo>Bem Vindo a sala</Titulo>
            <Sair data={data}/>
            <Codigo defaultValue={data.keyRoom}/>
            <DadosJogador  data={data} />
            
            <BoxJogadores >
                <Jogadores data={data}/>
        
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

            </BoxJogadores>
            <HistoricoDeTransferencia/>
            <Footer />
        </>)
}


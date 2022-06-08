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
import { tokenService } from "../../services/auth/tokenService";
import { redirect } from "next/dist/server/api-utils";
import { useFetch } from "../../services/auth/authGetService";




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
export default function Jogo({ children, ...props }, ctx = null) {
    const router = useRouter()
   
    const cookie = nookies.get(ctx)

    
    const { data, error } = useFetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dadosSala?keyRoom=${cookie.chave}&idPlayer=${cookie.Player}`, { refreshInterval: 0 })

   
    if (!data) return "Loading..."
       { data.erro == 'chave invalida'  ? router.push('/?error=401'): '' }
    // console.log(error)
    // console.log(data)
  

    return (
        <>
             <Head>
             <title>Sala game - Easy Imobiliário </title>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        
                {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

            </BoxJogadores>
            <HistoricoDeTransferencia key={data.idPlayer} data={ data}/>
            <Footer />
        </>)
}


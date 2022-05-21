import { Body } from "../../../pages/criarJogador";
import Footer from "../../components/Footer";
import Topo from "../../components/Header/header";
import { Titulo } from "../../components/Titulo";
import React from 'react'

import styled from 'styled-components'
import { DadosJogador } from "../../components/DadoJogador";
import useSession from "../../services/auth/jogador";
import Jogadores from "../../components/DadosJogadores";

const BoxJogadores = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`
export default function Jogo({ children, ...props }) {
    const session = useSession()

    return (
        <Body>
            <Topo />
            <Titulo>Bem Vindo a sala</Titulo>
            
                <DadosJogador/>
            
            {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
            <BoxJogadores >
            <Jogadores/>

            </BoxJogadores>
            <pre>chave da Sala</pre>
            <Footer />
        </Body>)
}


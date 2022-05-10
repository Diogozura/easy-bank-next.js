import { Body } from "../../../pages/criarJogador";
import Footer from "../../components/Footer";
import Topo from "../../components/Header/header";
import Jogador from "../../components/Jogador";
import { Titulo } from "../../components/Titulo";

export default function Jogo(   {player} ) {
    return (
        <Body>
            <Topo/>
            <Titulo>Bem Vindo a sala</Titulo>
            <Jogador/>
            <pre>{player}</pre>
            
            <pre>chave da Sala</pre>
            <Footer/>
        </Body>)
}

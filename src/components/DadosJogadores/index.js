import Image from 'next/image';
import { Box, BoxJogador, SaldoFlag, NomeeIcon } from '../BoxJogador';

export default function Jogadores({ data }) {
    
    const conteudo = data.players?.map((dadosjogador) => (
        <BoxJogador>
            {/* Nome e ícone dos jogares presentes na sala  */}
            <NomeeIcon>
            {dadosjogador.playerBank ? <Image src={`./avatar/B${dadosjogador.identificador}.svg`} width="80" height="80" /> : <Image src={`./avatar/${dadosjogador.identificador}.svg`} width="60" height="60" />}
                <h2>{dadosjogador.namePlayer}</h2>
            </NomeeIcon>
            <Box>
                {/* Saldo do Jogadores  */}
                <SaldoFlag >
                    <h3>{dadosjogador.saldo}</h3>
                </SaldoFlag>
            </Box>
        </BoxJogador>
    ))
    
    return (
        <>
            {conteudo}
        </>
    )
}
import Image from 'next/image';
import useSession from '../../services/auth/jogador';
import { Botao } from '../Botao';
import { Box, BoxJogador, SaldoFlag, NomeeIcon } from '../BoxJogador';
export default function Jogadores() {
    const session = useSession()
    const dadosjogador = session.data.players
    // console.log(dadosjogador.players)
    const conteudo = dadosjogador?.map((dadosjogador) => (
        <BoxJogador>
        <NomeeIcon>
 <Image
           width={60}
           height={60}
           src={`./avatar/${dadosjogador.identificador}.svg`}
/>
            <h2>{dadosjogador.namePlayer}</h2>
        </NomeeIcon>

        <Box>
           


            <SaldoFlag>
                <h3>{dadosjogador.saldo}</h3>

                <Botao>Transferir</Botao>
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
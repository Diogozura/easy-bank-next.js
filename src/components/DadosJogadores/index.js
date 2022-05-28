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
            {dadosjogador.playerBank ? <Image src={`./avatar/B${dadosjogador.identificador}.svg`} width="80" height="80" /> : <Image src={`./avatar/${dadosjogador.identificador}.svg`} width="60" height="60" />}
                <h2>{dadosjogador.namePlayer}</h2>
            </NomeeIcon>

            <Box>



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
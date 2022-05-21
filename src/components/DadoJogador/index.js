import Image from 'next/image';
import React from 'react';

import { authService } from '../../services/auth/authService';
import useSession from '../../services/auth/jogador';
import { Botao } from '../Botao';
import { Box, BoxJogador, SaldoFlag, NomeeIcon } from '../BoxJogador';
import ToggleSwitch from '../ToggleSwitch';


export function DadosJogador() {
    const [isChecked, setChecked] = React.useState(true)
    const session = useSession()
    const dadosjogador = session.data
    // console.log("is checked", isChecked)
    console.log(dadosjogador.players)
    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }
    return (
        <BoxJogador>
            <NomeeIcon>
                <pre>{isChecked ? <Image src={`./avatar/${dadosjogador.identificador}.svg`} width="60" height="60" /> : <Image src='./icon/Bancoicon.svg' width="60" height="60" />}</pre>
                <h2>{dadosjogador.namePlayer}</h2>
            </NomeeIcon>

            <Box>
                {/* <Image
                   width={60}
                   height={60}
                   src={`./icon/Bancoicon.svg`}

       /> */}


                <SaldoFlag>
                    <h3>{dadosjogador.saldo}</h3>

                    <Botao>Transferir</Botao>
                </SaldoFlag>
                <SaldoFlag>
                <Image src='./icon/Bancoicon.svg' width="48" height="48" />
                    <h3>Banco</h3>
                    <div>{dadosjogador.playerBank == 1}</div>
                    <ToggleSwitch isChecked={isChecked} onClick={handleCheck} />
                </SaldoFlag>

            </Box>
        </BoxJogador>


    )
}



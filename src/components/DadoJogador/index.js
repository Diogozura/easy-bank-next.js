import Image from 'next/image';
import React from 'react';
import styled from 'styled-components'
import useSession from '../../services/auth/jogador';
import nookies from 'nookies'
import { Box, BoxJogador, SaldoFlag, NomeeIcon } from '../BoxJogador';
import TransfereDinheiro from '../TrasfereDinheiro';
import { useRouter } from 'next/router';
import react from 'react';

 
export function DadosJogador(ctx = null) {
    const [isChecked, setChecked] = React.useState(true)
    const session = useSession()
    const dadosjogador = session.data
    // console.log("is checked", isChecked,)
    const cookie = nookies.get(ctx)
    // console.log(isChecked ? 1 : 0)

 
    

    // console.log(dadosjogador.players)
    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }

    const router = useRouter()
    // base para funcionar as funções do ReactStrap 
    const [modal, setModal] = react.useState(false);

    // Toggle for Modal
    const toggle = () => setModal(!modal);
    const [values, setValues] = react.useState({
        user: '',
        cores: '',
        valor:'',
    })
    
    function handlenChange(event) {
        const fieldValue = event.target.value;
        const fieldName = event.target.name;

        setValues((currenetValues) => {
            return {
                ...currenetValues,
                [fieldName]: fieldValue,
            }
        })
    }


    return (
        <BoxJogador>
            <NomeeIcon>
                <picture>{dadosjogador.playerBank ? <Image src={`./avatar/B${dadosjogador.identificador}.svg`} width="80" height="80" /> : <Image src={`./avatar/${dadosjogador.identificador}.svg`} width="60" height="60" />}</picture>
               
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
                   
                    <TransfereDinheiro/>
                    
                </SaldoFlag>
                
              

            </Box>
        </BoxJogador>


    )
}



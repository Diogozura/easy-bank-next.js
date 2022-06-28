import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Box, BoxJogador, SaldoFlag, NomeeIcon } from '../BoxJogador';
import TransfereDinheiro from '../TrasfereDinheiro';

export const NomePlayer = styled.h2`
    font-family: 'Museo700';
    font-size: 1.3em;
    padding-left: 1em;
`

export function DadosJogador({ data }) {
   
    return (
        <BoxJogador>
            {/* parte onde fica o nome e ícone do usuário  */}
            <NomeeIcon>
                <picture>{data.playerBank ? <Image src={`./avatar/B${data.identificador}.svg`} width="80" height="80" /> : <Image src={`./avatar/${data.identificador}.svg`} width="60" height="60" />}</picture>
                <NomePlayer>{data.namePlayer}</NomePlayer>
            </NomeeIcon>

            <Box>
                {/* box onde fica o saldo e a parte de transferência do usuário  */}
                <SaldoFlag>
                    <h3>{data.saldo}</h3>
                    <TransfereDinheiro data={data} />
                    <Link href="#Extrato">
                        <Button variant="outlined">
                            Extrato
                        </Button>
                    </Link>
                </SaldoFlag>
            </Box>
        </BoxJogador>


    )
}



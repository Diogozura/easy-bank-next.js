import Image from 'next/image';
import React from 'react';
import { Box, BoxJogador, SaldoFlag, NomeeIcon } from '../BoxJogador';
import TransfereDinheiro from '../TrasfereDinheiro';

export function DadosJogador({data}) {
    return (    
        <BoxJogador>
            {/* parte onde fica o nome e ícone do usuário  */}
            <NomeeIcon>
                <picture>{data.playerBank ? <Image src={`./avatar/B${data.identificador}.svg`} width="80" height="80" /> : <Image src={`./avatar/${data.identificador}.svg`} width="60" height="60" />}</picture>
                <h2>{data.namePlayer}</h2>
            </NomeeIcon>

            <Box>
                {/* box onde fica o saldo e a parte de transferência do usuário  */}
                <SaldoFlag>
                    <h3>{data.saldo}</h3>
                    <TransfereDinheiro data={data}/>
                </SaldoFlag>
            </Box>
        </BoxJogador>


    )
}



import useSWR from "swr";
import nookies from 'nookies'
import styled from "styled-components";
import react from "react";
import { Button } from "@mui/material";
import { Extrato } from "../../../interface/Extrato";
import { InferGetStaticPropsType } from "next";

const Extrator = styled.th`
 background: ${props => props.theme};
 padding:10px;
 border-radius: 20px;
 margin: 0.2em 0;
`



export default function HistoricoDeTransferencia(ctx= null,{extra}: InferGetStaticPropsType<typeof getStaticProps>) {
    const cookie = nookies.get(ctx)
    const [isChecked, setChecked] = react.useState(true)
   
    // console.log(extrato.extrato.length)
    const conteudo = extra.extrato.map((dadosjogador) => (

       
            <Extrator theme={dadosjogador.idPlayerPara == cookie.Player ? "rgba(195, 255, 195, 0.75)" : null || dadosjogador.idPlayerDe == cookie.Player ? "rgba(255, 195, 195, 0.75) " : null}
                // theme={dadosjogador.idPlayerDe == cookie.Player ? "red " : null}
            >
                {/* {dadosjogador.idPlayerPara == cookie.Player ? <Postivo /> : null} */}
                {/* {dadosjogador.idPlayerDe == cookie.Player ? <Negativo /> : null} */}
                {dadosjogador.descricao}

            </Extrator>



    ))
  
    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }
    // console.log(isChecked)
 

    return (<>
         <style jsx>{`
        table{
                text-align: : center;
               
                margin: 2em auto;
        }
        tr{
            display: grid;
            background-color: azure;
            border-radius: 20px; 
        }   
    
      `}
      
      </style >
        <table id='Extrato'>
            <tr>
                {isChecked ? conteudo.slice(0, 5) : conteudo}
                <Button
                    onClick={handleCheck}
                >{isChecked? 'carregar tudo' : 'menos'}</Button>
            </tr>
        </table>
    </>
       
    )
}

export const getStaticProps = async (ctx = null) => {
    const cookie = nookies.get(ctx)
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/extrato/?keyRoom=${cookie.chave}`);
    const extra : Extrato = await res.json();
  
    return {
      props: {
        extra,
      },
     
    };
  };

import styled from "styled-components";
import react from "react";
import { Button } from "@mui/material";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import nookies from 'nookies'
import useSWR from "swr";

const Extrator = styled.th`
 background: ${props => props.theme};
 padding:10px;
 border-radius: 20px;
 margin: 0.2em 0;
`


const fetcher = (url) => fetch(url).then((res) => res.json());
export default function History(ctx = null){
    const cookie = nookies.get(ctx)
    const { data, error } = useSWR(
        `https://ffgames134.herokuapp.com//api/extrato/?keyRoom=${cookie.chave}`,
        fetcher, { revalidateOnFocus: true },
      );
      const [isChecked, setChecked] = react.useState(true)
     
   
    // console.log(extrato.extrato.length)
    const conteudo = data?.extrato.map((dadosjogador) => (
            <Extrator theme={dadosjogador.idPlayerPara == cookie.Player ? "rgba(195, 255, 195, 0.75)" : null || dadosjogador.idPlayerDe == cookie.Player ? "rgba(255, 195, 195, 0.75) " : null}
                // theme={dadosjogador.idPlayerDe == cookie.Player ? "red " : null}
            >
                {/* {dadosjogador.idPlayerPara == cookie.Player ? <Postivo /> : null} */}
                {/* {dadosjogador.idPlayerDe == cookie.Player ? <Negativo /> : null} */}
                {dadosjogador.descricao}

            </Extrator>))
  
    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }
 
   
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
                {isChecked ? conteudo?.slice(0, 3) : conteudo}   
                <Button
                    onClick={handleCheck}
                >{isChecked ? 'carregar tudo +' : 'menos -'}</Button>
                <th>alo</th>
            </tr>
        </table>
    </>
       
    )
}

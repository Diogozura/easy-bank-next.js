import useSWR from "swr";
import nookies from 'nookies'
import styled from "styled-components";
import { useFetch } from "../../services/auth/authGetService";
import { Button } from "reactstrap";
import react from "react";

const Extrato = styled.th`
 background: ${props => props.theme};
 padding:10px;
 border-radius: 20px;
 margin: 0.2em 0;
`



export default function HistoricoDeTransferencia({ data},ctx = null) {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const cookie = nookies.get(ctx)
    const { data :extrato } = useFetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/extrato/?keyRoom=${cookie.chave}`, { refreshInterval: 1000 })

    if (!extrato) return "Loading..."
    // console.log(extrato.extrato.length)
    const valores = extrato.extrato
    console.log(valores.slice(2, -1))
    const conteudo = extrato.extrato.map((dadosjogador) => (

       
            <Extrato theme={dadosjogador.idPlayerPara == cookie.Player ? "rgba(195, 255, 195, 0.75)" : null || dadosjogador.idPlayerDe == cookie.Player ? "rgba(255, 195, 195, 0.75) " : null}
                // theme={dadosjogador.idPlayerDe == cookie.Player ? "red " : null}
            >
                {/* {dadosjogador.idPlayerPara == cookie.Player ? <Postivo /> : null} */}
                {/* {dadosjogador.idPlayerDe == cookie.Player ? <Negativo /> : null} */}
                {dadosjogador.descricao}

            </Extrato>



    ))
    const [isChecked, setChecked] = react.useState(true)
    const handleCheck = () => {
        setChecked((preventState) => !preventState)
    }
    console.log(isChecked)


    return (<>
         <style jsx>{`
        table{
                text-align: : center;
               
                margin: 2em auto;
        }
        tr{
            display: grid;

        }   
    
      `}
      
      </style >
        <table id='Extrato'>
            <tr key={data.idPlayer}>
                {isChecked ? conteudo.slice(0, 5) : conteudo}
                <Button
                    onClick={handleCheck}
                >{isChecked? 'carregar tudo' : 'menos'}</Button>
            </tr>
        </table>
    </>
       
    )
}


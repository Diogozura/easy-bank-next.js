import useSWR from "swr";
import nookies from 'nookies'
import styled from "styled-components";

const Extrato = styled.td`
 background: ${props => props.theme};
 padding:10px;
 border-radius: 20px;
 margin: 0.2em 0;
`


export default function HistoricoDeTransferencia(ctx = null) {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const cookie = nookies.get(ctx)
    // console.log(isChecked ? 1 : 0)
    const api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/extrato/?keyRoom=${cookie.chave}`
    const { data, error } = useSWR(
        api,
        fetcher, {
        refreshInterval: 30000,
    }
    );
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

    // console.log(postivo)

    const conteudo = data.extrato?.map((dadosjogador) => (

       
            <Extrato theme={dadosjogador.idPlayerPara == cookie.Player ? "rgba(195, 255, 195, 0.75)" : null || dadosjogador.idPlayerDe == cookie.Player ? "rgba(255, 195, 195, 0.75) " : null}
                // theme={dadosjogador.idPlayerDe == cookie.Player ? "red " : null}
            >
                {/* {dadosjogador.idPlayerPara == cookie.Player ? <Postivo /> : null} */}
                {/* {dadosjogador.idPlayerDe == cookie.Player ? <Negativo /> : null} */}
                {dadosjogador.descricao}

            </Extrato>



    ))
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
      
      </style>
        <table>
            <tr>
            {conteudo}
            </tr>
           
            {/* <td>{data.extrato.idPlayerPara == cookie.idPlayer ? <Postivo /> : null}</td> */}
            {/* <td>{data.extrato.idPlayerDe == cookie.idPlayer ? <Negativo /> : null}</td> */}



        </table>
    </>
       
    )
}


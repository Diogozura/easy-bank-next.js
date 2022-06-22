import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const validaToken= {
    async validar(props) {
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/dadosSala/?keyRoom=${props.keyRoom}`, {
            method: 'GET',
        })
            
            .then(async (resposta) => {
                console.log(resposta)
            if (!resposta.ok) throw new Error('Token invalido')
     
        })
    }   
}

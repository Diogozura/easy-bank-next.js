import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const validaToken= {
    async validar(props) {
        return HttpClient(`https://ffgames134.herokuapp.com/api/dadosSala/?keyRoom=${props.keyRoom}`, {
            method: 'GET',
        })
            
            .then(async (resposta) => {
                console.log(resposta)
            if (!resposta.ok) throw new Error('Token invalido')
     
        })
    }   
}

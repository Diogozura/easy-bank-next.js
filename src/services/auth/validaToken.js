import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const validaToken= {
    async validar(props, keyRoom) {
        console.log(props.keyRoom)
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}dadosSala/?keyRoom=${props.keyRoom}`, {
            method: 'GET',
        })
            
        .then(async(resposta) => {
            if (!resposta.ok) throw new Error('Token invalido')
            const body =  resposta.body;
            console.log(body)
            console.log(keyRoom, props.keyRoom)
            tokenService.save(props.keyRoom)
        })
    }   
}

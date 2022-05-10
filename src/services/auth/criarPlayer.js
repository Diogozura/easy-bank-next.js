import { HttpClient } from "../../infra/HttpClient/HttpClient"
import { tokenService } from "./tokenService"



export const criarPlayer = {
    async criar({ identificador, namePlayer}) {
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/createPlayer?keyRoom=${keyRoom}`, {
            method: 'POST',
          
            body:{
                identificador: identificador,
                namePlayer: namePlayer,
            }
        })
            .then(async (resposta) => {
                if (!resposta.ok) throw new Error("preencha todos os dados")
            console.log(resposta)
        })
    }
}
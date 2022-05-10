import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const entra = {
    async entraSala({ identificador, namePlayer }) {
        
        return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}createPlayer?keyRoom=AQ10B2YD`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                identificador,
                namePlayer
            }
           
        })
            .then(async (respostaDoServidor) => {
             
                if (!respostaDoServidor.ok) throw new Error("preencha todos os dados")
                const body = respostaDoServidor.body;
                console.log(respostaDoServidor.statusText)
                console.log(body)
                
                // tokenService.save(keyRoom, body.idPlayer )
                // tokenService.save()
            })
    }
}
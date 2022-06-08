import nookies from 'nookies'
import { tokenService } from "./tokenService";

export const entra = {
    async entraSala({ identificador, namePlayer },ctx= null) {
        const cookie = nookies.get(ctx)
        return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}createPlayer?keyRoom=${cookie.chave}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                identificador,
                namePlayer,
            }
           
        })
            .then(async (respostaDoServidor) => {
             
                if (!respostaDoServidor.ok) throw new Error("preencha todos os dados")
                const body = respostaDoServidor.body;
                console.log(respostaDoServidor.statusText)
                console.log(body)
                console.log(token)
                // tokenService.save(keyRoom, body.idPlayer )
                tokenService.save()
            })
    }
}
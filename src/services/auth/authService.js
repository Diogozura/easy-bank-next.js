import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
    async criarSala({ keyRoom, valorInicial, identificador, namePlayer }) {
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}SaveRoomPlayer/`, {
            method: 'POST',
            body: {
                keyRoom,
                valorInicial,
                identificador,
                namePlayer,
            }
        })
            .then(async(respostaDoServidor) => {
                if (!respostaDoServidor.ok) throw new Error("preencha todos os dados")
                const body = respostaDoServidor.body;
                console.log(respostaDoServidor.statusText)
                console.log(body)
                console.log(keyRoom)
                tokenService.save(keyRoom, body.idPlayer )
                // tokenService.save()
            })
    }
}
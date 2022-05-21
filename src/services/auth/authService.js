import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";
import nookies from 'nookies'

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
            .then(async (respostaDoServidor) => {
                if (!respostaDoServidor.ok) throw new Error("preencha todos os dados")
                const body = respostaDoServidor.body;
                // console.log(respostaDoServidor.statusText)
                // console.log(body)
                // console.log(keyRoom)
                tokenService.save(keyRoom, body.idPlayer)
                // tokenService.save()
            })
    },

    async criarJogador({ identificador, namePlayer }, ctx = null) {
        const cookie = nookies.get(ctx)
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/createPlayer?keyRoom=${cookie.chave}`, {
            method: 'POST',
            body: {
                identificador,
                namePlayer,
            }
        })
            .then((res) => {
                tokenService.save(cookie.chave, res.body.idPlayer)
                console.log(res.body.idPlayer)
            })

    },

    async Resta(ctx = null) {
        const cookie = nookies.get(ctx)
        console.log(cookie.chave)
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/coresRestantes?keyRoom=${cookie.chave}`, {
            method: 'GET',
        })
            .then((res) => {
                console.log(cookie.chave)
                // console.log(JSON.stringify(res))
                return res.body
            })
    },
    async coresRestantes(ctx) {
        const cookie = nookies.get(ctx)
        // console.log(cookie.Player)
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/coresRestantes?keyRoom=${cookie.chave}`, {
            method: 'GET',
        })
            .then((resposta) => {
                // console.log(cookie)

                return resposta.body
            })


    },

    async dadosSala(ctx = null) {
        const cookie = nookies.get(ctx)
        console.log(cookie.Player)
        return HttpClient(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/dadosSala?keyRoom=${cookie.chave}&idPlayer=${cookie.Player}`, {
            method: 'GET',
        })
            .then((resposta) => {
                // console.log(cookie)
                if (!resposta.ok) throw new Error('Token invalido')
                return resposta
            })


    }
}
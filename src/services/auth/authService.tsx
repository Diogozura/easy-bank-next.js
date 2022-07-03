import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";
import nookies from 'nookies'
import { Cores } from "../../../interface/Cores";

export const authService = {
    async criarSala({ keyRoom, valorInicial, identificador, namePlayer }) {
        console.log(keyRoom, valorInicial, identificador, namePlayer)
        return HttpClient(`https://ffgames134.herokuapp.com/SaveRoomPlayer/`, {
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
                console.log(respostaDoServidor.statusText)
                console.log(respostaDoServidor)
            
                tokenService.save(keyRoom, body.idPlayer, ''  || null)
    
                return body
            })

    },

    async cores() {
        return HttpClient(`https://ffgames134.herokuapp.com/api/cores`, {
            method: 'GET',
        })
            .then((resposta) => {
                const cor =  resposta.body
                    
               return cor
            })


    },

    async criarJogador({ identificador, namePlayer }, ctx = null) {
        const cookie = nookies.get(ctx)
        return HttpClient(`https://ffgames134.herokuapp.com/api/createPlayer?keyRoom=${cookie.chave}`, {
            method: 'POST',
            body: {
                identificador,
                namePlayer,
            }
        })
            .then((res) => {
                if (!res.ok) throw new Error(res.body.erro)
                tokenService.save(cookie.chave, res.body.idPlayer, '' )
                
            })

    },

    async transfereDinheiro({ idPlayerPara,valor}, ctx = null) {
        const cookie = nookies.get(ctx)
        const userDe =  `${cookie.banco === '0' ? 0 : cookie.Player }`
        
        
        return HttpClient(`https://ffgames134.herokuapp.com/api/transferencia/?keyRoom=${cookie.chave}`, {
            method: 'POST',  
            body: {
                idPlayerDe: JSON.parse(userDe),
                idPlayerPara,
                valor,
            }
        })
        .then((res) => {
            if (!res.ok) throw new Error(res.body)
            
        })
       
    },
    
    async TrocaPlayer({ idPlayerPara }, ctx = null) {
        const cookie = nookies.get(ctx)

        return HttpClient(`https://ffgames134.herokuapp.com/api/troca_player_banc?keyRoom=${cookie.chave}`,{
            method: 'POST',
            body: {
                idPlayerDe: cookie.Player,
                idPlayerPara
            }
        })
    },
    async Sair( ctx = null) {
        const cookie = nookies.get(ctx)

        return HttpClient(`https://ffgames134.herokuapp.com/api/quitPlayer?keyRoom=${cookie.chave}&idPlayer=${cookie.Player}`,{
            method: 'DELETE',
           
        })
    },
    async coresRestantes(ctx = null) {
        const cookie = nookies.get(ctx)
        
        return HttpClient(`https://ffgames134.herokuapp.com/api/coresRestantes?keyRoom=${cookie.chave}`, {
            method: 'GET',
        })
            .then((resposta) => {
            

                return resposta.body
            })


    },
    async extrato(ctx = null) {
        const cookie = nookies.get(ctx)
        return HttpClient(`https://ffgames134.herokuapp.com/api/extrato/?keyRoom=${cookie.chave}`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
            .then((resposta) => {
                
            })
            .then((data) => {
                
            })
            .catch((error) => {
          
        })


    },

}
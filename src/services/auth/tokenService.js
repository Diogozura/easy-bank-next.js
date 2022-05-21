import nookies from 'nookies'

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND *60
const ONE_HOUR = ONE_MINUTE * 60
const ONE_DAY = ONE_HOUR * 24
const ONE_YEAR = ONE_DAY * 365
const ONE_WEEK = ONE_DAY * 7



export const tokenService = {
    save(keyRoom, idPlayer, ctx = null) {
        
        nookies.set(ctx, 'Player', idPlayer, {
            maxAge: ONE_WEEK,
            path:'/',
        }),
        nookies.set(ctx, 'chave', keyRoom, {
            maxAge: ONE_WEEK,
            path:'/',
        })
        
    },
    get(ctx = null) {
        const cookies = nookies.get(ctx)
        return cookies['chave', 'Player'] 
        // return localStorage.getItem('Player')
    },
    delete() {
        localStorage.removeItem('Player')
    }
}
// export const cria= {
//     async criaToken(context) {
//         return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}createRoom/`)
            
//         .then(async(resposta) => {
//             const body = await resposta.json();
//             return body
//         })
//     }   
// }

export async function criaToken() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}createRoom/`)
    const data = await res.json()
    console.log(data)
    return data
  }
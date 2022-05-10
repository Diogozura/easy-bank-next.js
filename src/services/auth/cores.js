// export const cores= {
//     async cores() {
//         return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/cores`)
            
//         .then(async(resposta) => {
//             const body =  await resposta.json();
//             console.log(body)
//         })
//     }   
// }
export async function cores() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/cores`)
    const posts = await res.json()
    // const resta = posts

    return posts
  }

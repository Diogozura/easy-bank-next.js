// Arquitetura Hexagonal
// Ports & Adapters

export async function HttpClient(fetchUrl, fetchOptions) {
    const options = {
      ...fetchOptions,
      headers:{
        'Content-Type': 'application/json',
        ...fetchOptions.headers,
      },
      body : fetchOptions.body ? JSON.parse(fetchOptions.body) : null,
    }
    return fetch(fetchUrl, options) 
    // To USANDO YARN
  
      .then(async(respostaDoServidor) => {
        return {
          ok: respostaDoServidor.ok,
          status: respostaDoServidor.status,
          statusText: respostaDoServidor.statusText,
          body: await respostaDoServidor.json(),
        }
      })
  }
  
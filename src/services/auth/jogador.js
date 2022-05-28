import { authService } from "./authService";
import React from 'react';

export default function useSession() {
    const [session, setSession] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        authService.dadosSala()
            .then((session) => {
                const body = session.body
                // console.log(session)
                setSession(body)
            })
            .catch((session) => {
                setError(session)
                console.log("Diogo falhou")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])


    return {
        data: session,
        error,
        loading
    }
}

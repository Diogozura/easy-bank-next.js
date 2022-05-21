import { authService } from "./authService";
import React from 'react';

export default function useCores() {
    const [session, setSession] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        authService.coresRestantes()
            .then((session) => {
                const body = session
                console.log(session)
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
import { authService } from "./authService";
import React from 'react';
import { Cores } from "../../../interface/Cores";

export default function useCores() {
    const [session, setSession] = React.useState<Cores>();
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        authService.cores()
            .then((session) => {
                const body = session
              
                setSession(body)
            })
            .catch((session) => {
                setError(session)
               
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
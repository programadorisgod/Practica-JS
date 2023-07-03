import { useState, useEffect } from "react";

export function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setErrror] = useState(null)
    const [controller, setController] = useState(null)

    //este me realizara la peticion, con la url que traera UseFetch
    useEffect(() => {
        const abortController = new AbortController()
        setController(abortController)
        setLoading(true)

        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => {
                //que muestre que ha sido el request canceled
                if (error.name === "AbortError") {
                    console.log('Request cancelled');

                } else {
                    setErrror(error)
                }
            })
            //usamos el setLoading aqui para que se ejecute cuando acabe
            .finally(() => setLoading(false))


        //si se desmonta el componenete, abortamos la peticion
        return () => abortController.abort()
    }, []);

    const hadleCancelRequest = () => {
        //si ya hay un controller
        if (controller) {
            controller.abort()
            setErrror("Request Cancelled")
        }
    }

    //retorno la data, para que sea mejor al destrucutrar 
    return { data, loading, error, hadleCancelRequest };
}
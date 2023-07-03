function getSuspender(promise) {
    let status = "pending"
    let response

    const suspender = promise.then(
        (res) => {
            status = "succes"
            response = res
        },
        (err) => {
            status = "error"
            response = err
        }
    )
    //ahora dependiendo de los casos de la promesa
    //si es pendiente mandamos suspender
    //si es error mandamos la respuesta
    //sino mandamos la respuesta 
    const read = () => {
        switch (status) {
            case "pending":
                throw suspender
            case "error":
                throw response
            default:
                return response

        }
    }
    return { read }
}


export function fetchData(url) {
    const promise = fetch(url)
        .then((response) => response.json())
        .then((data) => data)

    return getSuspender(promise)
}
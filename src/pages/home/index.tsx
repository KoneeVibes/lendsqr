import { useEffect, useState } from "react"

export const Home: React.FC<{}> = () => {

    const [message, setMessage] = useState();
    const BASE_ENDPOINT = process.env.REACT_APP_BASE_ENDPOINT;

    useEffect(() => {
        fetch(`${BASE_ENDPOINT}/home`)
            .then((res) => {
                res.json()
                    .then((response) => {
                        setMessage(response.message);
                    })
                    .catch((error) => {
                        console.log('Encountered error', error);
                    })
            })
            .catch((err) => {
                console.log('Was unable to connect with server', err);
            })
    })

    return (
        <div>
            <p>This is the Home page and {message}</p>
        </div>
    )
}
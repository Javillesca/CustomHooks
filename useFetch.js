import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    const isShowed = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {
            isShowed.current = false;
        }
    }, []);

    useEffect(() => {

        setState({ data: null, loading: true, error: null});

        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(isShowed.current) {
                    setState({
                        data: data,
                        loading: false,
                        error: null
                    });
                }
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'Failed to get data'
                });
            });
    },[url]);

    return state;
}

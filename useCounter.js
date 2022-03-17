import { useState } from 'react'

export const useCounter = (initState = 1) => {

    const [counter, setCounter] = useState(initState);
    const increment = () => setCounter(counter + 1);
    const decrement = () => setCounter(counter - 1);
    const restart = () => setCounter(initState);

    return {
        counter,
        increment,
        decrement,
        restart
    }
}

import {useState} from 'react'
import './App.css'

function App() {
    const [counter, setCounter] = useState<number>(0)

    function add() {
        setCounter(counter + 1)
    }

    function sub() {
        setCounter(counter - 1)
    }

    return (
        <>
            <Counter counter={counter} add={add} sub={sub}/>

        </>
    )
}

export default App

type Counterprobs = { counter: number; add: () => void; sub: () => void }

function Counter({counter, add, sub}: Counterprobs) {
    return (
        <>
            {counter}
            <div>
                <button onClick={add}>+</button>
                <button onClick={sub}>-</button>
            </div>
        </>
    )

}

import React from "react";
import { useState } from 'react';
import style from './style.module.css'


function Counter() {

    let [counter, setCounter] = useState(0)


    const decrement = () => {
        let newQtd = counter - 1
        if (newQtd <= 0) {
            setCounter(0)
        } else {
            setCounter(newQtd)
        }
    }

    const increment = () => {
        let newQtd = counter + 1
        setCounter(newQtd)
    }

    return (
        <>
            <button
                type="button"
                onClick={decrement}
                className={style.btnCounterMinus}>
                -
            </button>
            <p className={style.qtd}>
            {counter}
            </p>
            <button
                type="button"
                onClick={increment}
                className={style.btnCounterPlus}>
                +
            </button>
        </>
    )
}

export default Counter 
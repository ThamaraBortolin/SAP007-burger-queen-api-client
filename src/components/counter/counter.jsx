import React from "react";
import style from './style.module.css'


function Counter(props) {

    return (
        <>
            <button
                type="button"
                onClick={props.decrement}
                className={style.btnCounterMinus}>
                -
            </button>
            <p>{props.counter}</p>
            <button
                type="button"
                onClick={props.increment}
                className={style.btnCounterPlus}>
                +
            </button>
        </>
    )
}



export default Counter 
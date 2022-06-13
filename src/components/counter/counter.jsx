import React from "react";
import style from './style.module.css'


function Counter(props) { 

    return (
        <>
            {props.counter}
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
import style from './style.module.css'

function Button(props) {
    return (
        <button
            type={props.type}
            className={style.btn}
            onClick={props.onClick}>
            {props.textBtn}
        </button>
    )
}

export default Button
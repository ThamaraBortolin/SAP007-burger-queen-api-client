import style from './style.module.css'

function Button(props){
    return (
        <button type={props.type} className={style.btn}>{props.textBtn}</button>
    )
}

export default Button
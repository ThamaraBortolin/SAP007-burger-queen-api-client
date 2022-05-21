import style from './styles.module.css'

function Input(props){
    return (
        <input type={props.type} placeholder={props.placeholder} className={style.input}/>
    );
};

export default Input
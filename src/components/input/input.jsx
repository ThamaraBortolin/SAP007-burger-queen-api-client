import style from './styles.module.css'

function Input(props){
    return (
        <input id={props.id} 
        type={props.type} 
        name ={props.name} 
        placeholder={props.placeholder}
        className={style.input} 
        onChange={props.onChange}
        value={props.value}  
        required={true}/>
    );
};

export default Input
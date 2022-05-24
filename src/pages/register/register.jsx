import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Paper from '../../img/paper.png';
import style from './style.module.css';
import Input from '../../components/input/input.jsx';
import Button from '../../components/button/button.jsx';
import {Link} from 'react-router-dom';
import { useState } from 'react';

const initialValue = {
        name: '',
        email:'',
        password:'',
        checkPassword:'',
        role:'',
    }

function Register (){
    
    const [values, setValues] = useState({initialValue});

    const [msgErro, setMsgErro] = useState('');

    function onChange(e){
        const {name, value} = e.target;
        
        setValues({...values,[name]: value})

    }

    function onSubmit(e){
        e.preventDefault()
        

        setMsgErro('')
        
        if(values.password !== values.checkPassword){
            setMsgErro('As senhas não coincidem')
        }else if(!/\S+@\S+\.\S+/.test(values.email)){
            setMsgErro('Email inválido')
        }
    }

    return (
        <>
            <Header />
            <section className={style.containerRegister}>
                <img src={Paper} alt="paper" className={style.imgPaper} />
                <form className={style.formRegister} onSubmit={onSubmit}>
                    <label className={style.label}>Nome:
                        <Input name="name" type="text" placeholder="Insira seu nome" onChange={onChange} required/>
                    </label>
                    <label className={style.label}>Email:
                        <Input name="email" type="text" placeholder="Insira seu email" onChange={onChange} required/>
                    </label>
                    <label className={style.label}>Senha:
                        <Input name="password" type="password" placeholder="Insira sua senha" onChange={onChange} required/>
                    </label>
                    <label className={style.label}>Confirme senha:
                        <Input name="checkPassword" type="password" placeholder="Confirme sua senha" onChange={onChange} required/>
                    </label>
                    <label className={style.labelCheckbox}> 
                        <Input name="role" type="radio" value="kitchen" onChange={onChange} required={false}/> Cozinha
                    </label>
                    <label className={style.labelCheckbox}> 
                        <Input name="role" type="radio" value="hall" onChange={onChange} required={false}/> Salão
                    </label>
                    <p className={style.msgErro}>{msgErro}</p>
                    <Button type="submit" textBtn="Cadastrar" />
                    <p className={style.haveLogin}>Já possui Login?
                        <Link  className={style.linkLogin} to="/login">Logar</Link>
                    </p>
                   
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Register
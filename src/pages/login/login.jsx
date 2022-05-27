import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx'
import Input from '../../components/input/input.jsx';
import Button from '../../components/button/button.jsx';
import LoginValid from './loginValid.jsx';

import Paper from '../../img/paper.png';

import style from './style.module.css'

import {Link} from 'react-router-dom';



function Login (){
    
    const {onChange, onSubmit} = LoginValid()

    return (
        <>
            <Header />
                <section className={style.containerLogin}>
                    <img src={Paper} alt="paper" className={style.imgPaper}></img>
                        <form className={style.formLogin} onSubmit={onSubmit}>
                            <label className={style.label}>Email:
                                <Input id="email" name="email" type="text" placeholder="Insira seu email" onChange={onChange} required/>
                            </label>
                            <label className={style.label}>Senha:
                                <Input id="password" name="password" type="password" placeholder="Insira sua senha" onChange={onChange} required/>
                            </label>
                            {/* <p>{msgErro}</p> */}
                            <Button type="submit" textBtn="Login"/>
                            <p className={style.pNotRegister}>Não é cadastrado?</p>
                            <Link  className={style.linkRegister} to="/register">Cadastre-se</Link>
                        </form>
                </section>
            <Footer />
        </>
    )
}

export default Login
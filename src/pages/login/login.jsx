import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx'
import Paper from '../../img/paper.png';
import Input from '../../components/input/input.jsx';
import Button from '../../components/button/button.jsx';
import style from './style.module.css'
import {Link} from 'react-router-dom';


function Login (){
    return (
        <>
            <Header />
                <section className={style.containerLogin}>
                    <img src={Paper} alt="paper" className={style.imgPaper}></img>
                        <form className={style.formLogin}>
                            <label className={style.label}>Email:</label>
                            <Input type="text" placeholder="Insira seu email"/>
                            <label className={style.label}>Senha:</label>
                            <Input type="password" placeholder="Insira sua senha"/>
                            <Button type="submit" textBtn="Login" />
                            <p className={style.pCad}>Não é cadastrado?</p>
                            <Link  className={style.linkCad} to="/register">Cadastre-se</Link>
                        </form>
                </section>
            <Footer />
        </>
    )
}

export default Login
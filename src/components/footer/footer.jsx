
import style from './style.module.css';

function Footer (){
    return (
        <section className={style.containerFooter}>
            <p>Desenvolvido por</p>
            <a className={style.linkGitHub} href='https://github.com/ThamaraBortolin'>Thamara Bortolin</a>
        </section>
    )
}

export default Footer
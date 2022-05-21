import Logo from '../../img/logo.png'
import styles from './style.module.css'

function Header (){
    return (
        <section  className={styles.containerHeader}>
            <img src={Logo} alt="logo" className={styles.logo}></img>
        </section>
    )
}

export default Header
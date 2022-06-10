import Logo from '../../img/logo.png';
import styles from './style.module.css';

function Header (props){


    return (
        <section  className={styles.containerHeader}>
            <img 
            src={Logo} 
            alt="logo" 
            className={styles.logo}/>
        </section>
    )
}

export default Header
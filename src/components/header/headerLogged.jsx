import Logo from '../../img/logo.png'
import styles from './style.module.css';
import NavLinks from '../navLinks/navLinks.jsx';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { IoIosCloseCircle } from 'react-icons/io'
import { useState } from 'react';

function Header() {

    const [open, setOpen] = useState(false)

    const openIcon = <MdOutlineRestaurantMenu className={styles.hamburguer} onClick={() => setOpen(!open)} />

    const closeIcon = <IoIosCloseCircle className={styles.hamburguer} onClick={() => setOpen(!open)} />

    return (
        <section className={styles.containerHeaderLogged}>
            <img className={styles.logoLogged}
                src={Logo}
                alt="logo" />
            <nav className={styles.containerNavigation}>
                {open ? closeIcon : openIcon}
                {open && <NavLinks />}
            </nav>
        </section>
    )
}

export default Header
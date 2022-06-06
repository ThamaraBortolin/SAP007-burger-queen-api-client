import style from './style.module.css';
import { MdOutlineMenuBook } from 'react-icons/md';
import { MdFastfood } from 'react-icons/md';
import { ImExit } from 'react-icons/im';

const NavLinks = () => {
    return (
        <ul className={style.ulMenu}>
            <li className={style.ilMenu}>
                <MdOutlineMenuBook />
                <a className={style.aMenu}
                    href="/main">
                    Menu
                </a>
            </li>
            <li className={style.ilMenu}>
                <MdFastfood />
                <p>
                    Pedidos
                </p>
            </li>
            <li className={style.ilMenu}>
                <ImExit />
                <a href="/login" className={style.aMenu}>
                    Sair
                </a>
            </li>
        </ul>
    )
}

export default NavLinks
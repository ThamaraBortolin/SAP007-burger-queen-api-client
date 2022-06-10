import Header from '../../components/header/headerLogged.jsx';
import Footer from '../../components/footer/footer.jsx';
import Button from '../../components/button/button.jsx';
import { getProducts } from '../../service/apiProduct';
import style from './style.module.css';
import MenuProducts from '../../components/menuProducts/menuProducts.jsx';
import NewOrder from '../../img/newOrder.png'
import MenuFlavor from '../../components/menuProducts/menuFlavor.jsx';
import ModalNewOrder from '../../components/modal/newOrder.jsx';

import { useEffect, useState } from 'react';




const HomeHall = () => {

    const [menu, setMenu] = useState([])
    const [type, setType] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        getProducts()
            .then(res => res.json())
            .then(response => setMenu(response))
            .catch(error => alert('Error: ' + error.message));
    }, []);

    console.log(menu)

    return (
        <>
            <Header />
            <main className={style.mainHall}>
                <section className={style.menu}>
                    <section className={style.btnMenus}>
                        <Button className={style.btnBreakfast}
                            type="button"
                            textBtn="Café da manhã"
                            value="breakfast"
                            onClick={(e) => setType(e.target.value)} />
                        <Button className={style.btnMenu}
                            type="button"
                            textBtn="Menu do dia"
                            value="hamburguer"
                            onClick={(e) => setType(e.target.value)} />
                        <Button className={style.btnMenu}
                            type="button"
                            textBtn="Porções"
                            value="side"
                            onClick={(e) => setType(e.target.value)} />
                        <Button className={style.btnDrinks}
                            type="button"
                            textBtn="Bebidas"
                            value="drinks"
                            onClick={(e) => setType(e.target.value)} />
                    </section>
                    <section className={style.sectionFlavor}>
                        {type === "hamburguer" ?
                            <MenuFlavor /> : ''}
                    </section>
                    <ul className={style.containerMenu}>
                        <MenuProducts
                            itens={menu.filter((item) => item.sub_type === type)} />
                    </ul>
                </section>
                <img className={style.newOrderBtn} alt="newOrder"
                    src={NewOrder}
                    onClick={() => { setIsModalVisible(true) }} />
                {isModalVisible &&
                    <ModalNewOrder
                        className={style.modal}
                        onClick={() => { setIsModalVisible(false) }} />}
            </main>
            <Footer />
        </>
    )
}

export default HomeHall
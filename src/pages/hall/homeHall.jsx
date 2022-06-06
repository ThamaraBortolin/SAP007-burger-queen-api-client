import Header from '../../components/header/headerLogged.jsx';
import Footer from '../../components/footer/footer.jsx';
import Button from '../../components/button/button.jsx';
import Input from '../../components/input/input.jsx';

import HallProducts from './hallProducts.jsx'

import style from './style.module.css';



const HomeHall = () => {

    const { onChange, filterBreakfast, filterMenu, filterDrinks, products, flavor } = HallProducts()

    return (
        <>
            <Header />
            <main className={style.mainHall}>
                <section className={style.menu}>
                    <section className={style.btnMenus}>
                        <Button className={style.btnBreakfast}
                            type="button"
                            textBtn="Café da manhã"
                            onClick={filterBreakfast} />
                        <Button className={style.btnMenu}
                            type="button"
                            textBtn="Menu do dia"
                            onClick={filterMenu} />
                        <Button className={style.btnDrinks}
                            type="button"
                            textBtn="Bebidas"
                            onClick={filterDrinks} />
                    </section>
                    <ul className={style.containerMenu}>
                        {products}
                    </ul>

                </section>
                <aside className={style.aside}>
                    <section className={style.sectionFlavor}>
                        {flavor}
                    </section>
                    <section className={style.newOrder}>
                        <h1>
                            Novo Pedido
                        </h1>
                        <Input
                            id='client_name'
                            type="text"
                            name='client_name'
                            onChange={onChange}
                            placeholder='Nome do cliente'
                            required />
                        <Button className={style.btnNewOrder}
                            type="submit"
                            textBtn="Enviar" />
                    </section>
                </aside>
            </main>
            <Footer />
        </>
    )
}

export default HomeHall
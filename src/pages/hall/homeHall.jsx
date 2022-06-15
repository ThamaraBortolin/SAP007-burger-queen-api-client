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
    let [order, setOrder] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [totalPriceOrder, setTotalPriceOrder] = useState(0)


    useEffect(() => {
        getProducts()
            .then(res => res.json())
            .then(response => setMenu(response))
            .catch(error => alert('Error: ' + error.message));
    }, []);

    const decrement = (iten) => {
        const foundItem = order.findIndex((item) => item.id === iten.id);
        if (order[foundItem].quantity === 1) {
            const removeIten = order.filter((_iten) => _iten.id !== order[foundItem].id)
            setOrder([...removeIten])
        } else {
            order[foundItem].quantity--
            setOrder([...order])
        }
    }

    const increment = (iten) => {
        const foundItem = order.findIndex((item) => item.id === iten.id);
        if (foundItem !== -1) {
            order[foundItem].quantity += 1
        } else {
            const newOrder = {
                id: iten.id,
                name: iten.name,
                price: iten.price,
                flavor: iten.flavor,
                complement: iten.complement,
                quantity: 1,
            }
            order = [...order, newOrder]
        }
        setOrder([...order])
    }

    const deleteIten = (iten) =>{
        const foundItem = order.findIndex((item) => item.id === iten.id);
        const removeIten = order.filter((_iten) => _iten.id !== order[foundItem].id)
        setOrder([...removeIten])
        console.log(iten)
    }

    useEffect(() => {
        const sum = (previousValue, currentValue) => previousValue + currentValue;
        setTotalPriceOrder(() => {
            const totalPrice = order.map((iten) => iten.quantity * iten.price)
            return totalPrice.reduce(sum, 0)
        })
    }, [order]);


    const orderData = {}
    order.forEach((_iten) => {
        orderData[_iten.id] = _iten.quantity
    })

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
                            itens={menu.filter((item) => item.sub_type === type)}
                            increment={increment}
                            decrement={decrement}
                            orderData={orderData} />
                    </ul>
                </section>
                <img className={style.newOrderBtn} alt="newOrder"
                    src={NewOrder}
                    onClick={() => { setIsModalVisible(true) }} />
                {isModalVisible &&
                    <ModalNewOrder
                        className={style.modal}
                        onClick={() => { setIsModalVisible(false) }}
                        itens={order}
                        totalPriceOrder={totalPriceOrder} 
                        deleteIten={deleteIten}/>}
            </main>
            <Footer />
        </>
    )
}

export default HomeHall
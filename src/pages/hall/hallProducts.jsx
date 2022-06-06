import { getProducts } from '../../service/apiProduct';
import style from './style.module.css';
import { GiMeat } from 'react-icons/gi';
import { GiChickenLeg } from 'react-icons/gi';
import { RiPlantFill } from 'react-icons/ri'

import { useEffect, useState } from 'react';


const HallProducts = () => {

    const onChange = (e) => {
        e.preventDefault();
    }

    const [menu, setMenu] = useState([])
    const [products, setProducts] = useState([])
    const [flavor, setFlavor] = useState([])

    const getData = async () => {
        const data = await getProducts();
        setMenu(data);
        console.log(data)
    };

    useEffect(() => {
        getData()
    }, []);

    function filterBreakfast() {
        setFlavor()
        setProducts(menu.filter((element) => element.type === 'breakfast')
            .map((element) =>
            (<li
                key={element.id}
                className={style.containerProducts}>
                <h1
                    className={style.nameProduct}>
                    {element.name}
                </h1>
                <img
                    alt="imgProducts"
                    src={element.image}
                    className={style.imgMenu} />
                {element.price}
            </li>)))
    }

    function filterMenu() {
        setFlavor(
            <>
                <span className={style.spanFlavor}>
                    Carne
                    <GiMeat
                        color='brown'
                        size='30px' />
                </span>
                <span className={style.spanFlavor}>
                    Frango
                    <GiChickenLeg
                        color='orange'
                        size='30px' />
                </span>
                <span className={style.spanFlavor}>
                    Vegetariano
                    <RiPlantFill
                        color='green'
                        size='30px' />
                </span>
            </>
        )
        setProducts(menu.filter((element) => element.sub_type === 'hamburguer' || element.sub_type === 'side')
            .map((element) =>
            (<li
                key={element.id}
                className={style.containerProducts}>
                <h1 className={style.nameProduct}>
                    {element.name}
                </h1>
                {element.flavor === 'carne' ? <GiMeat color='brown' size='30px' /> :
                    element.flavor === 'frango' ? <GiChickenLeg color='orange' size='30px' /> :
                        element.flavor === 'vegetariano' ? <RiPlantFill color='green' size='30px' /> : ''}
                <img
                    alt="imgProducts"
                    src={element.image}
                    className={style.imgMenu} />
                {element.complement ? <p className={style.complement}><strong>Adicional:</strong> {element.complement}</p> : ''}
                <p>
                    R${element.price}
                </p>
            </li>)));
    }

    function filterDrinks() {
        setFlavor()
        setProducts(menu.filter((element) => element.sub_type === 'drinks')
            .map((element) =>
            (<li
                key={element.id}
                className={style.containerProducts}>
                <h1
                    className={style.nameProduct}>
                    {element.name}
                </h1>
                <img
                    alt="imgProducts"
                    src={element.image}
                    className={style.imgMenu} />
                {element.price}
            </li>)))
    }
    return { onChange, filterBreakfast, filterMenu, filterDrinks, products, flavor }
}

export default HallProducts
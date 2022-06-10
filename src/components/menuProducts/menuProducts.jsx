import { GiMeat } from 'react-icons/gi';
import { GiChickenLeg } from 'react-icons/gi';
import { RiPlantFill } from 'react-icons/ri';
import {FcPlus} from 'react-icons/fc';

import Counter from '../counter/counter';

import style from './style.module.css';

function MenuProducts({ itens }) {

    return (
        <>
            {itens.map((element) =>
            (<li
                key={element.id}
                className={style.containerProducts}>
                <h1 className={style.nameProduct}>
                    {element.name}
                </h1>
                {element.flavor === 'carne' ? <GiMeat color='brown' size='30px'/> :
                    element.flavor === 'frango' ? <GiChickenLeg color='orange' size='30px' /> :
                        element.flavor === 'vegetariano' ? <RiPlantFill color='green' size='30px' /> : ''}
                <img
                    alt="imgProducts"
                    src={element.image}
                    className={style.imgMenu} />
                {element.complement ?
                    <p className={style.complement}>
                        <FcPlus />
                        {element.complement}
                    </p> : ''}
                <p className={style.price}>
                    R${element.price}
                </p>
                <div className={style.counter}>
                    <Counter/>
                </div>
            </li>))}
        </>
    )
}

export default MenuProducts
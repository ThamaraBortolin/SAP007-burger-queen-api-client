import { GiMeat } from 'react-icons/gi';
import { GiChickenLeg } from 'react-icons/gi';
import { RiPlantFill } from 'react-icons/ri';
import style from './style.module.css'

const MenuFlavor = (props) => {

    return (
        <>
            <span className={style.spanFlavor}>
                Carne
                <GiMeat
                    color='brown'
                    size='30px' 
                    onClick={props.filterMeat}/>
            </span>
            <span className={style.spanFlavor}>
                Frango
                <GiChickenLeg
                    color='orange'
                    size='30px' 
                    onClick={props.filterChiken}/>
            </span>
            <span className={style.spanFlavor}>
                Vegetariano
                <RiPlantFill
                    color='green'
                    size='30px' 
                    onClick={props.filterVegetarian}/>
            </span>
        </>
    )
}

export default MenuFlavor
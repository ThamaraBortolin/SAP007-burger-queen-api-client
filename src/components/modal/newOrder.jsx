import style from './style.module.css'
import { IoIosCloseCircle } from 'react-icons/io'

const ModalNewOrder = ({onClick,itens}) =>{
    

    return (
    <section className={style.sectionNewOrder}>
        <form className={style.modalNewOrder}>
            <IoIosCloseCircle className={style.closeBtn} size="30px" onClick={onClick}/>
            <h1 className={style.newOrderTitle}>Novo Pedido</h1>
            <input type="text" name="client" placeholder="Nome do cliente" className={style.inputClientName} required />
            {itens.map((element)=>
             (
                <li key={element.id}>
                {element.quantity}
                {element.name}
                <p>{element.flavor}</p>
                <p>{element.complement}</p>
                <p>R${element.price}</p>
                </li>
                )
            )}
        </form>
    </section>
    )
}

export default ModalNewOrder
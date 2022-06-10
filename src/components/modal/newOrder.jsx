import style from './style.module.css'
import { IoIosCloseCircle } from 'react-icons/io'

const ModalNewOrder = (props) =>{
    return (
    <section className={style.sectionNewOrder}>
        <form className={style.modalNewOrder}>
            <IoIosCloseCircle className={style.closeBtn} size="30px" onClick={props.onClick}/>
            <h1 className={style.newOrderTitle}>Novo Pedido</h1>
            <input type="text" name="client" placeholder="Nome do cliente" className={style.inputClientName} required />
        </form>
    </section>
    )
}

export default ModalNewOrder
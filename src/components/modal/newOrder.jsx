import style from './style.module.css'
import { IoIosCloseCircle } from 'react-icons/io'
import { MdDeleteForever } from 'react-icons/md'


const ModalNewOrder = ({ onClick, itens, totalPriceOrder, deleteIten }) => {


    return (
        <section className={style.sectionNewOrder}>
            <form className={style.modalNewOrder}>
                <IoIosCloseCircle className={style.closeBtn} size="30px" onClick={onClick} />
                <h1 className={style.newOrderTitle}>Novo Pedido</h1>
                <input type="text" name="client" placeholder="Nome do cliente" className={style.inputClientName} required />
                <input type="number" name="table" placeholder='Numero da mesa' className={style.inputNumberTable} required />
                <ul>
                    {itens.map((element) =>
                    (<>
                        <li key={element.id}>
                            <p>{element.quantity}X</p>
                            <p>{element.name}</p>
                            <p>{element.flavor}</p>
                            <p>{element.complement}</p>
                            <p>R${element.price}</p>
                            <MdDeleteForever onClick={() => deleteIten(element)} />
                        </li>

                    </>)
                    )}
                </ul>
                <h2>Total: R${totalPriceOrder}</h2>
                <button type="submit">Fazer Pedido</button>
            </form>
        </section>
    )
}

export default ModalNewOrder
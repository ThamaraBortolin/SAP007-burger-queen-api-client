import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';
import Button from '../../components/button/button.jsx';
import Input from '../../components/input/input.jsx';

import {getProducts} from '../../service/apiProduct'

import { useEffect} from 'react';

import style from './style.module.css';



const HomeHall = () => {
 

    const onChange = (e) => {
        e.preventDefault();
    }

    const getData = async () => {
        const data = await getProducts();
        console.log(data);
      }

      useEffect(() => {
        getData()
      }, []);
   
        // getProducts()
        // .then((res) => {
        //         switch (res.status) {
        //             case 200:
        //                 console.log('conseguiu');
        //                 return res.json();
        //             case 401:
        //                 console.log('Email ou senha inválidos')
        //                 break
        //             default:
        //                 console.log('Ops! Tente novamente mais tarde.')
        //         }
        //     })
          
        
    
    return (
        <>
            <Header/>
            <main className={style.mainHall}>
                <section className={style.menu}>
                    <section className={style.btnMenus}>
                        <Button type="button" className={style.btnBreakfast} textBtn="Café da manhã"/>
                        <Button type="button" className={style.btnMenu} textBtn="Menu do dia" />
                        <Button type="button" className={style.btnDrinks} textBtn="Bebidas" />
                    </section>
                </section>
                <aside className={style.newOrder}>
                    <h1>Novo Pedido</h1>
                    <Input id='client_name' type="text" name='client_name'onChange={onChange} placeholder='Nome do cliente' required/>
                    <ul>
                        {/* <li>{menu}</li> */}
                    </ul>
                    <Button type="submit" className={style.btnNewOrder} textBtn="Enviar" /> 
                </aside>
                </main>
            <Footer/>
        </>
    )
}

export default HomeHall
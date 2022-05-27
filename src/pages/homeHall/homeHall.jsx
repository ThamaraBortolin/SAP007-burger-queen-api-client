import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import style from './style.module.css'

function HomeHall(){
    return (
        <>
            <Header/>
                <section className={style.mainHall}>
                    <p>Olá</p>
                </section>
            <Footer/>
        </>
    )
}

export default HomeHall
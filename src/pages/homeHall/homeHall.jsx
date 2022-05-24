import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import style from './style.module.css'

function homeHall(){
    return (
        <>
            <Header/>
                <section className={style.mainHall}>
                </section>
            <Footer/>
        </>
    )
}

export default homeHall
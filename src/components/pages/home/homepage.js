import Header from '../../header/header'
import style from './home.module.css'
import Main from '../../main/main'



import NavBar from '../../navbar/navbar'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div>
                <NavBar/>
            </div>
            <div>
                <Main/>
            </div>
        </div>
    )
}

export default HomePage;
import Header from '../header/header'
import Main from '../login/index'
import style from './home.module.css'



import NavBar from '../navbar/navbar'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <div>
                <NavBar/>
            </div>
        </div>
    )
}

export default HomePage;
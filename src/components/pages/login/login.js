import Header from '../../header/header'
import login from './login.module.css'
import Login from '../../login/index'

const LoginPage = () => {
    return (
        <div className={login.container}>
            <Header/>
            <Login/>
        </div>
    )
}

export default LoginPage;
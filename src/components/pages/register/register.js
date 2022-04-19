import Header from '../../header/header'
import register from './register.module.css'
import Register from '../../register/register'

const RegisterPage = () => {
    return (
        <div className={register.container}>
            <Header/>
            <Register/>
        </div>
    )
}

export default RegisterPage;
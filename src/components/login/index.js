import style from './index.module.css'
import { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import {AuthContext} from '../contexts/auth'
import UserService from '../services/register'
import { useNavigate, Link } from 'react-router-dom'
import Header from '../header/header'





function Login() {

    const { authenticated, login} = useContext(AuthContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const user = await UserService.login( {email: email, password: password});
            navigate("/")     
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <div>
            <Header/>
        <div className={style.cabecalho}><h1>Digite seu email e sua senha!</h1></div>
            <div className={style.mainContainer}>
                <div className={style.mainLogin}>
                    <div className={style.conteudo}>
                        <div className={style.option}>
                        <h1 className={style.first}>LOGIN</h1>
                        <h1 className={style.second}><Link to='/register'>Registro</Link></h1>
                        </div>
                        <div className={style.mainForm}>
                            <form onSubmit={handleSubmit}>
                                <div className={style.mainFields}>
                                    <label>Email:</label>
                                    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className={style.mainFields}>
                                    <label>Senha:</label>
                                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <p className={style.subtittle}>esqueceu sua senha? clica aqui</p>
                                <div className={style.mainBtn}>
                                    <button className={style.btn}type="submit">ENTRAR</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
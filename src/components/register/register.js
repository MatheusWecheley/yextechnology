import style from './styleregister.module.css';
import { useState, useContext } from 'react'
import {AuthContext} from '../contexts/auth'
import UserService from '../services/register'
import { useNavigate, Link } from 'react-router-dom'


function Register() {
    const navigate = useNavigate()
    const { authenticated, login} = useContext(AuthContext)
    const [name, setName] = useState('')
    const [tell, setTell] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit =  async (e) => {
        e.preventDefault()
        try {
            const user = await UserService.register({name: name, email: email, password: password});
            if(user)
            navigate("/")
            else 
            console.log('Usuario já cadastrado')         
        } catch (error) {
            console.log('error')
        }
    }

    return (
        <div>
        <div className={style.cabecalho}><h1>Cadastre-se!</h1></div>
            <div className={style.mainContainer}>
                <div className={style.mainLogin}>
                    <div className={style.conteudo}>
                        <div className={style.option}>
                        <h1 className={style.first}><Link to='/login'>LOGIN</Link> </h1>
                        <h1 className={style.second}> Registro</h1>
                        </div>
                        <div className={style.mainForm}>
                            <form onSubmit={handleSubmit}>
                                <div className={style.mainFields}>
                                    <label>Digite seu nome:</label>
                                    <input type="text" name="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                                </div>
                                <div className={style.mainFields}>
                                    <label>Digite seu telefone:</label>
                                    <input type="tell" name="tell" value={tell} onChange={(e) => setTell(e.target.value)} required/>
                                </div>
                                <div className={style.mainFields}>
                                    <label>Digite seu email:</label>
                                    <input type="email" name="tell" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                                <div className={style.mainFields}>
                                    <label>Digite sua senha:</label>
                                    <input type="password" name="tell" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                </div>
                                <div className={style.mainFields}>
                                    <label>Digite sua senha novamente:</label>
                                    <input type="password" name="tell" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className={style.mainBtn}>
                                    <button className={style.btn}type="submit">CADASTRAR</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
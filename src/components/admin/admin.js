import Header from '../header/header'
import style from './admin.module.css'
import { useState } from 'react'
import api from '../services/api'

const Admin = () => {

    const [image, setImage] = useState('');
    const [barber, setBarber] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [status, setStatus] = useState({
        type: '',
        message: '',
    });

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image,)
        formData.set('barber', barber);
        formData.set('street', street);
        formData.set('number', number);


        
        await api.post('/users/admin', formData)
        .then((response) => {
            console.log(response);
            setStatus({
                type: 'sucess',
                message: response.data.message,
            })
        }).catch((error) => {
            if(error.response){
                console.log(error.response);
                setStatus({
                    type: 'errorr',
                    message: 'Erro! tente novamente'
                })
            }else{
                console.log('Erro: Tente novamente!')
            }
        })
    }

    return (
        <div>
            <Header/>
            <div className={style.container}>
            <h1>CADASTRO DE EMPRESAS</h1>
                <div className={style.formImg}>
                    {status.type == 'sucess'? <p style={{color: "#08368e"}}>{status.message}</p> : "" }
                    {status.type == 'errorr'? <p style={{color: "red"}}>{status.message}</p> : "" }
                    
                    <form onSubmit={handleSubmit}>
                        <label>Digite o nome do barbeiro!</label>
                        <input type="text" name="barber" onChange={e => setBarber(e.target.value)}/>
                        <label>Digite a rua do barbeiro</label>
                        <input type="text" name="street" onChange={e => setStreet(e.target.value)}/>
                        <label>Digite o numero do barbeiro</label>
                        <input type='tel' name='number' pattern="[0-9]{2}[0-9]{5}[0-9]{4}" onChange={e => setNumber(e.target.value)}/>
                        <input type='file' name='image' onChange={e => setImage(e.target.files[0])}/>
                        <button type='submit' className={style.button}>Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Admin
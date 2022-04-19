import style from './main.module.css'
import logo from '../imgs/logomarcola.jpg'
import { useState, useContext, useEffect } from 'react'
import api from '../services/api'
import Skeleton, { SkeletonTheme} from 'react-loading-skeleton'
import CardSkeleton from './cardSkeleton'
import { Card } from 'react-bootstrap'

const Main = () => {

    const [url, setUrl] = useState('')
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async () => {
        await api.get('/list-images')
        .then((response) => {
            setTimeout(() =>{
            setData(response.data.images)
            setUrl(response.data.url)
            setIsLoading(false)
            console.log(response.data)
        }, 2000)
        }).catch((err) => {
            console.log(err.response)
        })
    }

    useEffect(() => {
        getImages();
    }, [])


    return (
        <div className={style.container}>
            {
                isLoading 
                ?
                <div className={style.barbers}>
                    <h1>Recomendados</h1>
                    <div className={style.maplist}>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    </div>
                </div>
            :
            <div className={style.barbers}>
                <h1>Recomendados</h1>
                <div className={style.maplist}>
                {data.map(image =>(
                    <div className={style.list} key={image.barber}>
                        <img src={url + image.name} alt={image.name}/>
                        <span className={style.nameBarber}>{image.barber}</span>
                        <span>{image.street}</span>                    
                    </div>
                ))}
                </div>
            </div>
            }
            
        </div>
    )
}

export default Main;
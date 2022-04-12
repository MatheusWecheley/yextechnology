import style from './navbar.module.css';
import { Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className={style.container}>
                <ul className={style.list}>
                    <li><Link to='/cabelos'>Cabelo</Link></li>
                    <li><Link to='/barba'>Barba</Link></li>
                    <li><Link to='/maquiagem'>Maquiagem</Link></li>
                    <li><Link to='/manicure'>Manicure</Link></li>
                    <li><Link to='/pedicure'>Pedicure</Link></li>
                    <li><Link to='/cilios'>Cilios</Link></li>
                    <li><Link to='/massagem'>Massagem</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
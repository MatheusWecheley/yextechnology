import { Link } from "react-router-dom";
import Default from "../imgs/default.png";
import style from "./style.module.css";


function Header() {

    return (
        <div className={style.headerContainer}>
            <div className={style.headerImg}>
                <img src={Default} width="200px" height="200px" alt='Logo da Yex' />
            </div>
            <div className={style.headerMenu}>
                <div className={style.headerSearch}>
                    <input type="text" name='search' className={style.search} placeholder="Procure o que deseja." />
                    <button type="submit" name="submit" className={style.submmit}>Pesquisar</button>
                </div>
                <br />
                <br />
            </div>
            <div className={style.headerNavbar}>
                <ul className={style.headernav}>
                    <li><Link to='/register' style={{ textDecoration: 'none', }}>Cadastrar</Link></li>
                    <li><Link to='/login' style={{ textDecoration: 'none' }}>Entrar</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
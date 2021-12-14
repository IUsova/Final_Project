import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={'header'}>
            <h1 className={'header__title'}>React Pizza</h1>
            <div className={'header__links'}>
                <Link to={'/'} className={'link header__link'}>Главная страница</Link>
                <Link to={'basket'} className={'link header__link'}>Корзина</Link>
            </div>
        </header>
    )
}

export default Header;


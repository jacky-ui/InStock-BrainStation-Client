import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Logo from '../../assets/images/logos/InStock-Logo_1x.png'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <Link to='/'>
                <img className="header__logo" src={Logo} alt="logo"></img>
            </Link>
            <ul className="header__list">
                <NavLink exact={true} activeClassName="header__item-active" className="header__item-inactive" to='/'>Warehouses</NavLink>
                <NavLink activeClassName="header__item-active" className="header__item-inactive" to='/inventory'>Inventory</NavLink>
            </ul>
        </header>
    );
};

export default Header;
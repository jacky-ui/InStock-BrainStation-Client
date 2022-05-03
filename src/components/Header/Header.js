import React from 'react';
import Logo from '../../assets/images/logos/InStock-Logo_1x.png'
import './Header.scss'

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={Logo} alt="logo"></img>
            <ul className="header__list">
                <li className="header__item-active">Warehouses</li>
                <li className="header__item-inactive">Inventory</li>
            </ul>
        </header>
    );
};

export default Header;
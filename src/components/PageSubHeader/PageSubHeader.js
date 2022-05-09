import './PageSubHeader.scss';
import React from 'react';
import { useHistory } from 'react-router-dom';
import backArrow from '../../assets/images/icons/arrow_back-24px.svg';

// Component Reusable for Edit & Add for Warehouse & Inventory
const PageSubHeader = ({ pageTitle, pageTitleInventory }) => {
    let history = useHistory();
    return (
        <div className='subheader-style'>
            <section className='subheader'>
                <img className='subheader__arrow' alt="back arrow" onClick={() => history.goBack()} src={backArrow}/>
                <h1 className='subheader__title'>{pageTitle}{pageTitleInventory}</h1>
            </section>
        </div>
    )
}

export default PageSubHeader;
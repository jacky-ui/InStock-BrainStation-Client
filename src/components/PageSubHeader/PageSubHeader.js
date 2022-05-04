import './PageSubHeader';
import React from 'react';
import { useHistory } from 'react-router-dom';
import backArrow from '../../assets/images/icons/arrow_back-24px.svg';

export const PageSubHeader = ({ pageTitle }) => {
    let history = useHistory();
    return (
        <section className='subheader'>
            <img className='subheader__arrow' onClick={() => history.goBack()} src={backArrow}/>
            <h1 className='subheader__title'>{pageTitle}</h1>
        </section>
    )
}
import "./ItemDetailsPage.scss"
import React from 'react';
import { Link } from "react-router-dom";
import editIconWhite from "../../assets/images/icons/edit-24px(2).svg";
import previousIcon from "../../assets/images/icons/arrow_back-24px.svg";

const ItemDetailsPage = () => {
    return (
        <div className="main-container">
            <article className="subheader">
            {/*Warehouse heading*/}
                <section className="subheader__head">
                    <Link className="subheader__link" to="/inventory">
                        <img alt="previous" className="subheader__previous" src={previousIcon}/>
                    </Link>
                    <h1 className="subheader__head--title">Television</h1>
                    <Link className="subheader__link" to="/inventory/:itemId/edit">
                        <div className="subheader__head--circle">
                            <img alt="edit" className="subheader__edit" src={editIconWhite}/>
                            <span className="subheader__edit--text">EDIT</span>
                        </div>
                    </Link>
                </section>
                <section className="details">
                    <div className="details__tab">
                        <h3 className="details__title">ITEM DESCRIPTION:</h3>
                        <p className="details__text">This 50", 4K LED TV provides a crystal-clear picture and vivid colors.</p>
                    </div>
                    <div className="details__tab">
                        <h3 className="details__title">CATEGORY:</h3>
                        <p className="details__text">Electronics</p>
                    </div>
                    <div className="details__flex">
                        <div className="details__tab--space">
                            <h3 className="details__title">STATUS:</h3>
                            <p className="details__status">IN STOCK</p>
                        </div>
                        <div className="details__tab">
                            <h3 className="details__title">QUANTITY:</h3>
                            <p className="details__text">500</p>
                        </div>
                    </div>
                    <div className="details__tab">
                        <h3 className="details__title">WAREHOUSE:</h3>
                        <p className="details__text">Manhattan</p>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default ItemDetailsPage;
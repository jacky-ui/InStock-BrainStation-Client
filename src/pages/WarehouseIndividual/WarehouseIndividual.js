import './WarehouseIndividual.scss';
import editIcon from "../../assets/images/icons/edit-24px.svg";
import previousIcon from "../../assets/images/icons/arrow_back-24px.svg";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import editIconWhite from "../../assets/images/icons/edit-24px(2).svg";
import sortIcon from "../../assets/images/icons/sort-24px.svg";
import { Link } from "react-router-dom";

function WarehouseIndividual() {
    return(
        <article className="container">
        {/*Warehouse heading*/}
            <section className="container__head">
                <Link to="/">
                        <img
                            className="icon__previous" 
                            src={previousIcon}
                            alt=""
                        />
                </Link>
                <h1 className="container__head--title">Washington</h1>
                <Link to="/warehouse/:warehouseId/edit">
                    <div className="container__head--circle">
                        <img
                            className="icon__edit" 
                            src={editIconWhite}
                            alt=""
                        />
                        <span className="icon__edit--text">EDIT</span>
                    </div>
                </Link>
            </section>

            {/*Warehouse Address */}
            <section className="container__address">
                <div>
                    <h4 className="container__address--title">WAREHOUSE ADDRESS</h4><br/>
                    <p className="container__address--address">33 Pearl Street SW, Washington, USA</p>
                </div>

                <section className="contact">
                    <div className="contact__container">
                        <h4 className="contact__container--head">CONTACT NAME:</h4>
                        <p className="contact__container--text">Graeme Lyon</p>
                        <p className="contact__container--text">Warehouse Manager</p>
                    </div>
                    <div className="contact__container">
                        <h4 className="contact__container--head">CONTACT INFORMATION:</h4>
                        <a className="contact__container--link" href='tel:+1647-504-0911'>+1 (647) 504-0911</a>
                        <a className="contact__container--link" href="mailto:glyon@instock.com">gylon@instock.com</a>
                    </div>
                </section>
            </section>

            {/*Warehouse Inventory*/}
            <div className="title__bar">
                <div className="title__bar--container">
                    <h4 className="title__bar--heading">INVENTORY</h4>
                    <h4 className="title__bar--heading">CATERGORY</h4>
                    <h4 className="title__bar--heading">STATUS</h4>
                </div>
                <div className="title__bar--container">
                    <h4 className="title__bar--heading">QUANTITY</h4>
                    <h4 className="title__bar--heading title__bar--action">ACTION</h4>
                </div>
            </div>
            <section className="inventory">
                <div className="inventory__container1">
                    <h4 className="inventory__header">INVENTORY ITEM</h4>
                    <Link to="/inventory/:itemId">
                        <p className="inventory__details--color">Television</p>
                        <img 
                            src={arrowRight}
                            className="inventory__icon--right"
                            alt=""
                        />
                    </Link>
                    <h4 className="inventory__header">CATERGORY</h4>
                    <p className="inventory__details">Electronics</p>
                </div>
                <div className="inventory__container2">
                    <h4 className="inventory__header">STATUS</h4>
                    <p className="inventory__details--stock">IN STOCK</p>
                    <h4 className="inventory__header">QTY</h4>
                    <p className="inventory__details inventory__details--quantity">500</p>
                    <Link to="/inventory/:itemId/edit">
                        <img 
                            src={editIcon}
                            className="inventory__icon--edit"
                            alt=""
                        />
                    </Link>
                    <Link to="/">
                        <img 
                            src={deleteIcon}
                            className="inventory__icon--delete"
                            alt=""
                        />
                    </Link>
                </div>
            </section>

            <section className="inventory">
                <div className="inventory__container1">
                    <h4 className="inventory__header">INVENTORY ITEM</h4>
                    <p className="inventory__details--color">Television</p>
                    <img 
                        src={arrowRight}
                        className="inventory__icon--right"
                        alt=""
                    />
                    <h4 className="inventory__header">CATERGORY</h4>
                    <p className="inventory__details">Electronics</p>
                </div>
                <div className="inventory__container2">
                    <h4 className="inventory__header">STATUS</h4>
                    <p className="inventory__details--stock">IN STOCK</p>
                    <h4 className="inventory__header">QTY</h4>
                    <p className="inventory__details inventory__details--quantity">500</p>
                    <Link to="/">
                        <img 
                            src={editIcon}
                            className="inventory__icon--edit"
                            alt=""
                        />
                    </Link>
                    <Link to="/">
                        <img 
                            src={deleteIcon}
                            className="inventory__icon--delete"
                            alt=""
                        />
                    </Link>
                </div>
            </section>

            <section className="inventory">
                <div className="inventory__container1">
                    <h4 className="inventory__header">INVENTORY ITEM</h4>
                    <p className="inventory__details--color">Television</p>
                    <img 
                        src={arrowRight}
                        className="inventory__icon--right"
                        alt=""
                    />
                    <h4 className="inventory__header">CATERGORY</h4>
                    <p className="inventory__details">Electronics</p>
                </div>
                <div className="inventory__container2">
                    <h4 className="inventory__header">STATUS</h4>
                    <p className="inventory__details--stock">IN STOCK</p>
                    <h4 className="inventory__header">QTY</h4>
                    <p className="inventory__details inventory__details--quantity">500</p>
                    <Link to={`/warehouse/:warehouseId/edit`}>
                        <img 
                            src={editIcon}
                            className="inventory__icon--edit"
                            alt=""
                        />
                    </Link>
                    <Link to="/">
                        <img 
                            src={deleteIcon}
                            className="inventory__icon--delete"
                            alt=""
                        />
                    </Link>
                </div>
            </section>
        </article>
    )
};

export default WarehouseIndividual;
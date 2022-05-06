import "./InventoryItem.scss";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import { Link } from "react-router-dom";

function InventoryItem() {
    return(
        <>
            <section className="inventory">
                <div className="inventory__item">
                    <div className="inventory__item--spacing">
                        <h4 className="inventory__item--header">INVENTORY ITEM</h4>
                        <Link to="">
                            <p className="inventory__item--color">Television</p>
                            <img 
                                src={arrowRight}
                                className="icon icon__right"
                            />
                        </Link>
                    </div>
                    <div className="inventory__item--spacing">
                        <h4 className="inventory__item--header">CATERGORY</h4>
                        <p className="inventory__item--details">Electronics</p>
                    </div>
                    <div>
                        <h4 className="inventory__item--header">STATUS</h4>
                        <p className="inventory__item--stock">IN STOCK</p>
                    </div>
                    <div>
                        <h4 className="inventory__item--header">QTY</h4>
                        <p className="inventory__item--details">500</p>
                    </div>
                    <div>
                        <h4 className="inventory__item--header">WAREHOUSE</h4>
                        <p className="inventory__item--details">Manhattan</p>
                    </div>
                    <div className="icons">
                    <Link to="">
                        <img 
                            src={deleteIcon}
                            className="icon icon__delete"
                        />
                    </Link>
                        <Link to="">
                        <img 
                            src={editIcon}
                            className="icon icon__edit"
                        />
                    </Link>
                </div>
                </div>
            </section>
        </>
    )
};

export default InventoryItem;
import "./WarehouseInventory.scss";
import deleteIcon from "../../assets/images/icons/delete_outline-24px.svg";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import { Link } from "react-router-dom";

function WarehouseInventory() {
    return(
        <section className="inventory">
            <div className="inventory__group">
                <h4 className="inventory__header">INVENTORY ITEM</h4>
                <p className="inventory__details--color">Television</p>
                <Link to="">
                    <img 
                            src={arrowRight}
                            className="inventory__icon--right"
                            alt=""
                        />
                </Link>
            </div>
            <div className="inventory__group">
                <h4 className="inventory__header">CATERGORY</h4>
                <p className="inventory__details">Electronics</p>
            </div>
            <div className="inventory__group">
                <h4 className="inventory__header">STATUS</h4>
                <p className="inventory__details--stock">IN STOCK</p>
            </div>
            <div className="inventory__group">
                <h4 className="inventory__header">QTY</h4>
                <p className="inventory__details">500</p>
            </div>
            <div className="inventory__group inventory__group--icons">
                <Link to="">
                    <img 
                        src={deleteIcon}
                        className="inventory__icon--delete"
                        alt=""
                    />
                </Link>
                <Link to="">
                    <img 
                        src={editIcon}
                        className="inventory__icon--edit"
                        alt=""
                    />
                </Link>
            </div>
        </section>
    )
};

export default WarehouseInventory;
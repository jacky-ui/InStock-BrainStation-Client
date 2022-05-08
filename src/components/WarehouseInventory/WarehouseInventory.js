import "./WarehouseInventory.scss";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";
import { Link } from "react-router-dom";

function WarehouseInventory(props) {
    const instock = () => {
        if (props.status === "In Stock") {
            return true;
        } return false;
    };
    
    return(
        <section className="inventory">
            <div className="inventory__group inventory__group--inventory">
                <h4 className="inventory__header">INVENTORY ITEM</h4>
                <div className="inventory__group--arrow">
                    <Link to={`/inventory/${props.id}`}>
                        <div className="inventory__group--directory">
                            <p className="inventory__details--color">{props.itemName}</p>
                                <img 
                                    src={arrowRight}
                                    className="inventory__icon--right"
                                    alt=""
                                />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="inventory__group inventory__group--category">
                <h4 className="inventory__header">CATERGORY</h4>
                <p className="inventory__details">{props.category}</p>
            </div>
            <div className="inventory__group inventory__group--status">
                <h4 className="inventory__header">STATUS</h4>
                <p className={`${instock() ? 'inventory__details--instock' : 'inventory__details--outstock'}`}>{props.status}</p>
                {/*"inventory__details--instock" */}
            </div>
            <div className="inventory__group inventory__group--quantity">
                <h4 className="inventory__header">QTY</h4>
                <p className="inventory__details">{props.quantity}</p>
            </div>
            <div className="inventory__group inventory__group--icons">
                <DeleteInventory 
                    id={props.id}
                    itemName={props.itemName}
                />
                <Link to={`/inventory/${props.id}/edit`}>
                    <img 
                        src={editIcon}
                        className="inventory__icon--edit"
                        alt=""
                    />
                </Link>
            </div>
        </section>
    )
}

export default WarehouseInventory;
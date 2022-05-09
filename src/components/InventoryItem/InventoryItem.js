import "./InventoryItem.scss";
import arrowRight from "../../assets/images/icons/chevron_right-24px.svg";
import editIcon from "../../assets/images/icons/edit-24px.svg";
import DeleteInventory from "../../components/DeleteInventory/DeleteInventory";
import { Link } from "react-router-dom";

function InventoryItem(props) {
    const instock = () => {
        if (props.status === "In Stock") {
            return true;
        } return false;
    };

    return(
            <section className="inventory">
                <div className="inventory__item">
                    <div className="inventory__item--spacing inventory__item--order1">
                        <h4 className="inventory__item--header">INVENTORY ITEM</h4>
                        <Link to={`/inventory/${props.id}`} className="inventory__item--firstcolumn">
                        <div className="inventory__directory">
                            <p className="inventory__item--color">{props.itemName}</p>
                                <img 
                                    src={arrowRight}
                                    className="icon icon__right"
                                    alt=""
                                />
                        </div>
                        </Link>
                    </div>
                    <div className="inventory__item--tablet inventory__item--order2">
                        <h4 className="inventory__item--header">CATERGORY</h4>
                        <p className="inventory__item--details">{props.category}</p>
                    </div>
                    <div className="inventory__item--tablet inventory__item--order3">
                        <h4 className="inventory__item--header">STATUS</h4>
                        <p className={`${instock() ? 'inventory__item--stock' : 'inventory__item--outstock'}`}>{props.status}</p>
                    </div>
                    <div className="inventory__item--tablet inventory__item--order4">
                        <h4 className="inventory__item--header">QTY</h4>
                        <p className="inventory__item--details">{props.quantity}</p>
                    </div>
                    <div className="inventory__item--tablet inventory__item--order5">
                        <h4 className="inventory__item--header">WAREHOUSE</h4>
                        <p className="inventory__item--details">{props.warehouseName}</p>
                    </div>
                    <div className="icons inventory__item--tablet inventory__item--order6">
                        <div className="inventory__item--wrapper">
                            <DeleteInventory 
                                key={props.id}
                                itemName={props.itemName}
                            />
                            <Link to={`/inventory/${props.id}/edit`} className="inventory__item--link">
                                <img 
                                    src={editIcon}
                                    className="icon icon__edit"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
    )
};

export default InventoryItem;
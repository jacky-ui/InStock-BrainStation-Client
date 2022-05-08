import './WarehouseIndividual.scss';
import previousIcon from "../../assets/images/icons/arrow_back-24px.svg";
import editIconWhite from "../../assets/images/icons/edit-24px(2).svg";
import sortIcon from "../../assets/images/icons/sort-24px.svg";
import WarehouseInventory from '../../components/WarehouseInventory/WarehouseInventory';
import { Link } from "react-router-dom";
import { Component } from 'react';
import axios from 'axios';

const API_URL="http://localhost:8080";

class WarehouseIndividual extends Component {
    state = {
        selectedWarehouse: [],
        warehouseContact: null
    };

    componentDidMount() {
        const id = this.props.match.params.warehouseId;
        axios
            .get(`${API_URL}/warehouses/${id}`)
            .then((response) => {
                const warehouse = response.data;
                this.setState({
                    warehouseContact: warehouse
                });
            });
        axios   
            .get(`${API_URL}/inventories/inventory/${id}`)
            .then((response) => {
                const inventoryData = response.data

                this.setState({
                    selectedWarehouse: inventoryData
                });
            });
    };

    render () {
        if (!this.state.warehouseContact) {
            return(
                <div>
                    <h1>Loading your content...</h1>
                </div>
            )
        }
        const contacts = this.state.warehouseContact.contact;
        return(
            <div className="background">
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
                        <h1 className="container__head--title">{this.state.warehouseContact.name}</h1>
                        <Link to="/warehouse/:warehouseId/edit">
                            <div className="container__head--circle">
                                <img
                                    className="icon__edit--white" 
                                    src={editIconWhite}
                                    alt=""
                                />
                                <h4 className="edit__text">EDIT</h4>
                            </div>
                        </Link>
                    </section>

                    {/*Warehouse Address */}
                    <section className="container__address">
                        <div>
                            <h4 className="container__address--title">WAREHOUSE ADDRESS</h4><br/>
                            <p className="container__address--address">{this.state.warehouseContact.address}</p>
                        </div>

                        <section className="contact">
                            <div className="contact__container">
                                <h4 className="contact__container--head">CONTACT NAME:</h4>
                                <p className="contact__container--text">{contacts.name}</p>
                                <p className="contact__container--text">{contacts.position}</p>
                            </div>
                            <div className="contact__container">
                                <h4 className="contact__container--head">CONTACT INFORMATION:</h4>
                                <a className="contact__container--link" href={`tel:${contacts.phone}`}>{contacts.phone}</a>
                                <a className="contact__container--link" href={`mailto:-${contacts.email}`}>{contacts.email}</a>
                            </div>
                        </section>
                    </section>

                    {/* Title Bar renders at 768px */}
                    <div className="title__bar">
                        <div className="title__bar--grouping">
                            <h4 className="title__bar--heading">INVENTORY</h4>
                            <img 
                                src={sortIcon}
                                className="icon__sorting"
                                alt=""
                            />
                        </div>
                        <div className="title__bar--grouping">
                            <h4 className="title__bar--heading">CATERGORY</h4>
                            <img 
                                src={sortIcon}
                                className="icon__sorting"
                                alt=""
                            />
                        </div>
                        <div className="title__bar--grouping">
                            <h4 className="title__bar--heading">STATUS</h4>
                            <img 
                                src={sortIcon}
                                className="icon__sorting"
                                alt=""
                            />
                        </div>
                        <div className="title__bar--grouping">
                            <h4 className="title__bar--heading">QTY</h4>
                            <img 
                                src={sortIcon}
                                className="icon__sorting"
                                alt=""
                            />
                        </div>
                        <div className="title__bar--grouping title__bar--action">
                            <h4 className="title__bar--heading">ACTION</h4>
                        </div>
                    </div>
                    {/*Warehouse Inventory*/}
                    {this.state.selectedWarehouse.map(inventory => {
                        return(
                            <WarehouseInventory 
                                id={inventory.id}
                                key={inventory.id}
                                itemName={inventory.itemName}
                                status={inventory.status}
                                category={inventory.category}
                                quantity={inventory.quantity}
                                warehouseID={inventory.warehouseID}
                            />
                        )
                    })}
                </article>
            </div>
        )
    }
}

export default WarehouseIndividual;
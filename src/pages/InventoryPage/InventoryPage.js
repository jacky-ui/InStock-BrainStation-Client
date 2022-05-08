import "./InventoryPage.scss";
import React, { Component } from "react";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import sortIcon from "../../assets/images/icons/sort-24px.svg";
import axios from "axios";
import { api_url } from '../../utils/apiVariables';

class InventoryPage extends Component {
    state = {
        inventoriesData: null
    };
    // A function to fetch Inventories Data from Inventories API Route (/inventories)

    // Below use Component Lifecycle Methods such as componentDidMount to grab data

    componentDidMount() {
        axios 
            .get(`${api_url}/inventories`)
            .then((response) => {
                const inventoryData = response.data[0]
                this.setState({
                    inventoriesData: inventoryData
                });
            });
    };

    render() {
        {/*if (!this.state.inventoriesData) {
            return(
                <div>
                    <h1>Loading your content...</h1>
                </div>
            )
        }*/}
        return (
            <div className="main__container">
                <article className="inventories">
                {/*Inventory Header*/}
                    <section className="inventories__head">
                        <h1 className="inventories__head--header">Inventory</h1>
                        <div className="inventories__inputs">
                            <input
                                type="search"
                                className="inventories__inputs--search"
                                placeholder="Search..."
                            />
                            <button className="inventories__inputs--add">
                                + Add New Item
                            </button>
                        </div>
                    </section>
                    {/* Inventory Items */}
                    <div className="title__container">
                        <div className="title__container--group">
                            <h4 className="title__container--title">INVENTORY ITEM</h4>
                                <img 
                                    src={sortIcon}
                                    alt=""
                                />
                        </div>
                        <div className="title__container--group">
                            <h4 className="title__container--title">CATERGORY</h4>
                                <img 
                                        src={sortIcon}
                                        alt=""
                                />
                        </div>
                        <div className="title__container--group">
                            <h4 className="title__container--title">STATUS</h4>
                                <img 
                                        src={sortIcon}
                                        alt=""
                                />
                        </div>
                        <div className="title__container--group">
                            <h4 className="title__container--title">QTY</h4>
                                <img 
                                        src={sortIcon}
                                        alt=""
                                />
                        </div>
                        <div className="title__container--group">
                            <h4 className="title__container--title">WAREHOUSE</h4>
                                <img 
                                        src={sortIcon}
                                        alt=""
                                />
                        </div>
                        <h4 className="title__container--title title__container--action">ACTIONS</h4>
                    </div>
                    {/*Inventory List */}
                    <InventoryItem/>
                </article>
            </div>
        )
    }
}

export default InventoryPage;
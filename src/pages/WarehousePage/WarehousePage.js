import "./WarehousePage.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Trash from "../../assets/images/icons/delete_outline-24px.svg";
import Pen from "../../assets/images/icons/edit-24px.svg";
import Sort from "../../assets/images/icons/sort-24px.svg";
import Chevron from "../../assets/images/icons/chevron_right-24px.svg";

const getApi = 'http://localhost:8080/warehouses'

class WarehousePage extends Component {
  state = {
    warehousesData: [],
  };
  
  componentDidMount() {
    axios.get(getApi)
    .then((result) => {
      console.log(result.data)
      this.setState({
        warehousesData: result.data
      })
    })
  }

  render() {
    if (!this.state.warehousesData) {
      return (
      <section>
            <p>Loading...</p>
          </section>
          )
    }

    return (
      <div className="warehouses">
        <div className="warehouses__title-container-wrapper">
          <div className="warehouses__title-container">
            <h1 className="warehouses__title">Warehouses</h1>
            <div className="warhouses__search-btn-container">
              <input
                type="search"
                name=""
                id=""
                className="warehouses__search-bar"
                placeholder="Search..."
              />
              <button className="warehouses__btn-add">
                + Add New Warehouse
              </button>
            </div>
          </div>
        </div>
        <div className="warehouses__card-wrapper">
          <article className="warehouses__sort-bar warehouses__card">
            <div className="warehouses__city-container">
              <p className="warehouses__alt-text"> WAREHOUSE</p>
              <img src={Sort} alt="" className="warehouses__sort-icon" />
            </div>
            <div className="warehouses__address-container">
              <p className="warehouses__alt-text">ADDRESS</p>
              <img src={Sort} alt="" className="warehouses__sort-icon" />
            </div>
            <div className="warehouses__name-container">
              <p className="warehouses__alt-text">CONTACT NAME</p>
              <img src={Sort} alt="" className="warehouses__sort-icon" />
            </div>
            <div className="warehouses__info-container">
              <p className="warehouses__alt-text">CONTACT INFORMATION</p>
              <img src={Sort} alt="" className="warehouses__sort-icon" />
            </div>
            <div className="warehouses__btn-container">
              <p className="warehouses__alt-text">ACTIONS</p>
            </div>
          </article>
        </div>
        <div className="warehouses__card-wrapper">
          {this.state.warehousesData.map((warehouse) => {
            return (<article className="warehouses__card">
            <div className="warehouses__city-container">
              <Link to={`/warehouse/${warehouse.id}`} className="warehouses__link">
              <p className="warehouses__alt-text--mobile">WAREHOUSE</p>
              <div className="warehouses__chevron-container">
                <p className="warehouses__link warehouses__copy">{warehouse.name}</p>
                <img src={Chevron} alt="" />
              </div>
              </Link>
            </div>
            <div className="warehouses__address-container">
              <p className="warehouses__alt-text--mobile">ADDRESS</p>
              <p className="warehouses__copy">
                {warehouse.address}
                <br className="warehouses__break"/> {warehouse.city}, {warehouse.country}
              </p>
            </div>
            <div className="warehouses__name-container">
              <p className="warehouses__alt-text--mobile">CONTACT NAME</p>
              <p className="warehouses__copy">{warehouse.contact.name}</p>
            </div>
            <div className="warehouses__info-container">
              <p className="warehouses__alt-text--mobile">
                CONTACT INFORMATION
              </p>
              <p className="warehouses__copy">
              {warehouse.contact.phone} <br className="warehouses__break"/>
              {warehouse.contact.email}
              </p>
            </div>
            <div className="warehouses__btn-container">
              <Link to={`/warehouse/${warehouse.id}/delete`}>
              <img src={Trash} alt="" className="warehouses__icon" />
              </Link>
              <Link to={`/warehouse/${warehouse.id}/edit`}>
              <img src={Pen} alt="" className="warehouses__icon" />
              </Link>
            </div>
          </article>)
          })}
          
        </div>
      </div>
    );
  }
}

export default WarehousePage;

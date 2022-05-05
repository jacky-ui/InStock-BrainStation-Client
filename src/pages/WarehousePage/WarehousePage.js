import "./WarehousePage.scss";
import React, { Component } from "react";
import Trash from "../../assets/images/icons/delete_outline-24px.svg";
import Pen from "../../assets/images/icons/edit-24px.svg";
import Sort from "../../assets/images/icons/sort-24px.svg";
import Chevron from "../../assets/images/icons/chevron_right-24px.svg";

class WarehousePage extends Component {
  state = {
    warehousesData: [],
  };
  // A function to fetch Warehouses Data from Warehouses API Route (/warehouses)

  // Below use Component Lifecycle Methods such as componentDidMount to grab data

  render() {
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
          <article className="warehouses__card">
            {/* <div className="warehouses__mobile-helper"> */}
            <div className="warehouses__city-container">
              <p className="warehouses__alt-text--mobile">WAREHOUSE</p>
              <div className="warehouses__chevron-container">
                <p className="warehouses__link warehouses__copy">Manhattan</p>
                <img src={Chevron} alt="" />
              </div>
            </div>
            <div className="warehouses__address-container">
              <p className="warehouses__alt-text--mobile">ADDRESS</p>
              <p className="warehouses__copy">
                503 Broadway,
                <br className="warehouses__break"/> NewYork, USA
              </p>
            </div>
            <div className="warehouses__name-container">
              <p className="warehouses__alt-text--mobile">CONTACT NAME</p>
              <p className="warehouses__copy">Parmin Aujla</p>
            </div>
            <div className="warehouses__info-container">
              <p className="warehouses__alt-text--mobile">
                CONTACT INFORMATION
              </p>
              <p className="warehouses__copy">
                666 666 66 66 <br className="warehouses__break"/>
                asdf@gmail.com
              </p>
            </div>
            {/* </div> */}
            <div className="warehouses__btn-container">
              <img src={Trash} alt="" className="warehouses__icon" />
              <img src={Pen} alt="" className="warehouses__icon" />
            </div>
          </article>
        </div>
        <div className="warehouses__card-wrapper">
          <article className="warehouses__card">
            {/* <div className="warehouses__mobile-helper"> */}
            <div className="warehouses__city-container">
              <p className="warehouses__alt-text--mobile">WAREHOUSE</p>
              <div className="warehouses__chevron-container">
                <p className="warehouses__link warehouses__copy">Manhattan</p>
                <img src={Chevron} alt="" />
              </div>
            </div>
            <div className="warehouses__address-container">
              <p className="warehouses__alt-text--mobile">ADDRESS</p>
              <p className="warehouses__copy">
                503 Broadway,
                <br className="warehouses__break"/> NewYork, USA
              </p>
            </div>
            <div className="warehouses__name-container">
              <p className="warehouses__alt-text--mobile">CONTACT NAME</p>
              <p className="warehouses__copy">Parmin Aujla</p>
            </div>
            <div className="warehouses__info-container">
              <p className="warehouses__alt-text--mobile">
                CONTACT INFORMATION
              </p>
              <p className="warehouses__copy">
                666 666 66 66 <br className="warehouses__break"/>
                asdf@gmail.com
              </p>
            </div>
            {/* </div> */}
            <div className="warehouses__btn-container">
              <img src={Trash} alt="" className="warehouses__icon" />
              <img src={Pen} alt="" className="warehouses__icon" />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default WarehousePage;

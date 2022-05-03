import "./WarehousePage.scss";
import React, { Component } from "react";

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
      </div>
    );
  }
}

export default WarehousePage;

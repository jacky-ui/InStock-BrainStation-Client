import React, { Component } from "react";
import "./AddItem.scss";

class AddItem extends Component {
  render() {
    return (
      <div className="add-item">
        <main className="add-item__main">           
          <div className="add-item__card-wrapper">         
            <article className="add-item__card">
              <h2 className="add-item__section-title">Item Details</h2>
              <form action="" className="add-item__form">
                <label htmlFor="name" className="add-item__form-title">
                  Item Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Item Name"
                  className="add-item__input"
                  required
                />
                <label htmlFor="comment" className="add-item__form-title">
                  Description
                </label>
                <textarea
                  type="text"
                  name="comment"
                  placeholder="Please enter a brief item description..."
                  className="add-item__input add-item__comment"
                  required
                />
                <label htmlFor="category" className="add-item__form-title">
                  Item Name
                </label>
                <select
                  name="category"
                  placeholder="Please select"
                  className="add-item__input add-item__select"
                >
                  {/* <option value="">test</option> */}
                </select>
              </form>
            </article>
            <article className="add-item__card">
              <h2 className="add-item__section-title">Item Availability</h2>
              <form action="" className="add-item__form">
                <label htmlFor="status" className="add-item__form-title">
                  Status
                </label>
                <div className="add-item__radio-wrapper">
                  <div className="add-item__check-wrapper">
                    <input
                      type="radio"
                      name="satus"
                      id="in-stock"
                      value="in-stock"
                    />
                    <label htmlFor="in-stock" className="add-item__radio-text">
                      In Stock
                    </label>
                  </div>
                  <div className="add-item__check-wrapper">
                    <input
                      type="radio"
                      name="satus"
                      id="out-of-stock"
                      value="out-of-stock"
                    />
                    <label htmlFor="in-stock" className="add-item__radio-text">
                      Out of Stock
                    </label>
                  </div>
                </div>

                <label htmlFor="name" className="add-item__form-title">
                  Quantity
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="0"
                  className="add-item__input"
                  required
                />
                <label htmlFor="category" className="add-item__form-title">
                  Warehouse
                </label>
                <select
                  name="category"
                  placeholder="Please select"
                  className="add-item__input add-item__select"
                >
                  {/* <option value="">test</option> */}
                </select>
              </form>
            </article>
          </div>
          <div className="add-item__card-wrapper add-item__button-wrapper">
              <section className="add-item__card add-item__card--buttons">
              <button className="add-item__button add-item__button--cancel">Cancel</button>
              <button className="add-item__button">{this.props.pageButtonInventory}</button>
              </section>
          </div>
        </main>
      </div>
    );
  }
}

export default AddItem;

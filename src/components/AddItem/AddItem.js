import React, { Component } from "react";
import "./AddItem.scss";

class AddItem extends Component {
  
  state = {
    warehouse: '', 
    name: '',
    description: '',
    category: '',
    status: '',
    quantity: ''
  }

  componentDidMount(){
    const item = this.props.itemDetails;
    this.setState({
      warehouse: item.warehouseName, 
      name: item.itemName,
      description: item.description,
      category: item.category,
      status: item.status,
      quantity: item.quantity
    })
  }
    
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    // Axios Call Below [POST] - Add new Warehouse or [PUT] - Edit Warehouse 
  }    

  render() {
    return (
      <div className="add-item">
        <main className="add-item__main">           
          <form action="" className="add-item__card-wrapper">         
            <article className="add-item__card">
              <h2 className="add-item__section-title">Item Details</h2>
              <div className="add-item__form">
                <label htmlFor="name" className="add-item__form-title">
                  Item Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Item Name"
                  className="add-item__input"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="description" className="add-item__form-title">
                  Description
                </label>
                <textarea
                  type="text"
                  name="description"
                  placeholder="Please enter a brief item description..."
                  className="add-item__input add-item__comment"
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="category" className="add-item__form-title">
                  Category
                </label>
                <select
                  name="category"
                  placeholder="Please select"
                  className="add-item__input add-item__select"
                  value={this.state.category}
                  onChange={this.handleChange}
                >
                  <option value="Electronics">Electronics</option>
                   <option value="Gear">Gear</option>
                   <option value="Apparel">Apparel</option>
                   <option value="Accessories">Accessories</option>
                   <option value="Health">Health</option>
                </select>
              </div>
            </article>
            <article className="add-item__card">
              <h2 className="add-item__section-title">Item Availability</h2>
              <div className="add-item__form">
                <label htmlFor="status" className="add-item__form-title">
                  Status
                </label>
                <div className="add-item__radio-wrapper">
                  <div className="add-item__check-wrapper">
                    <input
                      type="radio"
                      name="status"
                      id="in-stock"
                      checked={this.state.status === "In Stock"}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="in-stock" className="add-item__radio-text">
                      In Stock
                    </label>
                  </div>
                  <div className="add-item__check-wrapper">
                    <input
                      type="radio"
                      name="status"
                      id="out-of-stock"
                      checked={this.state.status === "Out of Stock"}
                      onChange={this.handleChange}
                    />
                    <label htmlFor="in-stock" className="add-item__radio-text">
                      Out of Stock
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="name" className="add-item__form-title">
                    Quantity
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="0"
                    className="add-item__input"
                    onChange={this.handleChange}
                    value={this.state.quantity}
                    required
                  />
                </div>
                <label htmlFor="warehouse" className="add-item__form-title">
                  Warehouse
                </label>
                <select
                  name="warehouse"
                  placeholder="Please select"
                  className="add-item__input add-item__select"
                  onChange={this.handleChange}
                  value={this.state.warehouse}
                >
                    <option value="Manhattan">Manhattan</option>
                   <option value="Washington">Washington</option>
                   <option value="Jersey">Jersey</option>
                   <option value="San Fran">San Fran</option>
                   <option value="Santa Monica">Santa Monica</option>
                   <option value="Seattle">Seattle</option>
                   <option value="Miami">Miami</option>
                   <option value="Boston">Boston</option>
                </select>
              </div>
            </article>
            <div className="add-item__card-wrapper add-item__button-wrapper">
              <section className="add-item__card add-item__card--buttons">
              <button className="add-item__button add-item__button--cancel">Cancel</button>
              <button className="add-item__button">{this.props.pageButtonInventory}</button>
              </section>
          </div>
          </form>
        </main>
      </div>
    );
  }
}

export default AddItem;

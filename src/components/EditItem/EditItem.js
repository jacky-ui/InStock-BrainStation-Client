import React, { Component } from "react";
import "./EditItem.scss";
import axios from "axios";
import { api_url } from '../../utils/apiVariables';
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import error from "../../assets/images/icons/error-24px.svg";

class EditItem extends Component {
  
  state = {
    update: '',
    warehouse: '', 
    name: '',
    description: '',
    category: '',
    status: '',
    quantity: '',
    redirect: false
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

  isEmpty = () => {
    const { name, description, quantity } = this.state;
    if ( name || description || quantity === "" ) {
        return true;
    }
    return false;
  }

  isEmptyName = () => {
    const { name } = this.state;
    if ( name === "" ) {
        return false;
    }
    return true;
  }

  isEmptyDescription = () => {
    const { description } = this.state;
    if ( description === "" ) {
        return false;
    }
    return true;
  }

  isEmptyQuantity = () => {
    const { quantity } = this.state;
    if ( quantity === "" ) {
        return false;
    }
    return true;
  }

  isOutofStock = () => {
    if(this.state.status === "Out of Stock") {
      return false;
    }
    return true;
  }
    
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
  };
  
  isQuantityZ = () => {
      this.setState({
        quantity: 0
      })
  }
        
  handleSubmit = (event) => {
    event.preventDefault();
    const itemId = this.props.itemDetails.id;
    const { warehouse, name, description, category, status, quantity } = this.state;
    axios.put(`${api_url}/inventories/${itemId}`, {
        warehouse: warehouse,
        name: name,
        description: description,
        category: category,
        status: status,
        quantity: quantity
    })
    .then(response => {
      this.setState({ update: response.status , redirect:true});
    })
  }    


  render() {
    if(this.state.redirect){
      return (
      <>
        <Redirect to="/inventory"/>
      </>
      )
    }

    return (
          <form onSubmit={this.handleSubmit} type="submit" className="edit-item__card-wrapper">         
            <div className="edit-item__flex">
              <article className="edit-item__card edit-item__card-border">
                <h2 className="edit-item__section-title">Item Details</h2>
                <div className="edit-item__form">
                  <label htmlFor="name" className="edit-item__form-title">
                    Item Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Item Name"
                    className={`edit-item__input ${this.isEmpty ? '' : "edit-item__input--invalid"}`}
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                  <div className={`edit-item__group--hide ${this.isEmptyName() ? '' : "edit-item__group--error"}`}>
                    <img className="edit-item__group--error__icon" src={error} alt=""/>
                    <p className="edit-item__group--error__message">This field is required</p>
                  </div>
                  </label>
                  <label htmlFor="description" className="edit-item__form-title">
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="description"
                    placeholder="Please enter a brief item description..."
                    className={`edit-item__input ${this.isEmpty ? '' : "edit-item__input--invalid"} edit-item__comment`}
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                  />
                  <div className={`edit-item__group--hide ${this.isEmptyDescription() ? '' : "edit-item__group--error"}`}>
                    <img className="edit-item__group--error__icon" src={error} alt=""/>
                    <p className="edit-item__group--error__message">This field is required</p>
                  </div>
                  <label htmlFor="category" className="edit-item__form-title">
                    Category
                  </label>
                  <select
                    name="category"
                    placeholder="Please select"
                    className="edit-item__input edit-item__select"
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
              <article className="edit-item__card">
                <h2 className="edit-item__section-title">Item Availability</h2>
                <div className="edit-item__form">
                  <label htmlFor="status" className="edit-item__form-title">
                    Status
                  </label>
                  <div className="edit-item__radio-wrapper">
                    <div className="edit-item__check-wrapper">
                      <input
                        type="radio"
                        name="status"
                        value="In Stock"
                        className="edit-item__on-click"
                        checked={this.state.status === "In Stock"}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="in-stock" className="edit-item__radio-text">
                        In Stock
                      </label>
                    </div>
                    <div className="edit-item__check-wrapper">
                      <input
                        type="radio"
                        name="status"
                        value="Out of Stock"
                        className="edit-item__on-click"
                        checked={this.state.status === "Out of Stock"}
                        onChange={this.handleChange}
                        onClick={this.isQuantityZ}
                      />
                      <label htmlFor="in-stock" className="edit-item__radio-text">
                        Out of Stock
                      </label>
                    </div>
                  </div>
                  <div className={`${this.isOutofStock() ? "" : "edit-item__hide"}`}>
                    <label htmlFor="name" className="edit-item__form-title">
                      Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="0"
                      className={`edit-item__input ${this.isEmpty ? '' : "edit-item__input--invalid"}`}
                      onChange={this.handleChange}
                      value={this.state.quantity}
                      required
                    />
                    <div className={`edit-item__group--hide ${this.isEmptyQuantity() ? '' : "edit-item__group--error"}`}>
                    <img className="edit-item__group--error__icon" src={error} alt=""/>
                    <p className="edit-item__group--error__message">This field is required</p>
                  </div>
                  </div>
                  <label htmlFor="warehouse" className="edit-item__form-title">
                    Warehouse
                  </label>
                  <select
                    name="warehouse"
                    placeholder="Please select"
                    className="edit-item__input edit-item__select"
                    onChange={this.handleChange}
                    value={this.state.warehouse}>  
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
            </div>
            <div className="edit-item__button-wrapper">
              <section className="edit-item__card edit-item__card--buttons">
                <Link className="edit-item__link" to='/inventory'>
                  <button className="edit-item__button edit-item__button--cancel">Cancel</button>
                </Link>
                <button className="edit-item__button edit-item__button--save">{this.props.pageButtonInventory}</button>
              </section>
            </div>
          </form>
    );
  }
}

export default EditItem;

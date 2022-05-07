import "./WarehouseForm.scss";
import React, { Component } from "react";
import axios from "axios";

const putApi = 'http://localhost:8080/warehouses'

class WarehouseForm extends Component {
  state = {
    name: "",
    address: "",
    city: "",
    country: "",
    contactName: "",
    contactPosition: "",
    contactPhone: "",
    contactEmail: "",
  };

  componentDidMount() {
    const warehouse = this.props.warehouseDetails;
    const contact = this.props.contactDetails;
    this.setState({
      name: warehouse.name,
      address: warehouse.address,
      city: warehouse.city,
      country: warehouse.country,
      contactName: contact.name,
      contactPosition: contact.position,
      contactPhone: contact.phone,
      contactEmail: contact.email,
    });
  }

  ifStateValid = () => {};

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Axios Call Below [POST] - Add new Warehouse or [PUT] - Edit Warehouse
    // axios
    //   .post(putApi, {
    //     title: event.target.title.value.value,
    //     description: event.target.comment.value.value,
    //     name: event.target.name.value, 
    //     address: event.target.address.value,
    //     city: event.target.city.value,
    //     country: event.target.country.value,
    //     contact: {
    //         name: event.target.contactName.value,
    //         position: event.target.contactPosition.value, 
    //         phone: event.target.contactPhone.value,
    //         email: event.target.contactEmail.value
    //     }
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     console.log("yay");
    //   });

    // event.target.reset();
  };

    handleSubmit = (event) => {
        event.preventDefault();
        // Axios Call Below [POST] - Add new Warehouse or [PUT] - Edit Warehouse
         

    }    
    
    render() {
        return (
            <section className='form'>
                <form className='form-field'>
                    <div className='form-left'>
                        <h2 className='form__title'>Warehouse Details</h2>
                        <div className='form__group'>
                            <label className='form__label'>Warehouse Name</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="name"
                                placeholder="Warehouse Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Street Address</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="address"
                                placeholder="Street Address"
                                value={this.state.address}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>City</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="city"
                                placeholder="City"
                                value={this.state.city}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Country</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={this.state.country}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                    </div>
                    <div className='form-right'>
                        <h2 className='form__title'>Contact Details</h2>
                        <div className='form__group'>
                            <label className='form__label'>Contact Name</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="contactName"
                                placeholder="Contact Name"
                                value={this.state.contactName}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Position</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="contactPosition"
                                placeholder="Position"
                                value={this.state.contactPosition}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Phone Number</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="contactPhone"
                                placeholder="Phone Number"
                                value={this.state.contactPhone}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Email</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="contactEmail"
                                placeholder="Email"
                                value={this.state.contactEmail}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                    </div>
                    <div className='form-btns'>
                        <button className='form__cancel'>Cancel</button>
                        <button className='form__save'>{this.props.button}</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default WarehouseForm;

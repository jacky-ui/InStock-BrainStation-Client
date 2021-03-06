import "./WarehouseForm.scss";
import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { api_url } from '../../utils/apiVariables';
import error from '../../assets/images/icons/error-24px.svg';

class WarehouseForm extends Component {
    state = {
        update: "",
        name: "",
        address: "",
        city: "",
        country: "",
        contactName: "",
        contactPosition: "",
        contactPhone: "",
        contactEmail: "",
        put: null,
        post: null, 
        redirect: false
    };

    componentDidMount() {
        const warehouse = this.props.warehouseDetails;
        const contact = this.props.contactDetails;
        const { put, post } = this.props;
        this.setState({
            name: warehouse.name,
            address: warehouse.address,
            city: warehouse.city,
            country: warehouse.country,
            contactName: contact.name,
            contactPosition: contact.position,
            contactPhone: contact.phone,
            contactEmail: contact.email,
            put,
            post
        });
    }

    // Empty String Validation 
    isEmpty = () => {
        const { name, address, city, country, contactName, contactPosition } = this.state;
        if ( name || address || city || country || contactName || contactPosition === "" ) {
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

    isEmptyAddress = () => {
        const { address } = this.state;
        if ( address === "" ) {
            return false;
        }
        return true;
    }

    isEmptyCity = () => {
        const { city } = this.state;
        if ( city === "" ) {
            return false;
        }
        return true;
    }

    isEmptyCountry = () => {
        const { country } = this.state;
        if ( country === "" ) {
            return false;
        }
        return true;
    }

    isEmptyContactName = () => {
        const { contactName } = this.state;
        if ( contactName === "" ) {
            return false;
        }
        return true;
    }

    isEmptyContactPosition = () => {
        const { contactPosition } = this.state;
        if ( contactPosition === "" ) {
            return false;
        }
        return true;
    }


    // Phone Number Validation
    isPhoneValid = () => {
        const phoneValidation = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        if (phoneValidation.test(this.state.contactPhone)) {
            return true;
        }
        return false;
    }

    // Email Validation 
    isEmailValid = () => {
        const emailValidation = /^\S+@\S+\.\S+$/;
        if (emailValidation.test(this.state.contactEmail)){
            return false;
        }
        return true;
    }

    // Form Valid for Disabled Button Submit
    isFormValid = () => {
        if (!this.isPhoneValid()) {
            return false;
        }
        if (this.isEmailValid()) {
            return false;
        }
        return true;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    // Handles [POST] Axios Requests
    handlePost = (event) => {
        event.preventDefault();
        const { name, address, city, country, contactName, contactPosition, contactPhone, contactEmail } = this.state;
        axios.post(`${api_url}/warehouses`, {
            name,
            address,
            city,
            country,
            contactName,
            contactPosition,
            contactPhone,
            contactEmail
        })
        .then((response) => {
            this.setState({ update: response.status, redirect: true });            console.log("yay");
        });
        // event.target.reset();
    };

    // Handles [PUT] Axios Requests
    handlePut = (event) => {
        event.preventDefault();
        const warehouseId = this.props.warehouseDetails.id;
        const { name, address, city, country, contactName, contactPosition, contactPhone, contactEmail } = this.state;
        axios.put(`${api_url}/warehouses/${warehouseId}`, {
            name,
            address,
            city,
            country,
            contactName,
            contactPosition,
            contactPhone,
            contactEmail
        })
        .then(response => {
            this.setState({ update: response.status, redirect: true });
        })
    }

    // Determines which axios request is being made
    handleSubmit = (event) => {
        if (this.state.put === true) {this.handlePut(event)} 
        else {this.handlePost(event)}
    }

    render() {
        if (this.state.redirect === true) {
            return(
                <>
                    <Redirect to="/" />
                </>
            )
        }
        return (
            <section className='form'>
                <form className='form-field' onSubmit={this.handleSubmit}>
                    <div className='form-left'>
                        <h2 className='form__title'>Warehouse Details</h2>
                        <div className='form__group'>
                            <label className='form__label'>Warehouse Name</label>
                            <input
                                className={`form__input ${this.isEmpty ? '' : "form__input--invalid"}`}
                                type="text"
                                name="name"
                                placeholder="Warehouse Name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                            <div className={`form__group--hide ${this.isEmptyName() ? '' : "form__group--error"}`}>
                                <img className="form__group--error__icon" src={error} alt=""/>
                                <p className="form__group--error__message">This field is required</p>
                            </div>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Street Address</label>
                            <input
                                className={`form__input ${this.isEmpty ? '' : "form__input--invalid"}`}
                                type="text"
                                name="address"
                                placeholder="Street Address"
                                value={this.state.address}
                                onChange={this.handleChange}
                                required
                            />
                            <div className={`form__group--hide ${this.isEmptyAddress() ? '' : "form__group--error"}`}>
                                <img className="form__group--error__icon" src={error} alt=""/>
                                <p className="form__group--error__message">This field is required</p>
                            </div>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>City</label>
                            <input
                                className={`form__input ${this.isEmpty ? '' : "form__input--invalid"}`}
                                type="text"
                                name="city"
                                placeholder="City"
                                value={this.state.city}
                                onChange={this.handleChange}
                                required
                            />
                            <div className={`form__group--hide ${this.isEmptyCity() ? '' : "form__group--error"}`}>
                                <img className="form__group--error__icon" src={error} alt=""/>
                                <p className="form__group--error__message">This field is required</p>
                            </div>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Country</label>
                            <input
                                className={`form__input ${this.isEmpty ? '' : "form__input--invalid"}`}
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={this.state.country}
                                onChange={this.handleChange}
                                required
                            />
                            <div className={`form__group--hide ${this.isEmptyCountry() ? '' : "form__group--error"}`}>
                                <img className="form__group--error__icon" src={error} alt=""/>
                                <p className="form__group--error__message">This field is required</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-right'>
                        <h2 className='form__title'>Contact Details</h2>
                        <div className='form__group'>
                            <label className='form__label'>Contact Name</label>
                            <input
                                className={`form__input ${this.isEmpty ? '' : "form__input--invalid"}`}
                                type="text"
                                name="contactName"
                                placeholder="Contact Name"
                                value={this.state.contactName}
                                onChange={this.handleChange}
                                required
                            />
                            <div className={`form__group--hide ${this.isEmptyContactName() ? '' : "form__group--error"}`}>
                                <img className="form__group--error__icon" src={error} alt=""/>
                                <p className="form__group--error__message">This field is required</p>
                            </div>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Position</label>
                            <input
                                className={`form__input ${this.isEmpty() ? '' : "form__input--invalid"}`}
                                type="text"
                                name="contactPosition"
                                placeholder="Position"
                                value={this.state.contactPosition}
                                onChange={this.handleChange}
                                required
                            />
                            <div className={`form__group--hide ${this.isEmptyContactPosition() ? '' : "form__group--error"}`}>
                                <img className="form__group--error__icon" src={error} alt=""/>
                                <p className="form__group--error__message">This field is required</p>
                            </div>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Phone Number</label>
                            <input
                                className={`form__input ${this.isPhoneValid() ? '' : "form__input--invalid"}`}
                                type="text"
                                name="contactPhone"
                                placeholder="Phone Number Ex: +1 (614) 123-1234"
                                value={this.state.contactPhone}
                                onChange={this.handleChange}
                                required
                            />
                            <div className={`form__group--hide ${this.isPhoneValid() ? '' : "form__group--error"}`}>
                                <img className="form__group--error__icon" src={error} alt=""/>
                                <p className="form__group--error__message">This field is required</p>
                            </div>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Email</label>
                            <input
                                className={`form__input ${!this.isEmailValid() ? '' : "form__input--invalid"}`}
                                type="text"
                                name="contactEmail"
                                placeholder="Email"
                                value={this.state.contactEmail}
                                onChange={this.handleChange}
                                required
                            />
                            <div className={`form__group--hide 
                            ${!this.isEmailValid() ? '' : "form__group--error"}`}>
                                <img className="form__group--error__icon" src={error} alt=""/>
                                <p className="form__group--error__message">This field is required</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-btns'>
                        <Link  to="/" className="form-btns__left">
                            <button className='form__cancel'>Cancel</button>
                        </Link>
                        <div className="form-btns__right">
                            <button disabled={!this.isFormValid()} className='form__save' type="submit">{this.props.button}</button>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default WarehouseForm;

import './WarehouseForm.scss';
import React, { Component } from 'react';

class WarehouseForm extends Component {
    state = {
        name: '',
        address: '',
        city: '',
        country: '',
        contactName: '',
        contactPosition: '',
        contactPhone: '',
        contactEmail: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // axios call goes here either PUT/POST 
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
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Street Address</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="address"
                                placeholder="Street Address"
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>City</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="city"
                                placeholder="City"
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Country</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="country"
                                placeholder="Country"
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
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Position</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="contactPosition"
                                placeholder="Position"
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Phone Number</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="contactPhone"
                                placeholder="Phone Number"
                            ></input>
                        </div>
                        <div className='form__group'>
                            <label className='form__label'>Email</label>
                            <input 
                                className='form__input'
                                type="text"
                                name="contactEmail"
                                placeholder="Email"
                            ></input>
                        </div>
                    </div>
                    <div className='form-btns'>
                        <button className='form__cancel'>Cancel</button>
                        <button className='form__save'>Save</button>
                    </div>
                </form>
            </section>
        );
    }
}

export default WarehouseForm;
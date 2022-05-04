import './WarehouseForm.scss';
import React from 'react';

function WarehouseForm({ warehouse }) {
    return (
        <section className='form'>
            <form>
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

                </div>
            </form>
        </section>
    );
}

export default WarehouseForm;
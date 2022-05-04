import './WarehouseForm.scss';
import React from 'react';

function WarehouseForm({ warehouse }) {
    return (
        <section className='form'>
            <form>
                <div className='form-left'>
                    <h2 className='form__title'>Warehouse Details</h2>
                    <label>
                        Warehouse Name
                        <input 
                        type="text"
                        name="name"
                        ></input>
                    </label>
                    <label>
                        Street Address
                        <input 
                        type="text"
                        name="address"
                        ></input>
                    </label>
                    <label>
                        City
                        <input 
                        type="text"
                        name="city"
                        ></input>
                    </label>
                    <label>
                        Country
                        <input 
                        type="text"
                        name="country"
                        ></input>
                    </label>
                </div>
                <div className='form-right'>
                    <h2 className='form__title'>Contact Details</h2>
                    <label>
                        Contact Name
                        <input 
                        type="text"
                        name="contactName"
                        ></input>
                    </label>
                    <label>
                        Position
                        <input 
                        type="text"
                        name="contactPosition"
                        ></input>
                    </label>
                    <label>
                        Phone Number
                        <input 
                        type="text"
                        name="contactPhone"
                        ></input>
                    </label>
                    <label>
                        Email
                        <input 
                        type="text"
                        name="contactEmail"
                        ></input>
                    </label>
                </div>
                <div className='form-btns'>

                </div>
            </form>
        </section>
    );
}

export default WarehouseForm;
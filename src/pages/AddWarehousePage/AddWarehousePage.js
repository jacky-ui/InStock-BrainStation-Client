import './AddWarehousePage.scss';
import React, { Component } from 'react';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';

class AddWarehousePage extends Component {
    state = {
        pageTitle: "Add Warehouse",
        button:"+ Add Warehouse",
        warehouseDetails: {
            name: "",
            address: "",
            city: "",
            country: ""
        },
        contactDetails: {
            name: '',
            position: '',
            phone: '',
            email: ''
        }, 
        put: false,
        post: true
    };

    render() {
        return(
            <main className='editWarehouse'>
                <div className='editWarehouse-wrapper'>
                    <PageSubHeader 
                        pageTitle={this.state.pageTitle}
                        />
                    <WarehouseForm 
                        warehouseDetails={this.state.warehouseDetails}
                        contactDetails={this.state.contactDetails}
                        button={this.state.button}
                        put={this.state.put}
                        post={this.state.post}
                        />
                </div>
            </main>
        );
    }
}

export default AddWarehousePage;


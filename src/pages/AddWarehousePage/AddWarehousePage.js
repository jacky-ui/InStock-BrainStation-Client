import './AddWarehousePage.scss';
import React, { Component } from 'react';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import axios from 'axios';
import { api_url } from '../../utils/apiVariables';

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
        }
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
                        />
                </div>
            </main>
        );
    }
}

export default AddWarehousePage;


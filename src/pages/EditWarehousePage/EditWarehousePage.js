import './EditWarehousePage.scss';
import React, { Component } from 'react';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import axios from 'axios';
import { api_url } from '../../utils/apiVariables';

class EditWarehousePage extends Component {
    state = {
        pageTitle: "Edit Warehouse",
        button: "Save",
        warehouseDetails: null,
        contactDetails: null,
        update: ''
    };

    componentDidMount() {
        const warehouseId = this.props.match.params.warehouseId;
        axios
            .get(`${api_url}/warehouses/${warehouseId}`)
            .then(res => {
                this.setState({
                    warehouseDetails: res.data,
                    contactDetails: res.data.contact
                });
            })
    }
    //  async onSubmit() {
    //     const warehouseId = this.state.warehouseDetails.id
    //     let data = await axios.put(`${api_url}/warehouses/${warehouseId}`)
    //     .then(response => {
    //         this.setState({ update: response.status });
    //     })  
    //     return data;
    // }

    render() {
        if (!this.state.contactDetails) {
            return(
                <div>
                    <h1>Page is loading...</h1>
                </div>
            )
        }
        return(
            <main className='editWarehouse'>
                <div className='editWarehouse-wrapper'>
                    <PageSubHeader 
                        pageTitle={this.state.pageTitle}/>
                    <WarehouseForm 
                        warehouseDetails={this.state.warehouseDetails}
                        contactDetails={this.state.contactDetails}
                        button={this.state.button}
                        submit={this.onSubmit}/>
                </div>
            </main>
        );
    }
}

export default EditWarehousePage;
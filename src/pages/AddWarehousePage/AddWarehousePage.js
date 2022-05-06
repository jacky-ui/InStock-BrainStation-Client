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

    // componentDidMount() {
    //     const warehouseId = this.props.match.params.warehouseId;
    //     axios
    //         .get(`${api_url}/warehouses/${warehouseId}`)
    //         .then(res => {
    //             this.setState({
    //                 warehouseDetails: res.data,
    //                 contactDetails: res.data.contact
    //             });
    //         })
    // }

    render() {
        // if (!this.state.contactDetails) {
        //     return(
        //         <div>
        //             <h1>Page is loading...</h1>
        //         </div>
        //     )
        // }
        return(
            <main>
                <PageSubHeader 
                    pageTitle={this.state.pageTitle}
                    />
                <WarehouseForm 
                    warehouseDetails={this.state.warehouseDetails}
                    contactDetails={this.state.contactDetails}
                    button={this.state.button}
                    />
            </main>
        );
    }
}

export default AddWarehousePage;


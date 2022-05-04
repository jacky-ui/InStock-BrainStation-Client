import './EditWarehousePage';
import React, { Component } from 'react';
import axios from 'axios';

class EditWarehousePage extends Component {
    state = {
        name: null, 
        address: null,
        city: null, 
        country: null,
        contactName: null, 
        contactPosition: null,
        contactPhone: null,
        contactEmail: null
    }

    componentDidMount() {
        axios.get()
    }


    render() {
        return(
            <main>

            </main>
        );
    }
}

export default EditWarehousePage;
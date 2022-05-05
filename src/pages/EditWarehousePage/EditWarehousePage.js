import './EditWarehousePage.scss';
import React, { Component } from 'react';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';
import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';

class EditWarehousePage extends Component {
    state = {
        pageTitle: "Edit Warehouse"

    };
    

    render() {
        return(
            <main>
                <PageSubHeader pageTitle={this.state.pageTitle}/>
                <WarehouseForm />
            </main>
        );
    }
}

export default EditWarehousePage;
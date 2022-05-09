import React, { Component } from 'react';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';
import AddItem from '../../components/AddItem/AddItem';
import './AddInventoryPage.scss'


class AddInventoryPage extends Component {

    state = {
        title: "Add New Inventory Item",
        button: "+ Add Item",
    };



    render() {
        

        return (
            <main className='editWarehouse'>
                <div className='editWarehouse-wrapper'>
                <PageSubHeader
                    pageTitle={this.state.title}
                    />
                <AddItem 
                    pageButtonInventory={this.state.button}
                    />
                </div>
            </main>
        );
    }
}

export default AddInventoryPage;
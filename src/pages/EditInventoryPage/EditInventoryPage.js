import React, { Component } from 'react';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';
import AddItem from '../../components/AddItem/AddItem';
import './EditInventoryPage.scss'

class EditInventoryPage extends Component {

    state = {
        title: "Edit Inventory Item",
        button: "Save"
    };

    render() {
        return (
            <div>
                <PageSubHeader
                    pageTitleInventory={this.state.title}
                    />
                <AddItem 
                    pageButtonInventory={this.state.button}
                    />
            </div>
        );
    }
}

export default EditInventoryPage;
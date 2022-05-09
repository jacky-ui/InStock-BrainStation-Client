import React, { Component } from 'react';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';
import EditItem from '../../components/EditItem/EditItem';
import './EditInventoryPage.scss'
import axios from 'axios';
import { api_url } from '../../utils/apiVariables';

class EditInventoryPage extends Component {

    state = {
        title: "Edit Inventory Item",
        button: "Save",
        itemDetails: null
    };

    componentDidMount(){
        const itemId = this.props.match.params.itemId;
        axios
        .get(`${api_url}/inventories/${itemId}`)
        .then(res => {
            this.setState({
                itemDetails: res.data
            });
        })
    }


    render() {
        if (!this.state.itemDetails) {
            return(
                <div>
                    <h1>Page is loading...</h1>
                </div>
            )
        }
        return (
            <main className='editWarehouse'>
                <div className='editWarehouse-wrapper'>
                <PageSubHeader
                    pageTitleInventory={this.state.title}
                    />
                <EditItem 
                    pageButtonInventory={this.state.button}
                    itemDetails={this.state.itemDetails}
                    />
                </div>
            </main>

        );
    }
}

export default EditInventoryPage;
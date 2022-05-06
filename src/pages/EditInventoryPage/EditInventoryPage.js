import React, { Component } from 'react';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';
import AddItem from '../../components/AddItem/AddItem';
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
            <div>
                <PageSubHeader
                    pageTitleInventory={this.state.title}
                    />
                <AddItem 
                    pageButtonInventory={this.state.button}
                    itemDetails={this.state.itemDetails}
                    />
            </div>
        );
    }
}

export default EditInventoryPage;
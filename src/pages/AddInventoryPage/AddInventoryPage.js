import React, { Component } from 'react';
import PageSubHeader from '../../components/PageSubHeader/PageSubHeader';
import AddItem from '../../components/AddItem/AddItem';
import './AddInventoryPage.scss'
import axios from 'axios';
import { api_url } from '../../utils/apiVariables';

class AddInventoryPage extends Component {

    state = {
        title: "Add New Inventory Item",
        button: "+ Add Item",
        // itemDetails: null
    };

    // componentDidMount(){
    //     const itemId = this.props.match.params.itemId;
    //     axios
    //     .get(`${api_url}/inventories/${itemId}`)
    //     .then(res => {
    //         this.setState({
    //             itemDetails: res.data
    //         });
    //     })
    // }


    render() {
        // if (!this.state.itemDetails) {
        //     return(
        //         <div>
        //             <h1>Page is loading...</h1>
        //         </div>
        //     )
        // }
        return (
            <div>
                <PageSubHeader
                    pageTitle={this.state.title}
                    />
                <AddItem 
                    pageButtonInventory={this.state.button}
                    // itemDetails={this.state.itemDetails}
                    />
            </div>
        );
    }
}

export default AddInventoryPage;
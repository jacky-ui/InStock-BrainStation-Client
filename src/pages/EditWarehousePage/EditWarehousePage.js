import './EditWarehousePage';
import React, { Component } from 'react';
import { PageSubHeader } from '../../components/PageSubHeader/PageSubHeader';

class EditWarehousePage extends Component {
    state = {
        pageTitle: "Edit Warehouse",

    }


    render() {
        return(
            <main>
                <PageSubHeader pageTitle={this.state.pageTitle}/>
            </main>
        );
    }
}

export default EditWarehousePage;
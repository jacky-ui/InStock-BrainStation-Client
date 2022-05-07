import React, { Component } from 'react';
import './DeleteWarehouse.scss'
import Popup from 'reactjs-popup';
import Trash from '../../assets/images/icons/delete_outline-24px.svg'
import axios from 'axios';
import { api_url } from '../../utils/apiVariables';

class DeleteWarehouse extends Component {
    refreshPage = () => {
        window.location.reload();
    }

    deleteWarehouse = () => {
        axios
          .delete(`${api_url}/warehouses/${this.props.warehouseId}` )
          .then((response)=>{
            this.refreshPage();
          })
    }

    render() {
        return (
            <Popup trigger={<input type="image" name="trashBin" src={Trash} alt="text"></input>} modal nested>
            {close => (
                <div className="popup">
                    <button className="popup__close" onClick={close}>&times;</button>
                    <div className="popup__text">
                        <h1 className="popup__title"> Delete {this.props.name} warehouse? </h1>
                        <p className="popup__content">Please confirm that you’d like to delete the {this.props.name} from the list of warehouses. You won’t be able to undo this action.</p>
                    </div>
                    <div className="popup__actions">
                    <button className="popup__button-cancel" onClick={() => {close()}}>Cancel</button>
                    <button className="popup__button-delete" onClick={this.deleteWarehouse}>Delete</button>
                    </div>
                </div>
                )}
            </Popup>
        );
    }
};

export default DeleteWarehouse;
import React, { Component } from 'react';
import './DeleteInventory.scss'
import Popup from 'reactjs-popup';
import TrashIcon from '../../assets/images/icons/delete_outline-24px.svg'
import axios from 'axios';

class DeleteInventory extends Component {

    // state = {
    //     warehouse: [],
    // }

    // componentDidMount() {
    //     axios
    //       .get(`http://localhost:8080/warehouses`)
    //       .then((response)=>{
    
    //         this.setState({
    //             warehouse: response.data
    //         })
    //       })
    //   }
    
    deleteWarehouse = (event) => {
        const warehouseId = event.target.getAttribute('data')
        axios
          .delete(`http://localhost:8080/warehouses/${warehouseId}` )
          .then((response)=>{
    
            this.setState({
                warehouse: response.data
            })
          })
    }


    // Will be used in the button to target an specify warehouse
    // data={warehouse.id}

    render(){
        return (
            <Popup trigger={<input type="image" name="trashBin" src={TrashIcon} alt="text"></input>} modal nested>
            {close => (
            <div className="popup">
                <button className="popup__close" onClick={close}>&times;</button>
                <div className="popup__text">
                    <h1 className="popup__title"> Delete Washington warehouse? </h1>
                    <p className="popup__content">Please confirm that you’d like to delete the Washington from the list of warehouses. You won’t be able to undo this action.</p>
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

export default DeleteInventory;
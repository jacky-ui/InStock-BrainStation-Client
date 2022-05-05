import "./ItemDetailsPage.scss"
import { Component } from 'react';
import { Link } from "react-router-dom";
import editIconWhite from "../../assets/images/icons/edit-24px(2).svg";
import previousIcon from "../../assets/images/icons/arrow_back-24px.svg";
import axios from "axios";

class ItemDetailsPage extends Component {

state = {
    item: {},
}

componentDidMount(){
    const singleItem = this.props.match.params.itemId
    axios
        .get(`http://localhost:8080/inventories/${singleItem}`)
        .then(result => {
            console.log(result)
            this.setState({
                item: result.data,
            })
        })
}

render() {
    return (
        <div className="main-container">
            <article className="subheader">
            {/*Warehouse heading*/}
                <section className="subheader__head">
                    <Link className="subheader__link" to="/inventory">
                        <img alt="previous" className="subheader__previous" src={previousIcon}/>
                    </Link>
                    <h1 className="subheader__head--title">{this.state.item.itemName}</h1>
                    <Link className="subheader__link" to="/inventory/:itemId/edit">
                        <div className="subheader__head--circle">
                            <img alt="edit" className="subheader__edit" src={editIconWhite}/>
                            <span className="subheader__edit--text">EDIT</span>
                        </div>
                    </Link>
                </section>
                <section className="details">
                    <div className="details__box-1">
                        <div className="details__tab">
                            <h3 className="details__title">ITEM DESCRIPTION:</h3>
                            <p className="details__text">{this.state.item.description}</p>
                        </div>
                        <div className="details__tab">
                            <h3 className="details__title">CATEGORY:</h3>
                            <p className="details__text">{this.state.item.category}</p>
                        </div>
                    </div>
                    <div className="details__box-2">
                        <div className="details__flex">
                            <div className="details__tab--space">
                                <h3 className="details__title">STATUS:</h3>
                                <p className='details__status'>{this.state.item.status}</p>
                            </div>
                            <div className="details__tab">
                                <h3 className="details__title">QUANTITY:</h3>
                                <p className="details__text">{this.state.item.quantity}</p>
                            </div>
                        </div>
                        <div className="details__tab">
                            <h3 className="details__title">WAREHOUSE:</h3>
                            <p className="details__text">{this.state.item.warehouseName}</p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}
};

export default ItemDetailsPage;
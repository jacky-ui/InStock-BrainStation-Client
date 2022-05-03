import './WarehouseIndividual.scss';
import editIcon from "../../assets/images/icons/edit-24px.svg";
import previousIcon from "../../assets/images/icons/arrow_back-24px.svg";

function WarehouseIndividual() {
    return(
        <article className="container">
        {/*Warehouse heading*/}
            <section className="container__head">
                <img
                    className="icon__previous" 
                    src={previousIcon}
                />
                <h1 className="container__head--title">Washington</h1>
                <div className="container__head--circle">
                    <img
                        className="icon__edit" 
                        src={editIcon}
                    />
                    <span className="icon__edit--text">EDIT</span>
                </div>
            </section>

            {/*Warehouse Address */}
            <section className="container__address">
                <div>
                    <span className="container__address--title">WAREHOUSE ADDRESS</span><br/>
                    <span className="container__address--address">33 Pearl Street SW, Washington, USA</span>
                </div>

                <section className="contact">
                    <div className="contact__container">
                        <span className="contact__container--head">CONTACT NAME:</span>
                        <span className="contact__container--text">Graeme Lyon</span>
                        <span className="contact__container--text">Warehouse Manager</span>
                    </div>
                    <div className="contact__container">
                        <span className="contact__container--head">CONTACT INFORMATION:</span>
                        <a className="contact__container--link" href='tel:+1647-504-0911'>+1 (647) 504-0911</a>
                        <a className="contact__container--link" href="mailto:glyon@instock.com">gylon@instock.com</a>
                    </div>
                </section>
            </section>

            {/*Warehouse Inventory*/}
            <section>
                
            </section>
        </article>
    )
};

export default WarehouseIndividual;
import './WarehouseIndividual.scss';
import editIcon from "../../assets/images/icons/edit-24px.svg";
import previousIcon from "../../assets/images/icons/arrow_back-24px.svg";

function WarehouseIndividual() {
    return(
        <article className="container">
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
                </div>
            </section>

            <section className="container__address">
                <span className="container__address--title">WAREHOUSE ADDRESS</span><br/>
                <span className="container__address--address">33 Pearl Street SW, Washington, USA</span>
            </section>
        </article>
    )
};

export default WarehouseIndividual;
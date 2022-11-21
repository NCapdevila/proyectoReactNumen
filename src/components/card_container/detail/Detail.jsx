
import ButtonFooter from "../../Footer/Buttons/Button";
import "./DetailStyle.css"


const Detail = (props) => {

      return (
            <div className="DetailContainer">
                  <p className="DetailBrand">{props.sale.brand}</p>

                  <p className="DetailSize">{props.sale.size}</p>
                  <div className="Absolute">
                        <ButtonFooter text="Comprar" />
                  </div>

                  {(props.sale.offer) ? <p className="DetailPrice">$ {Math.round((props.sale.price) - (props.sale.price * props.sale.offerNumber / 100))} <span> {props.sale.offerNumber}% Off</span><p className="DetailOffer">$ {props.sale.price}</p></p> : <p className="DetailPrice">$ {props.sale.price} </p>}

            </div>
      );
}

export default Detail;
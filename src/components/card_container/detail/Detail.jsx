
import ModalIndex from "../../modal/ModalIndex";
import "./DetailStyle.css"


const Detail = (props) => {
  return (
    <div className="DetailContainer">
      <p className="DetailBrand">{props.sale.brand}</p>

      <div className="Absolute">
        <ModalIndex products={props.sale}  agregaritems={props.agregaritems}/>
      </div>

      {(props.sale.offer) ?
        <div>
          <p className="DetailPrice">
            $ {Math.round((props.sale.price) - (props.sale.price * props.sale.offerNumber / 100))}
            <span> {props.sale.offerNumber}% Off</span>
          </p>
          <p className="DetailOffer">$ {props.sale.price}</p>
        </div>
        :
        <p className="DetailPrice">$ {props.sale.price} </p>
      }

    </div>
  );
}

export default Detail;
import ImageCardLogo from './ImageCardLogo';
import './ImageCardStyle.css'

const ImageCard = (props) => {

      return (
            <div className='ImageCardContainer'>
                  <img src={`../images/${props.sale.imageRoot}.jpg`} className='ImageCard' alt="Ropa de Marca" ></img>
                  {(props.sale.offer) ? <ImageCardLogo /> : ""}

            </div >

      )

}

export default ImageCard;
import Detail from '../detail/Detail';
import ImageCard from '../img/ImageCard';
import Logo from '../logo/Logo';
import './CardStyle.css';

function Card(props) {

  return (
    <div className='CardStyle'>
      <Logo user={props.sale.user} />
      <ImageCard sale={props.sale} />
      <Detail sale={props.sale} />

    </div>
  )
}

export default Card;
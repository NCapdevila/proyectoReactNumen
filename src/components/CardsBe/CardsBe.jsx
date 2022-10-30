import Card from 'react-bootstrap/Card';
import './CardsBe.css';
/*import {BsFillPersonFill} from "react-icons/fc";*/

function CardsBe() {
  return (
    <div className='containerCard'>
    <Card className='card'>
    <Card.Img  src='./replantar' />
      <Card.Body>
        <Card.Title className='cardTitle'>Inventario en movimiento</Card.Title>
        <Card.Text className='cardtext'>
          Somos un sistema de rotación circular de prendas todos los dias recibimos y listamos productos para que puedas comprar tus favoritos.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='card'>
    <Card.Img  src="./replantar.png" />
      <Card.Body>
        <Card.Title className='cardTitle'>Controles de calidad</Card.Title>
        <Card.Text className='cardtext'>
        Verificamos cada pieza, asegurándonos que esté en perfectas condiciones y además te damos la oportunidad de devolverlo si no era lo que esperabas.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='card'>
    <Card.Img  src="./replantar.png" />
      <Card.Body>
        <Card.Title className='cardTitle'>Compromiso sustentable</Card.Title>
        <Card.Text className='cardtext'>
          Somos un sistema de rotación circular de prendas todos los dias recibimos y listamos productos para que puedas comprar tus favoritos.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardsBe;
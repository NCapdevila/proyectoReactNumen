import Card from 'react-bootstrap/Card';
import './CardsBe.css';
import reciclar from './recycling.png';
import replantar from './replantar.png';
import lista from './listaverifi.png';
import ahorrar from './ahorrar.png';

function CardsBe() {
  return (
<div>
  <div>
    <h1 className='title'>Descubrí más sobre nosotros</h1>
  </div>  
  <div className='containerCard'>

    <Card className='card'>
      <Card.Img className='imgcard' src={reciclar} />
      <Card.Body>
        <Card.Title className='cardTitle'>Inventario en movimiento</Card.Title>
        <Card.Text className='cardtext'>
        Somos un sistema de rotación circular de prendas todos los dias recibimos y listamos productos para que puedas comprar tus favoritos.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='card'>
    <Card.Img className='imgcard' src={replantar} />
      <Card.Body>
        <Card.Title className='cardTitle'>Compromiso sustentable</Card.Title>
        <Card.Text className='cardtext'>
          Nuestra comunidad compra y vende con intención de dar una segunda oportunidad a prendas que la merecen,promoviendo un consumo conciente.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='card'>
    <Card.Img className='imgcard' src={lista} />
      <Card.Body>
        <Card.Title className='cardTitle'>Controles de calidad</Card.Title>
        <Card.Text className='cardtext'>
        Verificamos cada pieza, asegurándonos que esté en perfectas condiciones y además te damos la oportunidad de devolverlo si no era lo que esperabas.
        </Card.Text>
      </Card.Body>
      </Card>

      <Card className='card'>
    <Card.Img className='imgcard' src={ahorrar} />
      <Card.Body>
        <Card.Title className='cardTitle'>Beneficio Económico</Card.Title>
        <Card.Text className='cardtext'>
        Con nosotros puedes ganar vendiendo lo que no usas y tambien puedes ahorrar comprando lo que quieres, somos el medio perfecto para tu economia.
        </Card.Text>
      </Card.Body>
      </Card>
    </div>
  </div>
  );
}

export default CardsBe;
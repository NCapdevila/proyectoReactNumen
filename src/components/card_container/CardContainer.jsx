
import Card from './card/Card';
import './CardContainerStyle.css';
import Header from './header/Header';

// import Titulo from './Titulo';

const CardContainer = (props) => {

      const headerContainer = 'Productos destacados';
      const sales = [
            {
                  user: 'user1234',
                  imageRoot: 1,
                  offer: true,
                  brand: 'Top RENNER',
                  size: 'Talla M',
                  price: 899,
                  offerNumber: 39
            },
            {
                  user: "IT'S MILA",
                  imageRoot: 2,
                  offer: false,
                  brand: 'Pollera corta ONLY',
                  size: 'Talla S',
                  price: 650,
                  offerNumber: 0,
            },
            {
                  user: "fbarre",
                  imageRoot: 3,
                  offer: false,
                  brand: 'Sandalias H&M',
                  size: 'Talla L',
                  price: 450,
                  offerNumber: 0,
            },
            {
                  user: "SilviRoc",
                  imageRoot: 4,
                  offer: true,
                  brand: 'Palazzo ROTUNDA',
                  size: 'Talla S',
                  price: 3890,
                  offerNumber: 40,
            },
            {
                  user: "NumenAc",
                  imageRoot: 5,
                  offer: true,
                  brand: 'Adidas shirt',
                  size: 'Talla S',
                  price: 1000,
                  offerNumber: 40,
            },

      ];


      return (
            <>

                  <Header title={headerContainer} />
                  <div className='cardContainer'>
                        {sales.map(numb =>
                              <Card sale={numb} />
                        )}
                  </div>


            </>

      )

}

export default CardContainer;
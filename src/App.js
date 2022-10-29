import OfertaInicio from "./components/OfferInitial/OfferInitial";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ButtonTwo from "./components/ButtonTwo/ButtonTwo";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsTwo from "./components/CardsTwo/CardsTwo";



function App() {
  return (
    <div className="App">

      
    <div>
      <div>
        <OfertaInicio texto={"Free Delivery over $100. Gift with Purchase over $150"} />
        <NavBar></NavBar>
        <ButtonTwo>comprar</ButtonTwo>
       <CardsTwo />
      </div>
     
    </div>
    </div>
  )
}

export default App;
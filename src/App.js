import OfertaInicio from "./Componets/OfertaInicio/OfertaInicio";
import ImagenLogo from "./Componets/ImagenLogo/ImagenLogo";
import './App.css';

function App() {
  return (
    <div>
      <div>
        <OfertaInicio texto={"Free Delivery over $100. Gift with Purchase over $150"} />
      </div>

      <div>
      <ImagenLogo  />
      </div>

    </div>
  )
}

export default App;
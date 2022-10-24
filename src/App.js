import OfertaInicio from "./components/OfertaInicio/OfertaInicio";
import './App.css';

import NavBar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">

      
    <div>
      <div>
        <OfertaInicio texto={"Free Delivery over $100. Gift with Purchase over $150"} />
        <NavBar></NavBar>
      </div>

    </div>
    </div>
  )
}

export default App;
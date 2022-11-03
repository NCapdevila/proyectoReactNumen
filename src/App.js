import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgBottom from './components/ImgBottom/ImgBottom';
import Footer from './components/Footer/Footer';
import CardsBe from './components/CardsBe/CardsBe';

function App() {
  return (
<div className="App">
    <NavBar></NavBar>
    <CardsBe />
    <ImgBottom />
    <Footer />
    </div>
  )
}

export default App;
import { FaCheck, FaMobileAlt, FaTruckMoving, FaUndo } from "react-icons/fa";

const NavBarHeader = () => {
    return (
    <div className="navBarHeader__container">
        <div className="navBarHeaderItem__container">
            <FaUndo />
            <span>devoluciones hasta 72hs</span>
        </div>
        <div className="navBarHeaderItem__container">
            <FaCheck />
            <span>calidad garantizada</span>
        </div>
        <div className="navBarHeaderItem__container">
            <FaMobileAlt />
            <span>descargá nuestra app</span>
        </div>
        <div className="navBarHeaderItem__container">
            <FaTruckMoving />
            <span>envios gratis</span>
        </div>
    </div>
    );
};


export default NavBarHeader;
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const ArrowMobile = (props) =>{

    const {state} = props;
   
    return (
        <div className="arrowmobile_container">
                {
                state ? <FaAngleUp /> : <FaAngleDown />
                }
        </div>
    )
}

export default ArrowMobile;
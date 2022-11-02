import Button from 'react-bootstrap/Button';
import './Button.css';

function ButtonFooter(props) {

    const { text }  = props
    return (
    <>
        <Button variant="warning" bsPrefix="btn">{text}</Button>{' '}
    </>
    );
}

export default ButtonFooter;
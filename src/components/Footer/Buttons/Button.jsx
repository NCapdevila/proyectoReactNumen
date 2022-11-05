import Button from 'react-bootstrap/Button';
import './Button.css';

function ButtonFooter({ style, text }) {

    return (
    <>
        <Button variant="warning" bsPrefix={style}>{text}</Button>{' '}
    </>
    );
}

export default ButtonFooter;
import './LogoStyle.css'

const Logo = (props) => {


  return (
    <div className='LogoStyle'>
      <img src="../images/pngLetter.png"
        alt="" className='LogoImg' />
      <p className='LogoP'>{props.user}</p>
    </div>
  );
}

export default Logo;
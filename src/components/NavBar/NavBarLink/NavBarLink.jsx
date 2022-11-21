const NavBarLink = (props) =>{
    const {text} = props;
    return (
            <a className="links__navbar" href="#">{text}</a>
    )
}

export default NavBarLink;
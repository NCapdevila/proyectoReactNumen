import "./HeaderStyle.css"
function Header(props) {
      return (
            <h2 className="HeaderStyle">{props.title}</h2>
      )
}

export default Header;
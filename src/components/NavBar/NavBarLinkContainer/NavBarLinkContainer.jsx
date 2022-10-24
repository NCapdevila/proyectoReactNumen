import NavBarIcon from "../NavBarIcons/NavBarIcons";
import NavBarLink from "../NavBarLink/NavBarLink";


const NavBarLinkContainer = (props) => {
    return (
        <>       <div className={`links__container ${props.estado ? 'active' : 'closed'}`}>
        <li>
            
          <NavBarLink text="Productos"></NavBarLink>
        </li>
        <li>
          <NavBarLink text="Contactos"></NavBarLink>
        </li>
        <li>
          <NavBarLink text="Sobre nosotros"></NavBarLink>
        </li>
        <li>
          <NavBarLink text="Buscar"></NavBarLink>
        </li>
        <div className={`mobile__icons ${props.estado ? 'active' : 'closed'}`}>
            <NavBarIcon />
        </div>
      </div>
      <div className="desktop__icons">
          <NavBarIcon className='desktop__icons' />
      </div>
      </> 
    )
}

export default NavBarLinkContainer;
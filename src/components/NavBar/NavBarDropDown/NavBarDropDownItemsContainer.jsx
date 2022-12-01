const NavBarDropDownItemsContainer = (props) =>{

    const { items, itsFor, title }= props;
    return (
        <div className="navBarItems__Container">
            <div>
                <span className="title__dropdown">{title}</span>
            </div>
            <ul>
                {

                    items.map(links =>{
                        if(links.hasOwnProperty('forPeople')){
                            if((itsFor === links.forPeople) || links.forPeople === 'Both' ){
                                return(<li key={links.id} className={links.classN}>{links.nameItem}</li>);
                            } else {
                                return false;
                            }
                        }
                        if(links.hasOwnProperty('sellsFor')){
                            if(itsFor === links.sellsFor){
                                return(<li key={links.id} className={links.classN}>{links.nameItem}</li>);
                            } else {
                                return false;
                            }
                        }
                        return(
                            <li key={links.id} className={links.classN}>{links.nameItem}</li>
                        )
                    })
                }
            </ul>
            <div className="vermas__container">
                <span>Ver mas...</span>
            </div>
        </div>
    )
}


export default NavBarDropDownItemsContainer;
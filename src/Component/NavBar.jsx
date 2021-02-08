import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExploreIcon from '@material-ui/icons/Explore';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const NavBar = () =>{
    return(
        <>
            <div className="navbar">
                
                <div className="nav_menu">
                    <NavLink to="/">
                        <img className="nav_title"
                    src="https://logo-logos.com/wp-content/uploads/2016/10/Instagram_logo_wordmark_logotype.png"
                    alt=""
                     />
                    </NavLink>
                    <div className="menu">
                         <NavLink className ="menu_item" to="/"><HomeIcon/></NavLink>
                         <NavLink className ="menu_item" to="/"><WhatsAppIcon/></NavLink>
                         <NavLink className ="menu_item" to="/"><ExploreIcon/></NavLink>
                         <NavLink className ="menu_item" to="/"><FavoriteBorderIcon/></NavLink>
                         <NavLink className ="menu_item" to="/"><AccountCircleIcon/></NavLink>   
                     </div>
                </div>
                
            </div>
        </>
    );

};
export default NavBar;
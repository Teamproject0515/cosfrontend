import React, { useState } from "react";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Logo from "./images/logo.jpg";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import "./css/Banner.css"
import {SidebarData} from "./SidebarData"
import {Link} from "react-router-dom";

function Banner(){
    const [sidebar,setSidebar] = useState(false);

    const showSidebar = ()=> setSidebar(!sidebar);


    return(
        <>
            <div className="banner">
                    <div className="left_menu">
                        <IconButton className="menuButton" onClick={showSidebar}>
                            <MenuIcon/>
                        </IconButton>
                        <IconButton className="menuButton">
                            <SearchOutlinedIcon/>
                        </IconButton>
                    </div>
                    <div className="mid_menu">
                    <img
                        src={ Logo }
                        style={{height:"50px"}}
                        alt='testA' />
                    </div>
                    <div className="right_menu">
                    <IconButton className="menuButton">
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                    </div>
            </div>
            <nav className={sidebar ? "nav-menu active":"nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <IconButton className="menuButton" onClick={showSidebar}>
                            <CloseIcon/>
                        </IconButton>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );

}
export default Banner;
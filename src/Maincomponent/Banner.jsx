import React, { useState } from "react";
import clsx from 'clsx';
import {Link} from "react-router-dom";

import {IconButton, TextField, Modal, Backdrop, Fade, makeStyles, Button, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from "@material-ui/icons/Menu";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';



import Logo from "./images/logo.jpg";
import {SidebarData} from "./SidebarData"
import "./css/Banner.css"


function Banner(){

    let [product_gender, setproduct_gender] = useState(null);

    const [sidebar,setSidebar] = useState(false);

    const showSidebar = ()=> setSidebar(!sidebar);

    function searchKeyword(e){
        window.localStorage.setItem("search_keyword", e.target.value);
    }

    const [state, setState] = React.useState({
        top: false,
      });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
        }
        setState({ ...state, [anchor]: open });
    };

    function selectCategoryList(value){
        window.localStorage.setItem("selectGender", value);
        window.location.reload(); // 메인페이지를 제외하고 다른 페이지를 클릭했을 때, 주소값만 변하고 새로고침이 되지 않아서 reload시킴 - 다른 방법이 있을 것 같음
    }

    return(
        <>
            <div className="banner" style={{width:'100%'}}>
                    <div style={{float:'left'}} className="left_menu">
                        <IconButton style={{float:'left', minWidth:'50px', marginRight:'10px'}} className="menuButton" onClick={showSidebar}>
                            <MenuIcon/>
                        </IconButton>
                       
                        <IconButton style={{paddingTop:'7px'}} className="menuButton">
                            {['top'].map((anchor) => (
                                <React.Fragment key={anchor}>
                                <div onClick={toggleDrawer(anchor, true)} style={{width:'23px',height:'23px',paddingTop:'5px'}}><SearchOutlinedIcon/></div>
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    <form noValidate action="/search-keyword" autoComplete="off" style={{width:'100%', height:'80px'}}>
                                        <TextField id="standard-search" label="Search" type="search" onChange={searchKeyword} style={{paddingTop:'30px',width:'90%'}}/>
                                    </form>
                                </Drawer>
                                </React.Fragment>
                            ))}
                        </IconButton>
                        


                    </div>
                    
                    <div className="mid_menu">
                        <img src={ Logo } style={{height:"50px"}} alt='testA' />
                    </div>
                    
                    <div className="right_menu">
                    <IconButton>
                        <ShoppingCartOutlinedIcon/>
                    </IconButton>
                    </div>
            </div>
            <nav className={sidebar ? "nav-menu active":"nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle" style={{paddingLeft:'300px'}}>
                        <IconButton className="menuButton" onClick={showSidebar}>
                            <CloseIcon/>
                        </IconButton>
                    </li>
                    <li>
                    <form noValidate action="/search-keyword" autoComplete="off" style={{width:'150px', padding: '8px 0px 8px 30px'}}>
                        <TextField id="standard-search" label="Search" type="search" onChange={searchKeyword} style={{width:'300px'}}/>
                    </form>
                    </li>
                    {SidebarData.map((item,index)=>{
                        return(
                            <li key={index} className={item.cName}>

                            <button style={{border:'0px', backgroundColor:'white'}} onClick ={() => {selectCategoryList(item.value)}}>
                                <Link to={item.path} >
                                    <span>{item.title}</span>
                                </Link>
                            </button>

                        </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );

}

export default Banner;
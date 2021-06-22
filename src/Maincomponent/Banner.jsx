import React, { useState, useEffect } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";

import { IconButton, TextField, Button, Drawer} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from "@material-ui/icons/Menu";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


import Logo from "./images/cosmos.png";
import { SidebarData } from "./SidebarData";
import "./css/Banner.css";
import ApiServiceLogin from "../Login/ApiServiceLogin";
import ModalLoginForm from "../Login/ModalLoginForm";

function Banner(props) {

    let [product_gender, setproduct_gender] = useState(null);

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const [managerChk, setManagerChk] = useState(false);

    const history = useHistory();

    function searchKeyword(e) {
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

    function selectCategoryList(value,path) {
        window.localStorage.setItem("selectGender", value);
        // props.history.push(path);
        window.location.reload();
    }

    function selectMyCos() {
        history.push("/mycos-member");
        window.location.reload();
    }

    //로그인 버튼 / 로그아웃 버튼 설정
    const [loginBtn, setLoginBtn] = useState('login');
    const [loginCheck, setLoginCheck] = useState(false);
    
    //쿠키 값으로 session 확인 후 Boolean 값 받아서 버튼 이름 변경
    useEffect(() => {
        ApiServiceLogin.checkSession()
            .then(res => {
                //Boolean 값 받기
                let loginButton = res.data;
                console.log("checkSession()결과:" + loginButton);
                setLoginBtn(
                    loginButton === true ? 'SignOut' : 'SignIn'
                );
            })
            .catch(err => {
                console.log('checkSession() 에러', err);
            });

        if (sessionStorage.getItem("user") != null) {
            setLoginCheck(true);
        };
        if (sessionStorage.getItem("user_role") == 1) {
            setManagerChk(true);
            setLoginCheck(false);
        };
    });

    //loginBtn 값에 따라서 보여지는 페이지 지정
    const loginBtnHandler = () => {
        if (loginBtn == "SignIn") {
            openModal();
        } else if (loginBtn == "SignOut") {
            ApiServiceLogin.lotout()
                .then(res => {
                    sessionStorage.removeItem("user");
                    sessionStorage.removeItem("user_role");
                    window.alert("로그아웃이 완료 되었습니다.");
                    window.location.reload();
                })
                .catch(err => {
                    console.log('lotout() 에러', err);
                }, [loginCheck]);
        }
    }
    //로그인 모달창 관련 
    const [modalOpen, setModalOpen] = useState(false);

    const openModal= () =>{
        setModalOpen(true);
    }

    const closeModal= ()=>{
        setModalOpen(false);
    }

    const managerPage = ()=>{
        history.push('/manager');
    }

    return (
        <>
            <div className="banner" style={{ width: '100%', height: '60px', justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
                <div className="left_menu">
                    <IconButton style={{ float: 'left', minWidth: '50px' }} className="menuButton" onClick={showSidebar}>
                        <MenuIcon />
                    </IconButton>

                    <IconButton style={{ paddingTop: '13px' }} className="menuButton">
                        {['top'].map((anchor) => (
                            <React.Fragment key={anchor}>
                                <div onClick={toggleDrawer(anchor, true)} style={{ width: '23px', height: '23px' }}><SearchOutlinedIcon /></div>
                                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                    <form noValidate action="/search-keyword" autoComplete="off" style={{ width: '100%', height: '80px', display: 'flex', justifyContent: 'center' }}>
                                        <TextField id="standard-search" label="Search" type="search" onChange={searchKeyword} style={{ paddingTop: '30px', width: '80%' }} />
                                    </form>
                                </Drawer>
                            </React.Fragment>
                        ))}
                    </IconButton>



                </div>


                <div className="mid_menu">
                    <Button onClick={() => history.push('/')}><img src={Logo} style={{ height: "20px" }} alt='testA' /></Button>
                </div>

                <div className="right_menu">
                    {managerChk && <Button onClick={managerPage}>관리자 페이지로 가기</Button>}
                    <Button onClick={loginBtnHandler}>{loginBtn}</Button>
                    <ModalLoginForm open={modalOpen} close={closeModal}></ModalLoginForm> 
                    {loginCheck && <IconButton style={{ fontSize: '14px' }} onClick={selectMyCos}> MY COS </IconButton>}

                    <IconButton>
                        <ShoppingCartOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle" style={{ paddingLeft: '300px' }}>
                        <IconButton className="menuButton" onClick={showSidebar}>
                            <CloseIcon />
                        </IconButton>
                    </li>
                    <li>
                        <form noValidate action="/search-keyword" autoComplete="off" style={{ width: '150px', padding: '8px 0px 8px 30px' }}>
                            <TextField id="standard-search" label="Search" type="search" onChange={searchKeyword} style={{ width: '300px' }} />
                        </form>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>

                                <button style={{ border: '0px', backgroundColor: 'white' }} onClick={() => { selectCategoryList(item.value, item.path) }}>
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

export default withRouter(Banner);
import React, { useState } from "react";
import {Link,useHistory} from 'react-router-dom';
import ApiServiceLogin from "../Login/ApiServiceLogin";
import Logo from "../Maincomponent/images/cosmos.png";
import {Button} from "@material-ui/core";
function ManagerHeader({dashBoardOpen}){

    const history = useHistory();
    //loginBtn 값에 따라서 보여지는 페이지 지정
    const loginBtnHandler = ()=>{
        ApiServiceLogin.lotout()
        .then(res=> {
            sessionStorage.removeItem("user_role");
            sessionStorage.removeItem("user");
            window.alert("로그아웃이 완료 되었습니다.");
            history.push('/');
            window.location.reload();
        })
        .catch( err=> {
            console.log('lotout() 에러', err);
        });
    }

    return(
        <>
        <div className="manager-navigation">
            <div className="banner" style={{height:'10%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Link to={"/"}  className="userPageLink"> 사용자 페이지로 돌아가기</Link>
            <div className="manager_login"><Button onClick={loginBtnHandler}>log-Out</Button></div>
                <div className="mid_menu" >
                 <button className="logoBtn" onClick={()=>dashBoardOpen()}>
                    <img src={ Logo }style={{height:"20px"}} alt='testA' />
                        </button>
                    </div>
                   
                </div>
            </div>
            
        </>
    )

};
export default ManagerHeader;
import React,{useState, useEffect} from 'react'
import { TextField , Button, Link, IconButton} from '@material-ui/core'
import {useHistory} from "react-router-dom";
import styled from "styled-components";

import ApiService from "./ApiServiceLogin";
import Footer from "./FindPwFooter";

function FindPWComponent() {
    const history = useHistory(); 

    const[user, setUser] = useState({user_email:"", user_name:"", user_birthday:""}); //user객체 생성
    const [isBtnActive, setIsBtnActive] = useState(false); // useeffect()와 사용

    useEffect(() => {
        setIsBtnActive(
            user.user_email.includes("@") && user.user_name.length>1 && user.user_birthday.length ==8 ? true : false
        );
        }, [user]);
 
    //input 받은 내용으로 user 객체 내용 변경
    const inputHandler = (e) => { 
        e.persist();
        const{ name, value} = e.target;
        setUser({...user,
                [name]: value});
    };


     const getPW = () => { 
        if(!isBtnActive){
            window.alert("입력값을 다시 확인해주세요.");
        }else{
         ApiService.findPW(user)
         .then(res => {
             if(user.user_name == res.data.user_name){
             let user_name = res.data.user_name;
             let user_birthday = res.data.user_birthday;
             let user_email = res.data.user_email;
             let user_password = res.data.user_password;
             console.log("user",user);
             console.log(user_name,"님 비밀번호 찾기 성공");
             console.log("getPW() 성공");
             window.sessionStorage.setItem("user_name",user_name);
             window.sessionStorage.setItem("user_birthday",user_birthday);
             window.sessionStorage.setItem("user_email",user_email);
             window.sessionStorage.setItem("user_password",user_password);
             history.push('/PW');
             } else{
                 window.alert("입력된 정보와 맞는 사용자가 없습니다.");
                 window.location.reload();
             }
         })  
         .catch( err => {
             console.log('getPW() 에러', err);
         });
     }
    }

    const Header = styled.div`
    font-size: 14px;
    `;

    return (
        <>        
        <div style={{width: '350px', 
                    margin:'80px auto',
                     height: '420px',
                    maxHeight: '500px',}}> 
            <h3>비밀번호 찾기</h3>
            <Header>
            <p>COS를 방문해 주셔서 감사합니다.<br/>
            고객님의 정보를 편리하고 안전하게 찾을 수 있도록 <br/>도와드리겠습니다.</p>
            </Header>
            <form style={{margin: '30px auto',
                         borderTop: '1px solid lightGray',
                         padding: '10px 0',}}>
           <div style={{ margin :'10px 0', }}>
            <TextField type="text" label="아이디" placeholder="아이디(이메일)를 입력해 주세요." 
            name="user_email"  value={user.user_email || ""} onChange={inputHandler} fullWidth margin="dense" />
            <TextField type="text"  label="이름" placeholder="이름을 입력해 주세요." 
            name="user_name"  value={user.user_name || ""} onChange={inputHandler} fullWidth margin="dense" />
            <TextField type="text"  label="생년월일" placeholder="생년월일을 입력해 주세요." 
            name="user_birthday"  value={user.user_birthday || ""}  onChange={inputHandler} 
            fullWidth margin="normal" helperText="생년월일의 연월일을 -없이 입력해주세요 (ex:20010101)"/>
            </div>
           <Button fullWidth variant="contained" onClick={getPW}>인증하기</Button>
         </form>
            <Footer/>
        </div>
        </>
    )
}

export default FindPWComponent

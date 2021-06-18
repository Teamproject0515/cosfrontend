
import { TextField , Button, RadioGroup, FormControlLabel, Radio} from '@material-ui/core'
import React,{useState, useEffect} from 'react'
import {useHistory } from "react-router-dom";
import ApiService from "./ApiServiceLogin";
import styled from "styled-components";
import "./css/ModalLoginForm.css";

function ModalLoginForm(props) {
    
 // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
 const { open, close } = props;

 const history = useHistory(); 

 const[user, setUser] = useState({user_email:"", user_password:"" , user_role:"0"}); //user객체 생성
 const [isBtnActive, setIsBtnActive] = useState(false); //Button 활성화 관련, useeffect()와 사용
 

 //로그인 버튼이 활성화 되는 조건 주기
 useEffect(() => {
 setIsBtnActive(
     user.user_email.includes("@") && user.user_password.length >=1 ? true : false
 );
 }, [user]);

 //input 받은 내용으로 user 객체 내용 변경
 const inputHandler = (e) => { 
     e.persist();
     const{ name, value} = e.target;
     setUser({...user,
             [name]: value});
 };

 //로그인 실행
 const getLogin = () => { 
    if(!isBtnActive){
        window.alert("아이디와 비밀번호를 입력해주세요.");
    }else{
     ApiService.postLogin(user)
     .then(res => {
         if(user.user_email=== res.data.user_email){        
         let user_email = res.data.user_email;
         let message = user_email+'로그인 완료';
         console.log("성공:",message);
         console.log("getLogin() 성공");
         //user_email 저장
         sessionStorage.setItem("user",user_email);
         window.location.reload();
         //user_role에 따라서 페이지 다르게 요청
          if(res.data.user_role==="1"){
            sessionStorage.setItem("user_role",1);
          }
         } else{
             window.alert("아이디와 비밀번호를 다시 확인해주세요.");
         }
     })  
     .catch( err => {
         console.log('getLogin() 에러', err);
     });
 }
 }

 const Header = styled.div`
 margin: 0 0 20px 0;
 `;

 const Footer = styled.div`
 margin: 30px 0;
 align-items: left;
 `;


 return (
     // 모달이 열릴때 openModal 클래스가 생성된다.
     <div className={ open ? 'openModal modal' : 'modal' }>
         { open ? (  
             <section>
                 <header>
                     <span> <h3>로그인/ Sign In</h3></span>
                     <button className="close" onClick={props.close}> &times; </button>
                 </header>
                 <main> 
            <Button onClick={()=>history.push("/signUp")} size="large" color="primary">회원가입하기 SignUp</Button>
                 <form style={{margin: '30px auto',
                      borderTop: '1px solid lightGray',}}>
                     <div style={{ margin :'10px 0', }}>
                              <TextField type="email" label="아이디/이메일" placeholder="이메일을 입력하세요." fullWidth margin="normal"
                                 name="user_email"  value={user.user_email || ""} onChange={inputHandler} variant="filled" size="small"/>
                             <br/>
         <TextField type="password" label="비밀번호" placeholder="비밀번호를 입력하세요."  fullWidth margin="normal"
         name="user_password" value={user.user_password || ""} onChange={inputHandler} variant="filled" size="small"/>
         <br/>
        </div>
         <div>
        <RadioGroup row aria-label="row" value={user.user_role} name="user_role" onChange={inputHandler}>
             <FormControlLabel value="0" control={<Radio color="default" size="small"/>} label="사용자" />
             <FormControlLabel value="1" control={<Radio color="default" size="small"/>} label="관리자" />
         </RadioGroup>        
        </div>
        <Button fullWidth variant="contained" onClick={getLogin}>로그인</Button><br></br>
       
        </form>
                 </main>
                 <Footer>
                 <Button onClick={() => {history.push("/findEmail")}}>아이디 찾기</Button>&nbsp;&nbsp;
                 <Button onClick={() => {history.push("/findPW")}}>비밀번호 찾기</Button>
                 </Footer>
             </section>
         ) : null }
     </div>
 )
}

export default ModalLoginForm

import { TextField , Button, Link, IconButton} from '@material-ui/core'
import React,{useState, useEffect} from 'react'
import {useHistory } from "react-router-dom";
import ApiService from "./ApiServiceLogin";

function LoginTextComponent() {
    
    const history = useHistory(); 

    const[user, setUser] = useState({user_email:"", user_password:""}); //user객체 생성
    const [isBtnActive, setIsBtnActive] = useState(false); //Button 활성화 관련, useeffect()와 사용

    // 버튼이 활성화 되는 조건
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
            if(user.user_email== res.data.user_email){
            let message = res.data.user_email+'로그인 완료';
            console.log("user",user);
            console.log("성공",message);
            window.localStorage.setItem("user", user);
            console.log("getLogin() 성공");
            history.push('/');
            } else{
                window.alert("아이디와 비밀번호를 다시 확인해주세요.");
                history.push('/login');
            }
        })  
        .catch( err => {
            console.log('getLogin() 에러', err);
        });
    }
    }
  
    return (
        <>        
            <form >
            <div className="Login-header">
            <Button>로그인</Button>
            <Button  color="primary">회원가입</Button>
            </div>
            <div className="Login-body">
            <TextField type="email" label="아이디/이메일" placeholder="이메일을 입력하세요." size="large"
            name="user_email" margin="normal" value={user.user_email || ""} onChange={inputHandler}/><br/>
            <TextField type="password"  label="비밀번호" placeholder="비밀번호를 입력하세요."  size="large"
            name="user_password" margin="normal" value={user.user_password || ""} onChange={inputHandler}/><br/>
           <Button variant="contained" onClick={getLogin}>로그인</Button><br></br>
           </div>
           <div className="Login-footer">
            <Button onClick={() => {history.push("/findEmail")}}>아이디 찾기</Button>&nbsp;&nbsp;
            <Button onClick={() => {history.push("/findPW")}}>비밀번호 찾기</Button>
            </div>
         </form>
       
        
        </>
    );
}

export default LoginTextComponent

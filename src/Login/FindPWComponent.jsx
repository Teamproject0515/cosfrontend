import React,{useState} from 'react'
import { TextField , Button, Link, IconButton} from '@material-ui/core'
import {useHistory} from "react-router-dom";
import ApiService from "./ApiServiceLogin";

function FindPWComponent() {
    const history = useHistory(); 

    const[user, setUser] = useState({user_email:"", user_name:"", user_birthday:""}); //user객체 생성
    //const [isBtnActive, setIsBtnActive] = useState(false); 추후에 useeffect()와 사용

    //input 받은 내용으로 user 객체 내용 변경
    const inputHandler = (e) => { 
        e.persist();
        const{ name, value} = e.target;
        setUser({...user,
                [name]: value});
    };

    return (
        <>        
        <div> 
            <h2>비밀번호 찾기</h2>
            <p>Cos를 방문해 주셔서 감사합니다.</p>
            <p>고객님의 정보를 편리하고 안전하게 찾을 수 있도록 <br/>도와드리겠습니다.</p>
            <form>
            <TextField type="text" label="아이디" placeholder="아이디(이메일)를 입력해 주세요." 
            name="user_email"  value={user.user_email || ""} onChange={inputHandler} fullWidth margin="dense" />
            <TextField type="text"  label="이름" placeholder="이름을 입력해 주세요." 
            name="user_name"  value={user.user_name || ""} onChange={inputHandler} fullWidth margin="dense" />
            <TextField type="text"  label="생년월일" placeholder="생년월일을 입력해 주세요." 
            name="user_birthday"  value={user.user_birthday || ""}  onChange={inputHandler} 
            fullWidth margin="normal" helperText="생년월일의 연월일을 -없이 입력해주세요 (ex:20010101)"/>
           <Button variant="contained" onClick={()=>{history.push("/")}}>인증하기</Button><br></br>

         </form>
    
        </div>
        </>
    )
}

export default FindPWComponent

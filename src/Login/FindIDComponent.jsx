import { TextField , Button, Link, IconButton} from '@material-ui/core'
import React,{useState, useEffect} from 'react'
import ApiService from "./ApiServiceLogin";
import {useHistory} from "react-router-dom";

function FindIDComponent() {
     const history = useHistory(); 

     const[user, setUser] = useState({user_name:"", user_birthday:""}); //user객체 생성
     const [isBtnActive, setIsBtnActive] = useState(false); // useeffect()와 사용

     useEffect(() => {
        setIsBtnActive(
            user.user_name.length>1 && user.user_birthday.length ==8 ? true : false
        );
        }, [user]);
 
     //input 받은 내용으로 user 객체 내용 변경
     const inputHandler = (e) => { 
         e.persist();
         const{ name, value} = e.target;
         setUser({...user,
                 [name]: value});
     };

     const getID = () => { 
        if(!isBtnActive){
            window.alert("이름과 생년월일을 입력해주세요.");
        }else{
         ApiService.findEmail(user)
         .then(res => {
             if(user.user_name == res.data.user_name){
             let user_name = res.data.user_name;
             window.alert( );
             console.log("user",user);
             console.log("성공",user_name);
             window.localStorage.setItem("user", user);
             console.log("getID() 성공");
             history.push('/');
             } else{
                 window.alert("아이디와 비밀번호를 다시 확인해주세요.");
                 history.push('/findEmail');
             }
         })  
         .catch( err => {
             console.log('getID() 에러', err);
         });
     }
    }

    return (
        <>        
        <div> 
            <h2>아이디 찾기</h2>
            <p>Cos를 방문해 주셔서 감사합니다.</p>
            <p>고객님의 정보를 편리하고 안전하게 찾을 수 있도록 <br/>도와드리겠습니다.</p>
            <form>
            <TextField type="text"  label="이름" placeholder="이름을 입력해 주세요." 
            name="user_name" fullWidth margin="dense" value={user.user_name|| ""} onChange={inputHandler}/>
            <TextField type="text"  label="생년월일" placeholder="생년월일을 입력해 주세요." 
            name="user_birthday" fullWidth margin="normal" value={user.user_birthday|| ""} onChange={inputHandler}
            helperText="생년월일의 연월일을 -없이 입력해주세요 (ex:20010101)"/>
           <Button variant="contained" onClick={getID}>확인</Button><br></br>
         </form>   
        </div>
        </>
    )
}

export default FindIDComponent

import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import ApiService from '../../ApiService';

function UpdateUserAccount(props) {

    const [user_account, setuser_account] = useState(null);
    const [user_bank, setuser_bank] = useState(null);
    const [user_name, setuser_name] = useState(props.user_name);
    const [user_email, setuser_email] = useState(props.user_email);

    

    function updateUserAccount(){
        const userAccount = {
            user_account : user_account,
            user_bank : user_bank,
            user_name : user_name,
            user_email : user_email,
        }
        // console.log(userAccount);
        if(userAccount.user_bank === null | userAccount.user_account === null){
            alert('은행과 계좌번호를 확인해주세요.');
        }else{
            ApiService.updateUserAccount(userAccount);
            alert('환불 계좌가 등록됐습니다.');
            props.handleClose();
        }
    }

    const onChangeAccount = (e) =>{
        setuser_account(e.target.value);
    }

    const onChangeBank = (e) =>{
        setuser_bank(e.target.value);
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            updateUserAccount();
        }
    }

    return (
        <div style={{fontSize:'11px', textAlign:'left', marginTop:'20px'}}>
            [환불 계좌 수정]
            <div style={{textAlign:'left', marginTop:'10px'}}>
                <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>예금주</div>
                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'10px'}} type="text" value={props.user_name} disabled/><br/>
            </div>

            <div style={{textAlign:'left'}}>
                <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>은행</div>
                <select name="user_bank" style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'300px', marginBottom:'10px'}} onChange={onChangeBank}>
                    <option>은행 선택</option>
                    <option value="NH농협">NH 농협</option>
                    <option value="KB국민">KB 국민</option>
                    <option value="우리">우리</option>
                    <option value="신한">신한</option>
                    <option value="IBK기업">IBK 기업</option>
                    <option value="대구">대구</option>
                    <option value="부산">부산</option>
                </select>
            </div>

            <div style={{textAlign:'left'}}>
                <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>계좌번호</div>
                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'170px', marginBottom:'10px'}} type="text" placeholder="'-' 를 제외한 숫자만 입력해주세요." onChange={onChangeAccount} onKeyPress={onKeyPress}/>
                <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => updateUserAccount()}>수정하기</Button>
            </div>
        </div>
    )
}


export default UpdateUserAccount

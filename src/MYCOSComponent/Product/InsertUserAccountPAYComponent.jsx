import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import ApiService from '../../ApiService';

function InsertUserAccount(props) {

    const [user_email, setuser_email] = useState(props.user_email);
    const [user_repay, setuser_repay] = useState(null);



    function insertUserAccount(){
        const userRepay = {
            user_email : user_email,
            user_repay : user_repay,
        }
        // console.log(userRepay);

        ApiService.insertUserRepay(userRepay);
        alert('소득공제용 현금영수증 번호가 등록됐습니다.')
        props.handleClose();
    }

    const onChangePhone = (e) =>{
        setuser_repay(e.target.value);
        // console.log("user_repay : " + user_repay);
    }

    return (
        <div>
            <div style={{textAlign:'left'}}>
                <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>소득공제용(일반개인)</div>
                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'170px', marginBottom:'10px'}} type="text" placeholder="'-' 를 제외한 숫자만 입력해주세요." onChange={onChangePhone}/>
                <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => insertUserAccount()}>등록하기</Button>
            </div>
        </div>
    )
}


export default InsertUserAccount

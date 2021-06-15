import React, {useState} from 'react';

import {Grid, Button} from '@material-ui/core';

function ProductListComponent(props){

    let user_id = 'suovj140';
    let user_name = '구지훈';
    let user_email = 'design_k@kakao.com';
    let user_phone = '010-4474-9986';
    let user_password = 'pw';

    const user = {
        user_id,
        user_name,
        user_email,
        user_phone,
        user_password
    }

    let [check_password, setcheck_password] = useState(null);

    // 비밀번호 입력창에서 enter치면 checkPW 함수 불러오기
    const onKeyPress = (e) => {
        if(e.key == 'Enter'){
            checkPW();
        }
    }

    function checkPW(){
        if(user.user_password === check_password){
            alert('맞아요 따란');
            console.log("user : "+user.user_password);
            console.log("input : "+check_password);

            props.history.push('#');
        }else{
            alert('틀렸어요 따란');
            console.log(window.localStorage.getItem(user.user_password));
            console.log(check_password);
        };
    }

    function onChangePW(e){
        setcheck_password(e.target.value);
    }

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Grid container spacing={3} style={{ paddingLeft:'10px', paddingRight:'10px', minHeight:'800px', width:'100%', maxWidth:'1560px', minHeight:'300px'}}>

                <Grid item xs={12} style={{height:'100px'}}></Grid>

                <Grid item xs={12} style={{height:'60px'}}> 
                    <div style={{textAlign:'left',fontSize:'25px', marginBottom:'20px'}}>My COS</div>
                </Grid>


                <Grid item xs={6} sm={3}>
                    <div style={labelStyle}>회원정보</div>
                    <div style={labelStyle}>주문/배송</div>
                    <div style={labelStyle}>배송지관리</div>
                    <div style={labelStyle}>예치금</div>
                    <div style={labelStyle}>영수증/세금계산서</div>
                </Grid>

                <Grid item xs={6} sm={9}>
                    <div style={{fontSize:'13px', textAlign:'left'}}>회원정보변경</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>
                    <div style={centerDiv}>
                        <div style={centerLabel}>아이디</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user.user_id}></input></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerLabel}>이름</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user.user_name}></input></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerLabel}>이메일</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user.user_email}></input></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerLabel}>휴대폰번호</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user.user_phone}></input></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerLabel}>비밀번호</div>
                        <div style={{textAlign:'left'}}><input type="password" style={{textAlign:'left', fontSize:'15px', border:'0px', width:'100%', backgroundColor:'#E7E7E7', padding:'7px', marginTop:'5px', maxWidth:'256px'}} onChange={onChangePW} onKeyPress={onKeyPress}></input></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerInfo}><b>고객님의 소중한 회원정보를 환인/변경 하기 위해 비밀번호 재확인이 필요합니다.</b></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerInfo}><b>카카오 로그인 등으로 가입하신 고객님은 로그아웃 후 '비밀번호 찾기'를 통해 비밀번호 재설정이 필요합니다.</b></div>
                    </div>
                    <div style={{marginTop:'25px', marginBottom:'100px'}}>
                        <Button style={{display:'flex', color:'#FFFFFF', backgroundColor:'#444444', border:'0px', fontSize:'13px', width:'100%', padding:'7px 0px 7px 0px', maxWidth:'270px'}} onClick={checkPW}>확인</Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

const labelStyle = {
    textAlign:'left', fontSize:'13px', marginBottom:'8px', color:'#999999'
}

const centerDiv = {
    marginTop:'25px'
}

const centerLabel = {
    fontSize:'13px', textAlign:'left', color:'#999999'
}

const centerInput = {
    border:'0px', backgroundColor:'white', textAlign:'left', fontSize:'12px'
}

const centerInfo = {
    fontSize:'11px', textAlign:'left', color:'#999999', maxWidth:'270px'
}

export default ProductListComponent;
import React from 'react'
import {Grid, Button} from '@material-ui/core';
import ErrorPasswordComponent from './Product/ErrorPasswordComponent';
function MyCOSDashBoardComponent(props) {
    
    return (
        <Grid item xs={6} sm={12}>
                    <div style={{fontSize:'13px', textAlign:'left'}}>회원정보확인</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>
                    {/* <div style={centerDiv}>
                        <div style={centerLabel}>아이디</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_id}></input></div>
                    </div> */}
                    <div style={centerDiv}>
                        <div style={centerLabel}>이름</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_name}></input></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerLabel}>이메일</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_email}></input></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerLabel}>휴대폰번호</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_phone}></input></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerLabel}>비밀번호</div>
                        <div style={{textAlign:'left'}}><input type="password" style={{textAlign:'left', fontSize:'15px', border:'0px', width:'100%', backgroundColor:'#E7E7E7', padding:'7px', marginTop:'5px', maxWidth:'256px'}} onChange={props.onChangePW} onKeyPress={props.onKeyPress}></input></div>
                        {props.openErrorPassword && <ErrorPasswordComponent />}
                    </div>
                    <div style={centerDiv}>
                        <div style={centerInfo}><b>고객님의 소중한 회원정보를 환인/변경 하기 위해 비밀번호 재확인이 필요합니다.</b></div>
                    </div>
                    <div style={centerDiv}>
                        <div style={centerInfo}><b>카카오 로그인 등으로 가입하신 고객님은 로그아웃 후 '비밀번호 찾기'를 통해 비밀번호 재설정이 필요합니다.</b></div>
                    </div>
                    <div style={{marginTop:'25px', marginBottom:'100px'}}>
                        <Button style={{display:'flex', color:'#FFFFFF', backgroundColor:'#444444', border:'0px', fontSize:'13px', width:'100%', padding:'7px 0px 7px 0px', maxWidth:'270px'}} onClick={props.checkPW}>확인</Button>
                    </div>
                </Grid>
    )
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

export default MyCOSDashBoardComponent
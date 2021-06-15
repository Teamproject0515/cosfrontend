import React, { useEffect, useState } from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import ApiService from '../../ApiService';
import UserAccount from './InsertUserAccount';
import UpdateUserAccount from './UpdateUserAccount';
import InsertUserAccountPAY from './InsertUserAccountPAYComponent';
import UpdateUserRepay from './UpdateUserRepay';
import ModalPhone from './ModalUpdatePhoneComponent';
import ModalEmail from './ModalUpdateEmailComponent';
import ModalPassword from './ModalUpdatePasswordComponent';
import ModalAccount from './ModalUpdateAccountComponent';
import ModalSNS from './ModalUpdateSNSComponent';
import ModalDeleteUser from './ModalDeleteUserComponent';

function MemberInfoComponent(props) {

    const [change_email, setchange_email] = useState(null);
    const [change_phone, setchange_phone] = useState(null);
    const [change_password, setchange_password] = useState(null);
    const [user_email, setuser_email] = useState(props.user.user_email);
    const [user_account, setuser_account] = useState('');
    const [updateUserAccount, setUpdateUserAccount] = useState(false);
    const [user_name, setuser_name] = useState(props.user.user_name);

    const [open, setOpen] = useState(false);
    const [openChangePhone, setOpenChangePhone] = useState(false);
    const [openChangePassword, setOpenChangePassword] = useState(false);
    const [openUserAccountInsert, setOpenUserAccountInsert] = useState(false);
    const [openUserSNSConnect, setOpenUserSNSConnect] = useState(false);
    const [openUserDelete, setOpenUserDelete] = useState(false);
    const [openReCheckUserDelete, setOpenReCheckUserDelete] = useState(false);
    const [openInsertUserAccountPAY, setOpenInsertUserAccountPAY] = useState(false);
    const [openUpdateUserRepay, setOpenUpdateUserRepay] = useState(false);

    const [man, setman] = useState(false);
    const [woman, setwoman] = useState(false);

    const Change_user = {
        user_email : user_email,
        change_email : change_email,
        change_phone : change_phone,
        change_password : change_password,
    }

    useEffect(() => {
        ApiService.userAccount(user_email)
            .then( res => {
                setuser_account(res.data);
                // console.log("man :"+man);
                // console.log("woman : "+woman);
                checkGender()
            })
            .catch(err => {
                console.log('user_account print error!', err);
            })
    },[open, openChangePhone, openChangePassword, openUserAccountInsert, openUserSNSConnect, openUserDelete, openReCheckUserDelete, openInsertUserAccountPAY, openUpdateUserRepay]);


   

    // 업데이트 로직
    function updateButton(){
        // console.log(Change_user);
        ApiService.updateUserInfo(Change_user);
        // alert('업데이트 성공');
        props.setState(10);
        handleClose();
    };

    // 이메일, 핸드폰 번호, 비밀번호 변경시 해당 set에 입력되게 하고, 다른 set에 이미 입력된 값이 있다면 null값으로 처리한다.
    // 만약 비밀번호를 바꾸려다 말고 핸드폰 번호를 아니면 잘못 입력했을 경우에를 대비해서 null로 지정해둠
    function onChange(e){
        if(e.target.name === "change_email"){
            setchange_phone(null);
            setchange_password(null);
            setchange_email(e.target.value);
        }else if(e.target.name === "change_phone"){
            setchange_email(null);
            setchange_password(null);
            setchange_phone(e.target.value);
        }else if(e.target.name === "change_password"){
            setchange_email(null);
            setchange_phone(null);
            setchange_password(e.target.value);
        }
    }


    // 모달
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          borderRadius:'10px'
        },
      }));


    const classes = useStyles();


    const handleOpen = (e) => {
        if(e.target.name === "change_email"){
            setOpen(true);
        }else if(e.target.name === "change_phone"){
            setOpenChangePhone(true);
        }else if(e.target.name === "change_password"){
            setOpenChangePassword(true);
        }else if(e.target.name === "user_delete"){
            setOpenUserDelete(true);
        }else if(e.target.name === "recheck_user_delete"){
            setOpenReCheckUserDelete(true);
        }else if(e.target.name === "user_account_insert"){
            setOpenUserAccountInsert(true);
        }else if(e.target.name === "user_sns_connect"){
            setOpenUserSNSConnect(true);
        }   
        props.setState(2);
    };
    
    const handleClose = (e) => {
        
        // 이메일 변경 모달 띄우기
        setOpen(false);

        // 휴대폰 번호 변경 모달 띄우기
        setOpenChangePhone(false);
        
        // 비밀번호 변경 모달 띄우기
        setOpenChangePassword(false);
        
        // 환불 계좌 모달 띄우기
        setOpenUserAccountInsert(false);

        // 환불 계좌 정부 입력창 1
        setUserAccount01(false);

        // 회원 탈퇴 모달 띄우기
        setOpenUserDelete(false);

        // 회원 탈퇴 다시 묻는 모달 띄우기
        setOpenReCheckUserDelete(false);
        
        // SNS계정 연동 모달 띄우기
        setOpenUserSNSConnect(false);

        // 소득공제용 정보 변경 모달 띄우기
        setUpdateUserAccount(false);

        setOpenInsertUserAccountPAY(false);

        setOpenUpdateUserRepay(false);

        props.setState(10);
    };


    // 엔터버튼 눌렀을 때 함수 실행
    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            updateButton();
            handleClose();
        }
    }

    function checkGender(){
        if(props.user.user_gender === "M"){
            setman(true);
        }else{
            setwoman(true);
        }
    }

    const [userAccount01, setUserAccount01] = useState(false);

    // 환불 계좌 등록 버튼 눌렀을 때 onoff버튼
    function openAccountButton(){
        if(user_account.user_bank !== '' && user_account.user_bank !== null){
            alert('이미 등록된 계좌가 있습니다.');
        }else{
            setUserAccount01(true);
        }
    }

    // 유저 탈퇴 처리 함수
    function deleteUser(){
        alert('회원탈퇴 처리가 완료됐습니다.');
        ApiService.deleteUserInfo(Change_user);
        handleClose();
        window.location.reload(); // 로그인 페이지로 이동시켜야할듯
    }

    function update_user_account(){
        setUpdateUserAccount(true);
    }

    function update_user_repay(){
        setOpenUpdateUserRepay(true);
    }

    function insertUserRepay(){
        if(user_account.user_repay !== '' && user_account.user_repay !== null){
            alert('이미 등록된 정보가 있습니다.');
        }else{
        setOpenInsertUserAccountPAY(true);
       }
    }



    return (
        <>
           <Grid item xs={6} sm={8}>
                    <div style={{fontSize:'13px', textAlign:'left'}}>회원정보변경</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>이메일 주소</div>
                            {/* <div><button name="change_email" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>변경하기</button></div> */}
                        </div>

                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user_email}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>이름</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={user_name}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerLabel}>생년월일</div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_birthday}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>휴대폰번호</div>
                            <div><button name="change_phone" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>변경하기</button></div>
                        </div>
                        <div style={{textAlign:'left'}}><input disabled style={centerInput} value={props.user.user_phone}></input></div>
                    </div>

                    <div style={centerDiv}>
                        <div style={centerDivBetween}>
                            <div style={centerLabel}>비밀번호</div>
                            <div><button name="change_password" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>변경하기</button></div>
                        </div>
                    </div>

                    <div style={{fontSize:'13px', textAlign:'left', marginTop:'50px'}}>부가정보(선택)</div>
                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'20px 0px 20px 0px', paddingBottom:'0px'}}/>

                    {/* {checkGender()} */}
                    <div style={centerDiv}>
                        <div style={centerLabel}>성별</div>
                        <div style={{fontSize:'14px', marginTop:'10px', justifyContent:'left', display:'flex'}}>
                            <input type='radio' name='gender' value='M' checked={man} disabled /> 남 
                            <input type='radio' name='gender' value='W' checked={woman} disabled /> 여
                        </div>
                    </div>

                    <div style={spaceBetween}><span>환불계좌/현금영수증</span> <span><button name="user_account_insert" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>더보기</button></span></div>
                    <hr style={bottomHr}/>

                    <div style={spaceBetween}><span>개인계정 연결관리</span> <span><button name="user_sns_connect" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>더보기</button></span></div>
                    <hr style={bottomHr}/>

                    <div style={spaceBetween}><span>회원탈퇴</span> <span><button name="user_delete" onClick={handleOpen} style={{border:'0px', fontSize:'12px', borderRadius:'0px', color:'gray', backgroundColor:'white'}}>신청</button></span></div>
                    <hr style={bottomHr}/>

                    <div style={{marginBottom:'80px'}}></div>
                    

                </Grid>

                        <ModalEmail open={open} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} />

                        <ModalPhone openChangePhone={openChangePhone} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} />

                        <ModalPassword openChangePassword={openChangePassword} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} />
                    
                        <ModalAccount user_name={user_name} openUserAccountInsert={openUserAccountInsert} user_email={user_email} user_account={user_account} centerDivBetween={centerDivBetween} openAccountButton={openAccountButton} updateUserAccount={updateUserAccount} UpdateUserAccount={UpdateUserAccount} openUpdateUserRepay={openUpdateUserRepay} UpdateUserRepay={UpdateUserRepay} openInsertUserAccountPAY={openInsertUserAccountPAY} InsertUserAccountPAY={InsertUserAccountPAY} userAccount01={userAccount01} UserAccount={UserAccount} handleClose={handleClose} onChange={onChange} onKeyPress={onKeyPress} updateButton={updateButton} update_user_account={update_user_account} insertUserRepay={insertUserRepay} update_user_repay={update_user_repay} />

                        <ModalSNS openUserSNSConnect={openUserSNSConnect} handleClose={handleClose} />

                        <ModalDeleteUser openUserDelete={openUserDelete} handleClose={handleClose} handleOpen={handleOpen} openReCheckUserDelete={openReCheckUserDelete} deleteUser={deleteUser} />
                 
        </>
    )    
}

const centerDivBetween = {
    display:'flex', justifyContent:'space-between'
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

const spaceBetween = {
    fontSize:'13px', marginTop:'40px', display:'flex', justifyContent:'space-between'
}

const bottomHr = {
    height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'8px 0px 30px 0px', paddingBottom:'0px'
}

export default MemberInfoComponent

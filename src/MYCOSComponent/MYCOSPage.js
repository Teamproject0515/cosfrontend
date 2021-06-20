import React,{useState, useEffect} from 'react'
import ManagerSidebar from './MyCOSSidebar';
import MemberInfoComponent from './Product/MemberInfoComponent';
import DeliveryInfoComponent from './Product/DeliveryInfoComponent';
import AddressinfoComponent from './Product/AddressinfoComponent';
import MyCOSDashBoardComponent from './MyCOSDashBoardComponent';
import {Grid} from '@material-ui/core';
import ApiService from '../ApiService';


function ManagerPage() {

    const [memberinfo, setMemberinfo] = useState(false);
    const [deliveryinfo, setDeliveryinfo] = useState(false);
    const [addressinfo, setAddressinfo] = useState(false);
    const [dashBoard, setDashBoard] = useState(true);
    const [sidebarshow, setSidebarshow] = useState(false);

    const memberinfoOpen = ()=>{
        setMemberinfo(true);
        setDeliveryinfo(false);
        setAddressinfo(false);
        setDashBoard(false);
    }

    const deliveryinfoOpen= ()=>{
        setDeliveryinfo(true);
        setMemberinfo(false);
        setAddressinfo(false);
        setDashBoard(false);
    }

    const addressinfoOpen= ()=>{
        setAddressinfo(true);
        setDeliveryinfo(false);
        setMemberinfo(false);
        setDashBoard(false);
    }

    const dashBoardOpen= ()=>{
        setDashBoard(true);
        setAddressinfo(false);
        setDeliveryinfo(false);
        setMemberinfo(false);
    }

    let user_email = 'suovj140@gmail.com';

    let [userinfo, setuserinfo] = useState([]);
    const[state, setState] = useState(0);

    useEffect(() => {
        ApiService.getUserByID(user_email)
        .then( res => {
            setuserinfo(res.data);
            // console.log(userinfo);
            setState(0);
            // console.log("state : "+state);
            // console.log("user_seq : "+userinfo.user_seq);
        })
        .catch(err => {
            console.log('userinfo print error!', err);
        })
    },[user_email, state]);

    let [check_password, setcheck_password] = useState(null);
    const [openErrorPassword, setOpenErrorPassword] = useState(false);

    // 비밀번호 입력창에서 enter치면 checkPW 함수 불러오기
    const onKeyPress = (e) => {
        if(e.key === 'Enter'){
            checkPW();
        }
    }

    function checkPW(){
        if(userinfo.user_password === check_password){
            window.localStorage.setItem("checkpw", true);
            // alert('맞아요 따란');
            setSidebarshow(true);
            memberinfoOpen();
        }else{
            setOpenErrorPassword(true);
            window.localStorage.setItem("checkpw", false);
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
                    <div style={{textAlign:'left',fontSize:'25px', marginBottom:'20px'}} onClick={() => dashBoardOpen()}>My COS</div>
                </Grid>
                {dashBoard && <MyCOSDashBoardComponent user={userinfo} checkPW={checkPW} onChangePW={onChangePW} onKeyPress={onKeyPress} openErrorPassword={openErrorPassword}/>}
                {sidebarshow && <ManagerSidebar memberinfoOpen={memberinfoOpen} deliveryinfoOpen={deliveryinfoOpen} addressinfoOpen={addressinfoOpen}/>}
                {memberinfo && <MemberInfoComponent user={userinfo} checkPW={checkPW} onChangePW={onChangePW} onKeyPress={onKeyPress} state={state} setState={setState}/>}
                {deliveryinfo && <DeliveryInfoComponent  user={userinfo}/>}
                {addressinfo && <AddressinfoComponent  user={userinfo}/>}
            </Grid>
        </div>
    )
}

export default ManagerPage

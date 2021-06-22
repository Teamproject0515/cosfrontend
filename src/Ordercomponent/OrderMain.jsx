import {Button} from '@material-ui/core';
import ApiService from '../ApiServiceChu';
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';


const OrderMain=()=>{
    const [userInfo,setUserInfo] = useState({
        user_email:"",
        user_name:"",
        user_phone:""
    });
    const imgUrl = "/images/";
    const [radioStatus,setRadioStatus] = useState("option1");
    const [addresses,setAddresses] = useState([]);
    const [innerRadioStatus,setInnerRadioStatus] = useState(0);
    const [carts,setCarts] = useState([]);


    let order={
        userId:"",
        userName:"",
        address:"",
        detailAddress:"",
        postCode:"",
        orderProductAmount:0,
        orderName:""
    }
    

    useEffect(()=>{
        reloadAddress();
        reloadOrderList();
        reloadUserInfo();
    },[]);

    const changeRadio = (e)=>{
        setRadioStatus(e.target.value);
    }
    const changeInnerRadio = (e)=>{
        setInnerRadioStatus(e.target.value);
        console.log('setInnerRadioStatus', innerRadioStatus);
    }

    const reloadAddress = () =>{
        ApiService.showAddressList()
            .then(res => {
                setAddresses(res.data);
                console.log('setSddresses',res.data);
            })
            .catch(err => {
                console.log('reloadAddressList() Error!',err);
            })
    }

    const reloadOrderList = () =>{
        ApiService.showCartList()
            .then(res => {
                setCarts(res.data);
                console.log('setCarts',res.data);
                order={
                    userId:carts[0]?.userId,
                    orderName:carts[0]?.productName
                }
                console.log('order',order);
            })
            .catch(err => {
                console.log('reloadBoardList() Error!',err);
            })
        }
    const reloadUserInfo=()=>{
        ApiService.showUserInfo()
            .then(res=>{
                setUserInfo(res.data);
                console.log('setUserInfo',res.data);
            })
            .catch(err => {
                console.log('reloadUserInfo() Error!',err);
            })
    }

    const kakaoPay = ()=>{
        ApiService.kakaoPay()
        .then(res=>{
            window.location.assign(res.data);
        })
        .catch(
            console.log("오류 발생")
        )
    }
    
    const submitOrderInfo=()=>{
        
        console.log(order)
        order={
            postCode:addresses[innerRadioStatus].postCode,
            userName:addresses[innerRadioStatus].userName,
            address:addresses[innerRadioStatus].address,
            detailAddress:addresses[innerRadioStatus].detailAddress,
            orderProductAmount:carts.length,
        }

        ApiService.addOrderInfo(order)
        .catch(err=>{
            console.log("addOrderInfo 에러",err);
        });
    }
    const submitSomeThing=()=>{
        submitOrderInfo();
        kakaoPay();
    }


    
    return(
        <div>
            <div style={{fontSize:'13px',textAlign:"center",marginTop:"50px",marginBottom:'20px'}}>주문서</div>
            <div className="oderList">
                        {carts.map((cart,index) =>
                            <div key={cart.cartId}>
                                <img src={imgUrl+(cart.productImagePath).split(',')[0]}/>
                                <p>{cart.productName}</p>
                                <p>가격: {cart.productPrice}</p>
                                <p>사이즈: {cart.productSize}</p>
                                <p>컬러: {cart.productColor}</p>
                                <p>수량: {cart.amount}</p>
                                <div className="cartprice">
                                    <p>{cart.money}</p>
                                </div>
                                <div>
                                    <hr style={{marginTop:"60px",marginBottom:"30px",color:"lightgray"}}></hr>
                                </div>
                            </div>
                        )}
                </div>
            <div className="order_user">
                <p>1.주문 고객 정보</p>
                <hr></hr>
                <p>{userInfo.user_email}</p>
                <p>{userInfo.user_name}</p>
                <p>{userInfo.user_phone}</p>
            </div>
            <hr></hr>
            <div className="adress_info">
                <p style={{marginLeft:"20px"}}>2.배송지 정보</p>
                <hr></hr>
                <div className="address_radio" style={{marginLeft:"10px"}}>
                    <label>
                    <input type="radio"
                    value="option1"
                    checked={radioStatus=="option1"}
                    onChange={changeRadio}/>
                    배송지 목록
                    </label>
                    <label>
                    <input type="radio"
                    value="option2"
                    checked={radioStatus=="option2"}
                    onChange={changeRadio}/>
                    새로 입력
                    </label>
                </div>
                <hr></hr>
                <div style={radioStatus=="option1"?{}:{display:"none"}} >
                    <div className="addressListRadio" style={{marginLeft:"10px"}}>
                        {addresses.map((address,index) =>
                            <label key={index}>
                            <input type="radio"
                            value={index}
                            checked={innerRadioStatus==index}
                            onChange={changeInnerRadio}/>
                            {index+1}번 배송지
                            </label>
                        )}
                      </div>
                      <hr></hr>
                      <div>
                      {addresses.map((address,index)=>
                      <div style={innerRadioStatus==index?{marginLeft:"10px"}:{display:"none"}}>
                            <p>수신자: {address.userName}</p>
                            <p>우편번호: {address.postCode}</p>
                            <p>주소: {address.address}</p>
                            <p>상세 주소: {address.detailAddress}</p>
                        </div>
                        )}
                      </div>
                </div>
                <div style={radioStatus=="option2"?{}:{display:"none"}}>
                    <p>김영한</p>
                    <p>010-3227-2759</p>
                    <p>여의도대방로 158번길 29</p>
                </div>
                <hr></hr>
            </div>
            <div className="payAPI" style={{marginLeft:"10px"}}>
                <p>4.결제</p>
                <Button onClick={submitSomeThing}>결제하기</Button>
            </div>
            <div>
            </div>

        </div>
    );

}

export default OrderMain;
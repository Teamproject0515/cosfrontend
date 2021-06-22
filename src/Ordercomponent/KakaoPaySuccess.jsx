import {Button} from '@material-ui/core';
import ApiService from '../ApiServiceChu';
import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link,RouteComponentProps } from 'react-router-dom';
import "./css/ordermain.css";
const KakaoPaySuccess=(props)=>{
    const [orderInfo,setOrderInfo] = useState({
        amount:[],
        approved_at:"",
        item_name:""
    });



    const {search} = props.location;


    const test = {
        pg_token:search.split("=")[1]
    }
 


    useEffect(()=>{
        kakaoPayInfoPull(test.pg_token);
    },[])

    const kakaoPayInfoPull=(pg_token)=>{
        ApiService.kakaoPayTest(pg_token)
        .then(res=>{
            setOrderInfo(res.data)
        })
        .catch(
            console.log("카카오페이 주문정보 오류 발생")
        )

    }



    return(
        <div>
            
            <div style={orderInfo.amount!=null?{}:{display:"none"}}>
                <h2>상품 주문이 완료되었습니다.</h2>
                <h2>상품명 : {orderInfo.item_name}</h2>
                <h2>승인 시간: {orderInfo.approved_at}</h2>
                <h2>총 주문 금액: {orderInfo.amount!=null?orderInfo.amount["total"]:"0"}</h2>
                <div>
                <Link to="/" style={{textDecoration: 'none'}}>
                                    <Button >쇼핑 계속하기</Button>
                </Link>
                <Link to="/order" style={{textDecoration: 'none'}}>
                                    <Button >주문 내역 확인</Button>
                </Link>
                </div>
            </div>
            <div style={orderInfo.amount!=null?{display:"none"}:{}}>
                <h2>잘못된 접근입니다.</h2>
                <div>
                <Link to="/" style={{textDecoration: 'none'}}>
                                    <Button >홈으로 되돌아가기</Button>
                </Link>
                </div>
            </div>
            
        </div>
    );

}

export default KakaoPaySuccess;
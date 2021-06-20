import React, { useState, useEffect } from 'react';
import AxiosApiService from '../../AxiosApiService'
import Sidebar from '../Product/component/Sidebar'
import OrderDetailBox from './component/OrderDetailBox'
import { useHistory } from "react-router-dom";
function OrderDetail({deliveryStatus }) {
    //서버에서 받아올 유저 저장소
    const [orders, setOrders] = useState({ order: [] });
    const [productImg, setProductImg] = useState({ img: [] });
    const imgUrl = "/imgs/";
    let history = useHistory();
    //새로고침시에만 실행
    useEffect(() => {
        getOrderDetail()
    }, [])

    //주문상세 가져옴
    const getOrderDetail = () => {
        let order_detail_num = window.localStorage.getItem('order_detail_num');
        let user_email = window.localStorage.getItem('user_email');
        console.log(order_detail_num, user_email);
        AxiosApiService.orderDetail(order_detail_num, user_email)
            .then(res => {
                setOrders({ order: res.data });
                setProductImg({ img: res.data.product_img.split(",") });
            })
            .catch(err => {
                history.push('/managerDefaultErr');
                console.log('getOrderDetail() Error!', err);
            })
    }
    return (
        <>

            <h1 style={{ marginTop: '30px' }}>주문 상세</h1>
            <div style={{ width: '100%', marginTop: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <div className="detail_wapper">
                    <div className="detail_img_box">
                        <Sidebar productImg={productImg} />
                        <img className="detail_img" src={imgUrl + productImg.img[0]} />
                    </div>
                    <div className="detail_category">
                        <OrderDetailBox orders={orders} />
                        <div className="detail_box_gender_category">
                            <div style={{ width: '100%' }} className="detail_box_low">
                                <p style={{ marginBottom: '5px' }}>배송 상태 변경</p>
                                <button className='optionPage' onClick={() => deliveryStatus('배송중', orders.order.order_id)} style={{ border: '1px solid lightgray', width: '100%', textAlign: 'left', marginTop: '0px' }}>
                                    배송중</button>
                                <button className='optionPage' onClick={() => deliveryStatus('배송완료', orders.order.order_id)} style={{ border: '1px solid lightgray', width: '100%', textAlign: 'left', marginTop: '5px' }}>
                                    배송완료</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetail

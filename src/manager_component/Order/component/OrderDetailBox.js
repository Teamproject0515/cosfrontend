import React from 'react'

function OrderDetailBox({orders}) {
    return (
        <>
            <div className="detail_box_gender_category">
                <div style={{ width: '100%' }} className="detail_box_low">
                    <p style={{ marginBottom: '5px' }}>상품 제목</p>
                    <div style={{ width: '100%' }} className="detail_box_low_label">
                        <label >{orders.order.product_title}</label>
                    </div>
                </div>
            </div>
            <div className="detail_box_gender_category">
                <div style={{ width: '100%' }} className="detail_box_low">
                    <p style={{ marginBottom: '5px' }}>입금 가격</p>
                    <div style={{ width: '100%' }} className="detail_box_low_label">
                        <label >{orders.order.money}원</label>
                    </div>
                </div>
            </div>
            <div className="detail_box_gender_category">
                <div style={{ width: '100%' }} className="detail_box_low">
                    <p style={{ marginBottom: '5px' }}>유저 이메일</p>
                    <div style={{ width: '100%' }} className="detail_box_low_label">
                        <label >{orders.order.user_email}</label>
                    </div>
                </div>
            </div>
            <div className="detail_box_gender_category">
                <div style={{ width: '100%' }} className="detail_box_low">
                    <p style={{ marginBottom: '5px' }}>유저 이름</p>
                    <div style={{ width: '100%' }} className="detail_box_low_label">
                        <label >{orders.order.user_name}</label>
                    </div>
                </div>
            </div>
            <div className="detail_box_gender_category">
                <div style={{ width: '100%' }} className="detail_box_low">
                    <p style={{ marginBottom: '5px' }}>주소</p>
                    <div style={{ width: '100%' }} className="detail_box_low_label">
                        <p style={{ textAlign: 'left' }}>{orders.order.address}<br></br>{orders.order.detail_address}</p>
                    </div>
                </div>
            </div>
            <div className="detail_box_gender_category">
                <div style={{ width: '100%' }} className="detail_box_low">
                    <p style={{ marginBottom: '5px' }}>배송 상태</p>
                    <button className='optionPage' style={{ border: '1px solid lightgray', width: '100%', textAlign: 'left', marginTop: '0px', }}>
                        {orders.order.order_status}</button>
                </div>
            </div>
        </>
    )
}

export default OrderDetailBox

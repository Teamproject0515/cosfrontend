import React from 'react'

function DetailCategory({products}) {
    //ProductDetail에서 사용
    return (
        <>
            <div className="detail_box_gender_category">
                        <div className="detail_box_low">
                            <p style={{ marginBottom: '10px' }}>상품 성별</p>
                            <div className="detail_box_low_label">
                                <label >{products.product[0].product_gender}</label>
                            </div>
                        </div>
                        <div className="detail_box_low">
                            <p style={{ marginBottom: '10px' }}>상품 종류</p>
                            <div className="detail_box_low_label">
                                <label >{products.product[0].product_category}</label>
                            </div>
                        </div>
                    </div>
                    <div className="detail_box">
                        <p style={{ marginBottom: '10px' }}>상품 판매량</p>
                        <div className="detail_box_name" style={{ width: '60%' }}>
                            <label >{products.product[0].product_saled}</label>
                        </div>
                    </div>

                    <div className="detail_box">
                        <p style={{ marginBottom: '10px' }}>상품 등록일</p>
                        <div className="detail_box_name" style={{ width: '60%' }}>
                            <label >{products.product[0].product_date}</label>
                        </div>
                    </div>
                    <div className="detail_box">
                        <p style={{ marginBottom: '10px' }}>상품 내용</p>
                        <div className="detail_box_name" style={{ width: '60%' }}>
                            <label >{products.product[0].product_content}</label>
                        </div>
                    </div>
        </>
    )
}

export default DetailCategory

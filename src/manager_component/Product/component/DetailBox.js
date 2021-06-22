import React from 'react'

function DetailBox({ products }) {
    //ProductDetail에서 사용
    return (
        <>
            <div className="detail_title">
                <label>{products.product[0].product_title}</label>
            </div>
            <div className="detail_price">
                <label>{products.product[0].product_price}원</label>
            </div>
            <div className="detail_box">
                <p style={{ marginBottom: '10px' }}>COLOR</p>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    {products.product.map(product =>
                        <div className="detail_box_name">
                            <div style={{ backgroundColor: product.product_color, width: '20px', height: '20px' }}></div>
                            <label style={{ marginLeft: "10px" }}>{product.product_color}</label>
                        </div>
                    )}
                </div>
            </div>
            <div className="detail_box">
                <p style={{ marginBottom: '10px' }}>SIZE</p>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    {products.product.map(product =>
                        <div className="detail_box_name">
                            <label >{product.product_size}</label>
                        </div>
                    )}
                </div>
            </div>
            <div className="detail_box">
                <p style={{ marginBottom: '10px' }}>상품 재고</p>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    {products.product.map(product =>
                        <div className="detail_box_name">
                            <label >{product.product_stock}</label>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default DetailBox

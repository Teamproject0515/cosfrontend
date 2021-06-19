import React from 'react'

function UpdateComponent({products,onTitle,onPrice,onMaterial,selectGender,
    selectCategory,tablePlus,tableMinus,onColor,onSize,onStock,onContent}) {
    //ProductUpdate에서 사용
    return (
        <>
        <div className="product_update_catagoryBox">
            <label className="product_update_label">상품 제목</label>
            <input className="product_update_input" onChange={onTitle} placeholder={products[0].product_title} />
        </div>

        <div className="product_update_catagoryBox">
            <label className="product_update_label">상품가격</label>
            <input className="product_update_input" onChange={onPrice} placeholder={products[0].product_price} />
        </div>

        <div className="product_update_catagoryBox">
            <label className="product_update_label">상품재질</label>
            <input className="product_update_input" onChange={onMaterial} placeholder={products[0].product_material} />
        </div>

        <div className="product_update_rowBox">
            <div className="product_update_genderCategory">
                <p style={{ marginBottom: '10px', fontWeight: '600' }}>성별</p>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <select className='genderCategory_selectbox' onChange={selectGender} >
                        <option value="MAN">MAN</option >
                        <option value="WOMAN">WOMAN</option >
                        <option value="KID">KID</option>
                    </select>
                </div>
            </div>

            <div className="product_update_genderCategory">
                <p style={{ marginBottom: '10px', fontWeight: '600' }}>종류</p>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <select className='genderCategory_selectbox' onChange={selectCategory} >
                        <option value="상의">상의</option >
                        <option value="하의">하의</option >
                        <option value="치마">치마</option >
                        <option value="악세사리">악세사리</option >
                        <option value="신발">신발</option >
                    </select>
                </div>
            </div>
        </div>
        <div style={{ display: 'flex', width: '100%', marginBottom: '10px' }}>
            <button className='optionPage' style={{ marginTop: '5px', width: '94%' }} onClick={tablePlus}>옵션추가</button>
        </div>
        <div className="product_update_catagoryBox">
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                {products.map((product, index) =>
                    <>
                        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginTop: '10px' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <p style={{ marginBottom: '10px', fontWeight: '600', textAlign: 'left' }}>색상</p>
                                <button className='optionPage' style={{ width: '40%', marginLeft: '5px', marginTop: '1px', height: '70%', fontSize: '5px' }}
                                    onClick={() => tableMinus(index)}>삭제</button>
                            </div>
                            <select className='update_selectbox' onChange={(e) => onColor(e, index)} >
                                <option value="BLACK">BLACK</option >
                                <option value="WHITE">WHITE</option >
                                <option value="BLUE">BLUE</option >
                                <option value="GRAY">GRAY</option >
                                <option value="YELLOW">YELLOW</option >
                            </select>
                        </div>
                    </>
                )}
            </div>
        </div>
        <div className="product_update_catagoryBox">
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                {products.map((product, index) =>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <p style={{ marginBottom: '10px', fontWeight: '600', textAlign: 'left' }}>사이즈</p>
                        <select className='update_selectbox' onChange={(e) => onSize(e, index)}>
                            <option value="XS">XS</option >
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                    </div>
                )}
            </div>
        </div>
        <div className="product_update_catagoryBox">
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                {products.map((product, index) =>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <p style={{ marginBottom: '10px', fontWeight: '600', textAlign: 'left' }}>재고</p>
                        <input className="product_update_stock" onChange={(e) => onStock(e, index)} placeholder={product.product_stock} />
                    </div>
                )}
            </div>
        </div>
        <p style={{ marginBottom: '10px', fontWeight: '600' }}>상품 내용</p>
        <div className="product_content_scroll">
            <textarea className="product_update_textarea" onChange={onContent} placeholder={products[0].product_content} />
        </div>
    </>
    )
}

export default UpdateComponent

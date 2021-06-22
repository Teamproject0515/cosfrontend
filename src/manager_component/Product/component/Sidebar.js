import React from 'react'

function Sidebar({productImg}) {
    const imgUrl = "/imgs/";
    //ProductDetail,ProductUpdate,orderDetail에서 사용
    return (
        <>
           <div className="priview_sidebar">
                    {productImg.img.map((imgs,index) =>
                        <img className="priview_sidebar_img" src={imgUrl + productImg.img[index]} />
                    )}
                </div>
        </>
    )
}

export default Sidebar

import React, { useState, useRef } from 'react';
import '../managerCss/productinsert.css'
import AxiosApiService from '../../AxiosApiService';
import { useHistory } from "react-router-dom";
import CancelIcon from '@material-ui/icons/Cancel';
import Sidebar from './component/Sidebar';
function ProductInsert({ productInsertOptionOpen,saveImg }) {
    let history = useHistory();
    const [product_title, setProduct_title] = useState('');           //제목
    const [product_gender, setProduct_gender] = useState('남자');         //상품성별
    const [product_category, setProduct_category] = useState('상의');     //상품카테고리
    const [product_price, setProduct_price] = useState(0);             //상품가격
    const [product_content, setProduct_content] = useState('');       //상품내용
    const [imgPriView, setImgPriView] = useState([]);
    const [imgStr, setImgStr] = useState([]);
    const [product_img, setProduct_img] = useState([]);             //상품이미지
    const [product_material, setProduct_material] = useState();
    const [sidebarOpen, setsidebarOpen] = useState(true);
    const imageInput = useRef();
    
    const sidebarIsOpen = () => {
        setsidebarOpen(true);
    }
    function onTitle(e) {
        setProduct_title(e.currentTarget.value);
    }
    function selectGender(e) {
        setProduct_gender(e.currentTarget.value);
    }
    function selectCategory(e) {
        setProduct_category(e.currentTarget.value);
    }
    function onPrice(e) {
        setProduct_price(e.currentTarget.value);
    }
    function onContent(e) {
        setProduct_content(e.currentTarget.value);
    }
    function onMaterial(e) {
        setProduct_material(e.currentTarget.value);
    }

    const ImgDelete = (e, index) => {
        console.log(index);
        //imgPriview의 0번째부터 index번째를 추출
        setImgPriView(imgPriView.slice(0, index));
        setImgStr(imgStr.slice(0, index));
    }
    //받은 이미지 미리보기
    function onImg(e) {
        if (e.target.files.length > 0) {
            //0번째 이미지를 받아 imageFile에 저장
            const imageFile = e.target.files[0];
            const imageUrl = URL.createObjectURL(imageFile);
            //배열 더하기
            setProduct_img(product_img.concat(e.target.files[0]));
            //배열 더하기
            setImgPriView(imgPriView.concat([{ img: imageUrl }]));
            setImgStr(imgStr.concat(imageFile.name));
        }
    }
    //클릭시 input [type=file] 이 열림
    const fileClick = () => {
        imageInput.current.click();
    }

    function optionPage(e) {
        e.preventDefault();
        //옵선설정으로 넘어가기 전 이미지 저장
        saveImg(product_img);
        let product = {
            product_title: product_title,
            product_gender: product_gender,
            product_category: product_category,
            product_price: product_price,
            product_content: product_content,
            //join 배열을 ,기준으로 문자열로 
            product_img: imgStr.join(','),
            product_material: product_material
        }
        //객체 저장시 String으로 보내줘야해서 JSON.stringify(object)
        window.localStorage.setItem('product', JSON.stringify(product));
        productInsertOptionOpen();
    }

    return (
        <>
            <h1 style={{ marginTop: '30px' }}>상품등록</h1>
            <div className="sticky">
            <div className="img-category">
                {sidebarIsOpen &&
                    <div className="priview_sidebar">
                    {imgPriView.map((priview,index)=>
                          <img className="priview_sidebar_img" src={priview.img}/>
                    )}
                    </div>
                }
                <div className="priview_img_box">
                    <div className="priview_img" >
                        {imgPriView.map((priview, index) =>
                            <>
                                <div className="priview_img_index">
                                    <button className="priview_button" onClick={(e) => ImgDelete(e, index)}><CancelIcon /></button>
                                    <img className="priview" src={priview.img} />
                                </div>
                            </>
                        )}
                    </div>

                </div>
            </div>
            <div className='displaybox'>
                    <div className="title_box">
                        <label className="titleLabel">상품 제목</label>
                        <input className="product_title" name="product_title"
                            type="text" placeholder="상품제목" onChange={onTitle}></input>
                    </div>
                    <div className="select-box">
                        <div className="select-box-div">
                            <label className="selectLabel">성별</label>
                            <select className="select_category" onChange={selectGender} defaultValue="남자">
                                <option value="남자">남자</option>
                                <option value="여자">여자</option>
                            </select>
                        </div>
                        <div className="select-box-div">
                            <label className="selectLabel">카테고리</label>
                            <select className="select_category" onChange={selectCategory} defaultValue="상의">
                                <option value="상의">상의</option>
                                <option value="하의">하의</option>
                                <option value="치마">치마</option>
                                <option value="악세사리">악세사리</option>
                                <option value="신발">신발</option>
                            </select>
                        </div>
                    </div>

                    <div className="product_price_stock">
                        <label className="selectLabel">상품 가격</label>
                        <input className="product_price" name="product_price"
                            type="text" placeholder="상품가격" onChange={onPrice}></input>
                    </div>
                    <div className="product_price_material">
                        <label className="selectLabel">상품 재질</label>
                        <input className="product_price"
                            type="text" placeholder="상품 재질" onChange={onMaterial}></input>
                    </div>
                    <div className="content_box">
                        <label className="selectLabel">상품설명</label>
                        <div className="content_box_scroll">
                            <textarea type="text" name="product_content" className="product_content"
                                placeholder="상품설명" onChange={onContent}></textarea>
                        </div>
                    </div>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <button className='optionPage' type="button" onClick={fileClick}>이미지 올리기</button>
                        <button className='optionPage' type="button" onClick={optionPage}>옵션 설정</button>
                        <input ref={imageInput} style={{ display: 'none' }} multiple="multiple" name="product_img" type='file' onChange={onImg} />
                    </div>

                </div>
                </div>
        </>
    )
}
export default ProductInsert

import React, { useState, useEffect} from 'react';
import ApiService from "../../ApiService";
import Modal from "./Product_Info_Modal";
import {useHistory } from "react-router-dom";
import ModalLoginForm from "../../Login/ModalLoginForm";

import '../css/product_info.css';


import dlalwl from "../images/01.jpg"
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {Grid, Button} from '@material-ui/core';

function ProductInfoComponent(props){

    const imgUrl = '/imgs';
    const text = <p>영업일 기준 1~3일 내 배송<br/>
    배송비 무료 | 무료 반품<br/><br/>
    목적지: 대한민국 | 배송료 무료 영업일 기준 1~3일 소요됩니다. 반품 배송비 무료<br/><br/>
    배송에 대한 자세한 내용은 여기를 클릭하십시오.<br/>
    우리의 반품 및 환불 정책에 대한 자세한 내용은 여기를 참조하십시오.<br/><br/>
    일부 군사지역은 배송이 불가능할 수 있습니다.<br/><br/>
    위생상의 이유로 속옷 및 이어링 제품은 반품이 불가합니다. (결함의 경우 제외)</p>;

    const [product, setproduct] = useState([]);
    const [product_info, setproduct_info]  = useState(text);
    const [productop, setproductop] = useState([]);
    const [productcart, setproductcart] = useState();
    const setcolor = Array.from(new Set(product && product.map(option => option.product_color )));
    const setimgs = Array.from(new Set(product && product.map(option => option.imgs)));
    const history = useHistory(); 
    let shopcart;
    let prop = [];


    //장바구니 모달////////
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }
    

    const closeModal = () => {
        setModalOpen(false);
    }

    /////////로그인 모달////////
    const [modalLoginOpen, setModalLoginOpen] = useState(false);

    const openloginModal= () =>{
        setModalLoginOpen(true);
    }

    const closeloginModal= ()=>{
        setModalLoginOpen(false);
    }
    ////////////////////////////yarns

    //상품 불러오기
    useEffect( () => {
        ApiService.ProductByID(window.localStorage.getItem("ProductID"))
        .then( res => {
            setproduct(res.data);
        })
        .catch(err => {
            console.log('loadProduct() 에러',err)        
        })
    },[]);


    //사이즈 선택후 
    function chang(e){
        productop && productop.map(check => {if(check.product_size === e.target.value) shopcart = check; })

        setproductcart(shopcart);
    }

    //카트저장
    function savecart(e){
        e.preventDefault();
        
        if(sessionStorage.getItem("user") != null){
            let cart={
                user_email: sessionStorage.getItem("user"),
                product_seq : productcart.product_seq,
                amount : 1
            }

            console.log("장바구니", cart);

            ApiService.addCart(cart)
            .then( res =>{
                history.push("/product-detail");
            })
            .catch(err=>{
                console.log("savecart 에러",err);
            });
        
            openModal();
        }
        else{
            //history.push("/signIn");
            openloginModal();
        }
            
    }


    //색상 변경
    function changcolor(e){  
        setproductcart(null);
        product && product.map(check => {if(check.product_color === e.target.value) prop.push(check);    })

        setproductop(prop);
   }

   //사이즈 버튼
    function sizebtn(op){
        let Esize = ["XS", "S", "M", "L", "XL"];

        return  <div className ="radiosize">
                    {Esize.map(tsize => 
                        {return <div style ={{marginRight: "5%"}}>
                            <input type ="radio" id = {tsize}  name = "productsize" value = {tsize || ''} onChange ={chang} disabled = {!(op && op.some(size => {if(size.product_size === tsize && size.product_stock !== 0) return true; else return false;}))}/>
                            <label  for = {tsize}>{tsize}</label>  
                        </div>
                        })
                    }  
                </div>
    }  

    return (
        <div className = "productinfo">
            <div className="wrap">

                <div className = "productinfo_img">
                    <div className = "img_sub">
                        <div className = "img_sub_sticky">
                            {console.log(setimgs)}
                            {setimgs[0] && setimgs[0].map(img => {return  <img src = {imgUrl + '/' + img} style = {{width: "60px", height: "80px"}}/> })}                           
                        </div>
                    </div>
                    <div className = "img_main" >
                        {setimgs[0] && setimgs[0].map(img => {return  <img src = {imgUrl + '/' + img} style = {{width: "600px", height: "800px"}}/> })} 
                    </div> 
                </div>
                
                <div className = "productinfo_detail">
                    <div className = "detail_info">
                        <div className = "detail_info_title">
                            <div className = "title" style = {{fontSize : "21px"}}>{product[0]?.product_title}</div>
                            <div className = "price">{product[0]?.product_price}원</div>
                        </div>
                        <div className = "detail_info_option">
                            <div className = "colorbtn">
                                <FormControl>
                                <InputLabel style = {{minWidth : "120px"}}>COLOR</InputLabel>
                                <Select name = "optioncolor" onChange = {changcolor} style = {{minWidth : "240px"}}>
                                    {setcolor && setcolor.map(color =>
                                        <option value = {color || ''}> {color} </option>
                                    )}
                                </Select>
                                </FormControl>
                            </div>
                            <div className = "size">SIZE</div>
                            <div className = "product_cart_btn">
                                <FormControl>
                                    {sizebtn(productop)}
                                    <div className = "cart_btn"> 
                                        <Button variant="contained" type = "submit" onClick = {savecart} disabled = {productcart == null} style = {{width : "450px"}}>장바구니</Button>
                                    </div>
                                    <div className = "closeevent"  onClick ={closeModal}>
                                        <Modal open={ modalOpen } close={ closeModal } header="Success">
                                            <div className = "modal_info">
                                                <div style = {{marginRight : "10%"}} className = "modal_img">
                                                    <img src = {imgUrl + '/' + productcart?.imgs[0]} style = {{width: "60px", height: "80px"}}/>
                                                </div>
                                                <div className = "modal_info_datail">
                                                    상품명 : {productcart?.product_title}<br/>
                                                    가격 : {productcart?.product_price}원<br/>
                                                    <div style = {{display: "flex"}}> 색상 : <div style = {{width: "10px", height: "10px", backgroundColor : productcart?.product_color, margin : "2%"}}></div>{productcart?.product_color}</div>
                                                    사이즈 : {productcart?.product_size}<br/>                                                   
                                                </div>
                                            </div>
                                        </Modal>
                                    </div>
                                    <div>
                                        <ModalLoginForm open={modalLoginOpen} close={closeloginModal}></ModalLoginForm>        
                                    </div>
                                </FormControl>
                            </div>
                        </div>
                        <div className = "detail_info_content">
                            <div className = "detail_info_content_btn">
                                <Button onClick = {() => setproduct_info(product[0]?.product_content )}>상품 설명</Button>
                                <Button onClick = {() => setproduct_info(text)}> - 배송 반품 -</Button>
                                <Button onClick = {() => setproduct_info(product[0]?.product_material )}>상세 정보</Button>
                            </div>
                            <div className = "detail_info_content_text">
                                {product_info}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ProductInfoComponent;
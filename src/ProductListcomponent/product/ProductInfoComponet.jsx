import React, { Component } from 'react';


import ApiService from "../../ApiService";


class ProductInfoComponent extends Component{
    
    constructor(props){
        super(props);

        this.state = {
          product : '',
          message : null
        }
    }

    componentDidMount(){
        this.loadProduct();
    }

    // 이전 페이지에서 받아온 ProductSEQ를 getItem을 통해서 들고오게된다. 
    loadProduct = () => {
        ApiService.fetchProductByID(window.localStorage.getItem("ProductID"))
        .then( res => {
            this.setState({
                product : res.data
            })
            // console.log(window.localStorage.getItem("ProductSEQ"))
        })
        .catch(err => {
            console.log('loadProduct() 에러',err);
        });
    }

    render(){
        return(
            <div>
                <div> 아이디 : {this.state.product.product_id}</div>
                <div> 타이틀 : {this.state.product.product_title}</div>
                <div> 가격 : {this.state.product.product_price}</div>
                <div> 색상 : {this.state.product.product_color}</div>
                <div> 이미지 : {this.state.product.product_img}</div>
                <div> 성별 : {this.state.product.product_gender}</div>
                <div> 사이즈 : {this.state.product.product_size}</div>
                <div> 수량 : {this.state.product.product_stock}</div>
                <div> 판매량 : {this.state.product.product_saled}</div>
                <div> 카테고리 : {this.state.product.product_category}</div>
                <div> 내용 : {this.state.product.product_content}</div>
            </div>
        );
    }

}


export default ProductInfoComponent;
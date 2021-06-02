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
                {this.state.product.product_seq}
                {this.state.product.product_title}
                {this.state.product.product_price}
                {this.state.product.product_color}
                {this.state.product.product_img}
                {this.state.product.product_gender}
                {this.state.product.product_size}
                {this.state.product.product_stock}
                {this.state.product.product_sale}
                {this.state.product.product_category}
                {this.state.product.product_content}
            </div>
        );
    }

}


export default ProductInfoComponent;
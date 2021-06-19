import React, {useState, useEffect} from 'react';
import ApiService from "../../ApiService";
import ace01 from '../images/ace01.jpg';

import {Table, TableCell, TableRow, Typography, InputLabel, FormControl, Grid } from '@material-ui/core';

function ProductListComponent(props){
    const imgUrl = '/imgs/';

    let [products, setproducts ] = useState([]);
    let [product_pageNum, setproduct_pageNum] = useState(1);
    let [product_gender, setproduct_gender] = useState(window.localStorage.getItem("selectGender"));
    let [product_category, setproduct_category] = useState(window.localStorage.getItem("selectCategory"));
    let [select_color, setselect_color] = useState(null);
    let [select_size, setselect_size] = useState(null);
    let [total_pageNum, settotal_pageNum] = useState(1);
    let [search_keyword, setsearch_keyword] = useState(null);
    let [select_option, setselect_option] = useState(window.localStorage.getItem("selectOption"));

    const ProductVO = {
        product_pageNum,
        product_gender,
        product_category,
        select_color,
        select_size,
        search_keyword,
        select_option
    }
    
    useEffect (() => {

        ApiService.productsCategory(ProductVO)
        .then( res => {
              setproducts(res.data);
              console.log(res.data);
        })
        .catch(err => {
            console.log('product_list print error!', err);
        })

        ApiService.findPageNum(ProductVO)
        .then( res => {
                settotal_pageNum(res.data);
        })
        .catch(err => {
            console.log('find_LastPage print error!', err);
        })
    },[product_pageNum, product_gender, product_category, select_color, select_size]);

    // 페이지 업
    function selectPageNumUp(){
        if(product_pageNum < total_pageNum){
            setproduct_pageNum(product_pageNum+1);
        }
    }

    // 페이지 다운
    function selectPageNumDown(){
        if(product_pageNum > 1){
            setproduct_pageNum(product_pageNum-1);
        }
    }

    // 선택한 상품의 상세 페이지로 이동
    function Productinfo(ID){
        window.localStorage.setItem("ProductID", ID);
        props.history.push('/product-detail');
    }

    return (
        <div style={{display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
            <Grid container spacing={3} style={{ paddingLeft:'10px', paddingRight:'10px', minHeight:'800px', width:'100%', maxWidth:'1560px'}}>

                {/* 옵션 선택 사항 */}
                <Grid item xs={12}> 
                    <Typography variant ="h5" style={{marginTop:'30px'}}>Accessories Items</Typography>
                        
                    <div>
                        <FormControl style={{minWidth:'80px'}}>
                            <a href="http://localhost:3000/product-list"> <InputLabel>Clothing</InputLabel></a>
                        </FormControl>
                        <FormControl style={{minWidth:'80px'}}>
                            <a href="http://localhost:3000/accessories-list"> <InputLabel>Accessories</InputLabel></a>
                        </FormControl>
                    </div>

                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'50px 0px 10px 0px', paddingBottom:'0px'}}/>
                    
                    <div style={{float:'right'}}>
                        <ul style={{paddingLeft:'20px', marginTop:'0px', marginBottom:'43px'}}>
                        <FormControl style={{minWidth:'35px'}}>
                            <InputLabel style={{fontSize:'30px'}}><buttion onClick={selectPageNumDown} style={{width:'100px'}}>🠔</buttion></InputLabel>
                        </FormControl>

                        <FormControl style={{minWidth:'40px'}}>
                            <InputLabel style={{fontSize:'30px'}}><buttion onClick={selectPageNumUp}>🠖</buttion></InputLabel>
                        </FormControl>
                        </ul>
                    </div>
                    </Grid>


                    {/* 바디 */}
                    {products.map(product =>
                        <Grid item xs={6} sm={4} style={{margin:'0px'}}>
                            <Table style={{marginBottom:'30px'}}>     
                                <div align="right" onClick = {() => {Productinfo(product.product_id)}}>
                                    <TableRow key={product.product_id}>
                                        <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> <img src={imgUrl+product.imgs[0]} style={{width:'100%'}}/></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px'}}>{ product.product_title }</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px'}}>{ product.product_price }</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell alingn="right" style={{border:'0px'}}>

                                            {/* product안의 color배열을 다시 map해서 출력하는 것 */}
                                            {product.colorSet.map(color=>
                                                <div key={color.index}>
                                                    <div style={{marginRight:'3px', float:'left', width:'15px', height:'15px', backgroundColor:color}}></div>     
                                                </div>
                                            )}
                                        </TableCell>
                                    </TableRow>
                                </div>
                            </Table>
                        </Grid>
                    )}                    
                </Grid>
            </div>
    )
    
}




export default ProductListComponent;
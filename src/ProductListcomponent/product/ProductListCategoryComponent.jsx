import React, {useState, useEffect} from 'react';
import ApiService from "../../ApiService";
import img01 from '../images/01_pre.jpg';
import { Link } from 'react-router-dom';
import SelectOptionComponenttest from './SelectOptionComponent';
import SortByComponent from './SortByComponent';
import OptionResetComponent from './OptionResetComponent';
import PageNumComponent from './PageNumComponent';


import {Table, TableCell, TableRow, Typography, InputLabel, FormControl, Grid} from '@material-ui/core';

function ProductListComponent(props){
    const imgUrl = '/imgs/';
    let [products, setproducts ] = useState([]);
    let [product_pageNum, setproduct_pageNum] = useState(1);
    let [product_gender, setproduct_gender] = useState(window.localStorage.getItem("selectGender"));
    let [product_category, setproduct_category] = useState(null);
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
              console.log(products);
        })
        .catch(err => {
            console.log('product_list print error!', err);
        })

        ApiService.findPageNum(ProductVO)
        .then( res => {
                settotal_pageNum(res.data);
                console.log(res.data);
                console.log(res);
        })
        .catch(err => {
            console.log('find_LastPage print error!', err);
        })
    },[product_pageNum, product_gender, product_category, select_color, select_size, search_keyword, select_option]);

    // 옵션 선택시 선택된 name확인 후 해당 값 변경
    function selectOption(e){
        if(e.target.name === 'product_category'){
            setproduct_category(e.target.value);
        }else if(e.target.name === 'select_color'){
            setselect_color(e.target.value);
        }else if(e.target.name === 'select_size'){
            setselect_size(e.target.value);
        }else if(e.target.name === 'select_option'){
            setselect_option(e.target.value);
        }
        setproduct_pageNum(1);
    }

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

    function selectCategoryList(selectCategory){
        window.localStorage.setItem("selectCategory", selectCategory);
        window.location.reload();
    }

    function selectAccessoryList(selectCategory){
        window.localStorage.setItem("selectCategory", selectCategory);
        props.history.push('/accessories-list')
    }

    return (
        <div style={{display:'flex', alignItems:'center', textAlign:'center', justifyContent:'center'}}>
            <Grid container spacing={3} style={{ paddingLeft:'10px', paddingRight:'10px', minHeight:'800px', width:'100%', maxWidth:'1560px'}}>

                {/* 옵션 선택 사항 */}
                <Grid item xs={12}> 
                    <Typography variant ="h5" style={{marginTop:'30px'}}>Clothing Items</Typography>
                        
                    <div>
                        <FormControl style={{minWidth:'80px'}}>
                            <button variant="contained" style={{border:'0px'}} onClick = {() => {selectCategoryList(null)}}><InputLabel>Clothing</InputLabel></button>
                            {/* </a> */}
                        </FormControl>
                        <FormControl style={{minWidth:'80px'}}>
                            <button variant="contained" style={{border:'0px'}} onClick = {() => {selectAccessoryList('악세사리')}}><InputLabel>Accessories</InputLabel></button>
                        </FormControl>
                    </div>

                    <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'50px 0px 10px 0px', paddingBottom:'0px'}}/>


                    <div style={{float:'left'}}>
                        <ul style={{paddingLeft:'0px', marginTop:'0px'}}>
                            <SelectOptionComponenttest selectOption={selectOption} label="Style" name="product_category" items={['치마','원피스','바지','모자']}/>

                            <SelectOptionComponenttest selectOption={selectOption} label="Color" name="select_color" items={['BLACK','WHITE','RED','YELLOW','GREEN']}/>

                            <SelectOptionComponenttest selectOption={selectOption} label="Size" name="select_size" items={['XS','S','M','L','XL']}/>

                            <SortByComponent selectOption={selectOption} label="Sort" name="select_option" />

                            <OptionResetComponent />
                        </ul>
                    </div>


                    <div style={{float:'right'}}>
                        <ul style={{marginTop:'0px'}}>
                            <PageNumComponent selectPageNumDown={selectPageNumDown} selectPageNumUp={selectPageNumUp}/>
                        </ul>
                    </div>

                </Grid>


                    {/* 바디 */}
                    {products.map(product =>
                <Grid item xs={6} sm={4} style={{margin:'0px'}}>
                    <Table style={{marginBottom:'30px'}}>     
                        <div align="right" onClick = {() => {Productinfo(product.product_id)}}>
                            <TableRow key={product.product_id}>
                                <TableCell component="th" scope="product" style={{border:'0px', padding:'0px'}}> 
                                    <img /*src={img01}*/src={imgUrl+product.imgs[0]} style={{width:'100%'}}/>
                                </TableCell>
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
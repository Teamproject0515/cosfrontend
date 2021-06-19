import React, {useState,useEffect} from 'react';
import {useHistory} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { Input } from '@material-ui/core';

import '../managerCss/managerInsertOption.css';

function ProductInsert() {
    const [product,setProduct] = useState({product:[]});            //받아온 상품
    const [product_color,setProduct_color]= useState();           //상품컬러
    const [product_size,setProduct_size]= useState();             //상품사이즈
    const [product_stock,setProduct_stock]= useState();           //상품재고
    const [tableAdd,setTableAdd] =useState([]);
    const [productOptions,setProductOptions]= useState([]); 
    const history = useHistory();
    const[products,setProducts] = useState({product:[]});
    
    function onSize(e){
        //setProduct_size(product_size.concat(e.currentTarget.value)); 
        setProduct_size(e.currentTarget.value);
    }
    
    function onColor(e){
        //setProduct_color(product_color.concat(e.currentTarget.value));
        setProduct_color(e.currentTarget.value);
        // console.log(product_stock);
    }
    function onStock(e){
        //const stock = parseInt(e.currentTarget.value);
        //setProduct_stock(product_stock.concat(stock));
        setProduct_stock(e.currentTarget.value);
     }
     
    
    useEffect(()=>{
        // console.log("getProduct 실행");
        getProduct();
    },[])

    function getProduct(){
        const products = window.localStorage.getItem('product');
        // console.log(products);
        setProduct({
            product: JSON.parse(products)
        })
    }

    function saveProduceOption(e){
        e.preventDefault();
        }
        
        function onclick(){
            setProductOptions(productOptions.concat(
                [{
                    product_title : product.product.product_title,
                    product_gender : product.product.product_gender,
                    product_category : product.product.product_category,
                    product_price : product.product.product_price,
                    product_content : product.product.product_content,
                    product_img: product.product.product_img,
                    product_material: product.product.product_material,
                    product_size : product_size,
                    product_color : product_color,
                    product_stock: product_stock,
                }]
            ))
        }
        
        //테이블 행 추가삭제
        function tablePlus(){
            setTableAdd(tableAdd.concat('plus'));
        }
        function tableMinus(){
            setTableAdd(tableAdd.splice(1));
        }
    return (
        <>
            <h1>상품 옵션</h1>
                <div className="product_selectOption">
                        <TableContainer component={Paper}>
                            <Table aria-label="caption table">
                                <caption>행 추가<button onClick={tablePlus}>+</button> 행 삭제<button onClick={tableMinus}>-</button></caption>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>상품제목</TableCell>
                                            <TableCell align="left">상품사이즈</TableCell>
                                            <TableCell align="left">상품컬러</TableCell>
                                            <TableCell align="left">상품개수</TableCell>
                                        </TableRow>
                                    </TableHead>
                                <TableBody>
                                {tableAdd.map(productRow =>
                                    <TableRow key={productRow}>
                                    <TableCell align="left">{product.product.product_title}</TableCell>
                                    <TableCell align="left">
                                        <Select name="size" onChange={onSize}>
                                            <option name="XS" value="XS" >XS</option >
                                            <option name="S" value="S">S</option >
                                            <option name="M" value="M">M</option >
                                            <option name="L" value="L">L</option >
                                            <option name="XL" value="XL">XL</option >
                                        </Select>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Select onChange={onColor}>
                                                <option value="BLACK">BLACK</option >
                                                <option value="WHITE">WHITE</option >
                                                <option value="BLUE">BLUE</option >
                                                <option value="GRAY">GRAY</option >
                                                <option value="YELLOW">YELLOW</option >
                                            </Select>
                                        </TableCell>
                                        
                                        <TableCell align="left">
                                            <Input onChange={onStock} style={{textAlign:'left'}}></Input>
                                        </TableCell>
                                </TableRow>
                                )}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        </div>
                        <button onClick={saveProduceOption}className="signUp-butten" >submit</button>
                        {/* <button onClick={()=>console.log(productOptions)}className="signUp-butten" >출력</button> */}
                <button onClick={onclick} className="signUp-butten" >등록</button>
        </>
    )
}

export default ProductInsert

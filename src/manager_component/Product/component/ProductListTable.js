import React from 'react'
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from "@material-ui/core/IconButton";

function ProductListTable({products,onKeyPress,onChangeSearch,search,returnProductDetail}) {
    //productList에서 사용
    const imgUrl = "/imgs/";
    const imgStyle = {
        width: '100px',
        height: '100px',
        objectFit: 'cover'
    };

    return (
        <>
          <div className="pageTitle" >
                <div></div>
                <h1>상품 목록</h1>
                <div style={{ height: '30px', width: '30%', display: 'flex', justifyContent: 'flex-end' }}>
                    <Input type="text" placeholder="상품이름 검색" onChange={onChangeSearch} onKeyPress={onKeyPress} />
                    <IconButton className="menuButton" onClick={search}>
                        <SearchOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <Table style={{ marginTop: '30px' }}>
                <TableHead>
                    <TableRow>
                        <TableCell alingn="right">상품번호</TableCell>
                        <TableCell alingn="right">상품이미지</TableCell>
                        <TableCell alingn="right">상품제목</TableCell>
                        <TableCell alingn="right">상품성별</TableCell>
                        <TableCell alingn="right">상품가격</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.product.map(product =>
                        <TableRow style={{ height: '20%' }}>
                            <TableCell component="th" scope="board"> {product.product_id} </TableCell>
                            <TableCell alingn="right">
                                <img style={imgStyle}
                                    src={imgUrl + product.product_img}>
                                </img>
                            </TableCell>
                            <TableCell alingn="right"><button style={{ border: 'none', backgroundColor: '#FFFFFF' }}
                                onClick={() => { returnProductDetail(product.product_id) }}>{product.product_title}</button></TableCell>
                            <TableCell alingn="right">{product.product_gender}</TableCell>
                            <TableCell alingn="right">{product.product_price}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
                <button onClick={()=>console.log(products)}></button>
            </Table>  
        </>
    )
}

export default ProductListTable

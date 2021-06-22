import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import { Input } from '@material-ui/core';

function InsertOptionComponent({product,productOptions,tablePlus,tableMinus,onSize,onColor,onStock}) {
    return (
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
                            {productOptions.map((productRow, index) =>
                                <TableRow>
                                    <TableCell align="left">{product.product.product_title}</TableCell>
                                    <TableCell align="left">
                                        <Select name="size" onChange={(e) => onSize(e, index)}>
                                            <option name="XS" value="XS" >XS</option >
                                            <option name="S" value="S">S</option >
                                            <option name="M" value="M">M</option >
                                            <option name="L" value="L">L</option >
                                            <option name="XL" value="XL">XL</option >
                                        </Select>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Select onChange={(e) => onColor(e, index)}>
                                            <option style={{backgroundColor:'BLACK',color:'white',marginBottom:'5px'}} value="BLACK">BLACK</option >
                                            <option style={{backgroundColor:'GRAY',color:'white',marginBottom:'5px'}} value="GRAY">GRAY</option >
                                            <option style={{backgroundColor:'Silver',color:'white',marginBottom:'5px'}} value="Silver">Silver</option >
                                            <option style={{backgroundColor:'DarkRed',color:'white',marginBottom:'5px'}} value="DarkRed">DarkRed</option >
                                            <option style={{backgroundColor:'FireBrick',color:'white',marginBottom:'5px'}} value="FireBrick">FireBrick</option >
                                            <option style={{backgroundColor:'RED',color:'white',marginBottom:'5px'}} value="RED">RED</option >
                                            <option style={{backgroundColor:'WHITE',color:'black',marginBottom:'5px'}} value="WHITE">WHITE</option >
                                            <option style={{backgroundColor:'BLUE',color:'white',marginBottom:'5px'}} value="BLUE">BLUE</option >
                                            <option style={{backgroundColor:'MediumSlateBlue',color:'white',marginBottom:'5px'}} value="MediumSlateBlue">MediumSlateBlue</option >
                                            <option style={{backgroundColor:'SkyBlue',color:'white',marginBottom:'5px'}} value="SkyBlue">SkyBlue</option >
                                            <option style={{backgroundColor:'Gold',color:'black',marginBottom:'5px'}} value="Gold">Gold</option >
                                            <option style={{backgroundColor:'YELLOW',color:'black',marginBottom:'5px'}} value="YELLOW">YELLOW</option >
                                            <option style={{backgroundColor:'Khaki',color:'black',marginBottom:'5px'}} value="Khaki">Khaki</option >
                                        </Select>
                                    </TableCell>

                                    <TableCell align="left">
                                        <Input onChange={(e) => onStock(e, index)} style={{ textAlign: 'left' }}></Input>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
    )
}

export default InsertOptionComponent

import React from 'react';


import {InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';


function ProductListComponent({selectOption, selectPageNumDown, selectPageNumUp}){

    return (
            <div>
                <div style={{float:'left'}}>
                    <ul style={{paddingLeft:'0px', marginTop:'0px'}}>

                    {/* 컬러 선택 */}
                    <FormControl style={{minWidth:'55px'}}>
                        <InputLabel style={{fontSize:'14px'}}>Color</InputLabel>
                        <Select name='select_color' onChange={selectOption}>
                            <MenuItem value={'BLACK'} style={{fontSize:'12px'}}><div style={{fontSize:'14px'}}>Black</div></MenuItem>
                            <MenuItem value={'WHITE'}><div style={{fontSize:'14px'}}>White</div></MenuItem>
                            <MenuItem value={'RED'}><div style={{fontSize:'14px'}}>Red</div></MenuItem>
                            <MenuItem value={'YELLOW'}><div style={{fontSize:'14px'}}>Yellow</div></MenuItem>
                            <MenuItem value={'GREEN'}><div style={{fontSize:'14px'}}>Green</div></MenuItem>
                        </Select>
                    </FormControl>

                    {/* 사이즈 선택 */}
                    <FormControl style={{minWidth:'50px', marginLeft:'20px'}}>
                        <InputLabel style={{fontSize:'14px'}}>Size</InputLabel>
                        <Select name='select_size' onChange={selectOption}>
                            <MenuItem value={'XS'}><div style={{fontSize:'14px'}}>XS</div></MenuItem>
                            <MenuItem value={'S'}><div style={{fontSize:'14px'}}>S</div></MenuItem>
                            <MenuItem value={'M'}><div style={{fontSize:'14px'}}>M</div></MenuItem>
                            <MenuItem value={'L'}><div style={{fontSize:'14px'}}>L</div></MenuItem>
                        </Select>
                    </FormControl>

                    {/* 정렬 선택 */}
                    <FormControl style={{minWidth:'50px', marginLeft:'20px'}}>
                        <InputLabel style={{fontSize:'14px'}}>Sort</InputLabel>
                        <Select name='select_option' onChange={selectOption}>
                            <MenuItem value={'product_saled'}><div style={{fontSize:'14px'}}>Best Seller</div></MenuItem>
                            <MenuItem value={'product_id'}><div style={{fontSize:'14px'}}>New Arrivals</div></MenuItem>
                            <MenuItem value={'product_low_price'}><div style={{fontSize:'14px'}}>Low Price</div></MenuItem>
                            <MenuItem value={'product_high_price'}><div style={{fontSize:'14px'}}>High Price</div></MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl style={{minWidth:'20px', marginLeft:'20px'}}>
                        <a href="http://localhost:3000/search-keyword"> <InputLabel style={{fontSize:'14px'}}>Reset</InputLabel></a>
                    </FormControl>
                    </ul>
                </div>
                        
                <div style={{float:'right'}}>
                    <ul style={{paddingRight:'0px', marginTop:'0px'}}>
                    <FormControl style={{minWidth:'35px'}}>
                        <InputLabel style={{fontSize:'30px'}}><buttion onClick={selectPageNumDown}>🠔</buttion></InputLabel>
                    </FormControl>

                    <FormControl style={{minWidth:'40px'}}>
                        <InputLabel style={{fontSize:'30px'}}><buttion onClick={selectPageNumUp}>🠖</buttion></InputLabel>
                    </FormControl>
                    </ul>
                </div>
            </div>
        )}




export default ProductListComponent;
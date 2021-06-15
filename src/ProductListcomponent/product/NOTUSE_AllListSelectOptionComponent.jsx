import React from 'react';


import {InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';


function AllListOptionComponent({selectOption, selectPageNumDown, selectPageNumUp}){

    return (
        <div>
            <div style={{float:'left'}}>
                <ul style={{paddingLeft:'0px', marginTop:'0px'}}>
                {/* 스타일 선택 */}
                <FormControl style={{minWidth:'60px'}}>
                    <InputLabel style={{fontSize:'14px'}}>Style</InputLabel>
                    <Select name='product_category' onChange={selectOption}>
                        <MenuItem value={'치마'}><div style={{fontSize:'14px'}}>치마</div></MenuItem>
                        <MenuItem value={'바지'}><div style={{fontSize:'14px'}}>바지</div></MenuItem>
                        <MenuItem value={'원피스'}><div style={{fontSize:'14px'}}>원피스</div></MenuItem>
                        <MenuItem value={'모자'}><div style={{fontSize:'14px'}}>모자</div></MenuItem>
                    </Select>
                </FormControl>

                {/* 컬러 선택 */}
                <FormControl style={{minWidth:'60px', marginLeft:'20px'}}>
                    <InputLabel style={{fontSize:'14px'}}>Color</InputLabel>
                    <Select name='select_color' onChange={selectOption}>
                        <MenuItem value={'BLACK'}><div style={{fontSize:'14px'}}>Black</div></MenuItem>
                        <MenuItem value={'WHITE'}><div style={{fontSize:'14px'}}>White</div></MenuItem>
                        <MenuItem value={'RED'}><div style={{fontSize:'14px'}}>Red</div></MenuItem>
                        <MenuItem value={'YELLOW'}><div style={{fontSize:'14px'}}>Yellow</div></MenuItem>
                        <MenuItem value={'GREEN'}   ><div style={{fontSize:'14px'}}>Green</div></MenuItem>
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

                <FormControl style={{minWidth:'20px', marginLeft:'20px', width:'20px'}}>
                    <a href="http://localhost:3000/product-list"> <InputLabel style={{fontSize:'14px'}}>Reset</InputLabel></a>
                </FormControl>
                </ul>
            </div>

            <div style={{float:'right'}}>
                <ul style={{paddingLeft:'20px', marginTop:'0px'}}>
                <FormControl style={{minWidth:'35px'}}>
                    <InputLabel style={{fontSize:'30px'}}><buttion onClick={selectPageNumDown} style={{width:'100px'}}>🠔</buttion></InputLabel>
                </FormControl>

                <FormControl style={{minWidth:'40px'}}>
                    <InputLabel style={{fontSize:'30px'}}><buttion onClick={selectPageNumUp}>🠖</buttion></InputLabel>
                </FormControl>
                </ul>
            </div>


        </div>
    )}




export default AllListOptionComponent;
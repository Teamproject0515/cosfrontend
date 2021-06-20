import React from 'react';


import {InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';


function ProductListComponent(props){

    return (
            <>
                    {/* 정렬 선택 */}
                    <FormControl style={{minWidth:'50px', marginRight:'10px'}}>
                        <InputLabel style={{fontSize:'14px'}}>{props.label}</InputLabel>
                        <Select name={props.name} onChange={props.selectOption}>
                            <MenuItem value={'product_saled'}><div style={{fontSize:'14px'}}>Best Seller</div></MenuItem>
                            <MenuItem value={'product_id'}><div style={{fontSize:'14px'}}>New Arrivals</div></MenuItem>
                            <MenuItem value={'product_low_price'}><div style={{fontSize:'14px'}}>Low Price</div></MenuItem>
                            <MenuItem value={'product_high_price'}><div style={{fontSize:'14px'}}>High Price</div></MenuItem>
                        </Select>
                    </FormControl>
            </>
        )}




export default ProductListComponent;
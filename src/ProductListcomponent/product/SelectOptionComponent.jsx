import React from 'react';


import {InputLabel, MenuItem, Select, FormControl} from '@material-ui/core';


function AllListOptionComponent(props){

    return (
        <>
                {/* 스타일 선택 */}
                <FormControl style={{minWidth:'60px', marginRight:'10px'}}>
                    <InputLabel style={{fontSize:'14px'}}>{props.label}</InputLabel>
                    <Select name={props.name} onChange={props.selectOption}>
                        {props.items.map(item =>
                            <MenuItem key={item} value={item}><div style={{fontSize:'14px'}}>{item}</div></MenuItem>
                        )}
                    </Select>
                </FormControl>
        </>
    )}




export default AllListOptionComponent;
import React from 'react';


import {InputLabel, FormControl} from '@material-ui/core';


function OptionResetComponent(props){

    return (
        <>
                <FormControl style={{minWidth:'20px', width:'20px'}}>
                    <a href="http://localhost:3000/product-list"> <InputLabel style={{fontSize:'14px'}}>Reset</InputLabel></a>
                </FormControl>
        </>
    )}




export default OptionResetComponent;
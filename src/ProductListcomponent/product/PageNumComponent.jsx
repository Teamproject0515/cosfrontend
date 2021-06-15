import React from 'react';


import {InputLabel, FormControl} from '@material-ui/core';


function OptionResetComponent(props){

    return (
        <>
                <FormControl style={{minWidth:'35px'}}>
                    <InputLabel style={{fontSize:'30px'}}><buttion onClick={props.selectPageNumDown} style={{width:'100px'}}>🠔</buttion></InputLabel>
                </FormControl>

                <FormControl style={{minWidth:'40px'}}>
                    <InputLabel style={{fontSize:'30px'}}><buttion onClick={props.selectPageNumUp}>🠖</buttion></InputLabel>
                </FormControl>
        </>
    )}




export default OptionResetComponent;
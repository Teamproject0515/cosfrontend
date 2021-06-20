import React, { useState } from "react";
import "./css/Topbig.css"
import { Button } from "@material-ui/core";
import Hnmain from "./images/hnmmain.jpg"
import { withRouter } from 'react-router-dom'

function Topbig(props){

    function selectGenderList(selectGender){
        window.localStorage.setItem("selectGender", selectGender);
        props.history.push('/product-list');
    }

    return(
        <div className="top-wrapper">
            <div className="top-image">
                <img src={Hnmain} style={{width:'1560px'}}/>
            </div>
            <div className="top-in">
                <h1>A summer in style</h1>
                <h4>절제된 감각으로 완성한 뉴 시즌 컬랙션</h4>
                <div>
                    <Button variant="contained" style={{backgroundColor:'white', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px'}} onClick = {() => {selectGenderList('W')}}>여성 에센셜 컬랙션</Button>
                </div>
                <div>
                    <Button variant="contained" style={{backgroundColor:'white', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px'}} onClick = {() => {selectGenderList('M')}}>남성 에센셜 컬랙션</Button>
                </div>
            </div>
        </div>
    );
}
// export default Topbig;
export default withRouter(Topbig);


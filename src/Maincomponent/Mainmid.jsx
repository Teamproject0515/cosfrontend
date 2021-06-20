import React from "react";
import Image1 from "./images/2.jpg"
import Image2 from "./images/3.jpg"
import { Button } from '@material-ui/core';
import "./css/Mainmid.css"
import { withRouter } from 'react-router-dom';


function Mainmid(props){

    function selectCategoryList(selectGender){
        window.localStorage.setItem("selectGender", selectGender);
        props.history.push('/product-list');
    }

    return(
        <div className="image_container" >
            <div style={{width:'500px', textAlign:'left'}}>
                <h1 style={{textAlign:'left'}}>Most popular</h1>
                <h4 style={{textAlign:'left'}}>지금 가장 인기 있는 아이템</h4>
                <Button variant="contained" style={{backgroundColor:'#444', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick = {() => {selectCategoryList('W')}}><b>여성 인기 아이템</b></Button><br/>
                <Button variant="contained" style={{backgroundColor:'#444', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick = {() => {selectCategoryList('M')}}><b>남성 인기 아이템</b></Button>
            </div>
            <div className="main_Image_Style">
                <img src={ Image1 } alt='testA' style={{width:'500px', marginLeft:'40px'}}/>
            </div>
            <div className="main_Image_Style">
                <img src={ Image2 } alt='testA' style={{width:'500px', marginLeft:'20px'}}/>
            </div>
        </div>

    );
}

export default withRouter(Mainmid);
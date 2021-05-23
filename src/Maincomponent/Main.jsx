import React from "react";
import Banner from "./Banner";
import Topbig from "./Topbig";
import { Button } from '@material-ui/core';
import "./css/Main.css"
import Mainmid from "./Mainmid";
import Bottombig from "./Bottombig";
import Footer from "./Footer";
function Main(){

    return(
        <div>
            <Banner/>
            <Topbig/>
            <div style={{paddingTop:"20px"}}>
                <h1>Most popular</h1>
                <h2>지금 가장 인기 있는 아이템</h2>
                <Button variant="contained">여성 인기 아이템</Button>
                <Button variant="contained">남성 인기 아이템</Button>
            </div>
            <Mainmid/>
            <Bottombig/>
            <Footer/>
        </div>
    );
}
export default Main;
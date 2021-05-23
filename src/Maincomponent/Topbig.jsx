import React from "react";
import "./css/Topbig.css"
import { Button } from "@material-ui/core";
import Hnmain from "./images/hnmmain.jpg"
function Topbig(){

    return(
        <div className="top-wrapper">
            <div className="top-image">
                <img src={Hnmain}/>
            </div>
            <div className="top-in">
                <h1>A summer in style</h1>
                <h3>절제된 감각으로 완성한 뉴 시즌 컬랙션</h3>
                <div>
                    <Button variant="contained" color="white">
                        여성 컬랙션
                    </Button>
                </div>
                <div>
                    <Button variant="contained" color="white">
                        남성 컬랙션
                    </Button>
                </div>
            </div>
        </div>
    );

}
export default Topbig;
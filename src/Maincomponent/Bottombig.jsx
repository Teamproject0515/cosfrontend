import React from "react";
import "./css/Bottombig.css"
import { Button } from "@material-ui/core";
import Hnmain from "./images/4.jpg"
function Bottombig(){

    return(
        <div className="bottom-wrapper">
            <div className="bottom-image">
                <img src={Hnmain} style={{width:'1560px'}}/>
            </div>
            <div className="bottom-in">
                <h1>Fashion for the future</h1>
                <h3>지속가능성에 대한 이야기</h3>
                <div>
                    <Button variant="contained" style={{backgroundColor:'white', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px'}}> 지속가능성 </Button>
                </div>
            </div>
        </div>
    );


}
export default Bottombig;
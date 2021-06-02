import React from "react";
import Banner from "./Banner";
import Topbig from "./Topbig";
import "./css/Main.css"
import Mainmid from "./Mainmid";
import Bottombig from "./Bottombig";

function Main(){



    return(
        <div>
            <Topbig/>
            <Mainmid/>
            <Bottombig/>
        </div>
    );
}
export default Main;
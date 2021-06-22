import React from "react";
import Image1 from "./images/2.jpg"
import Image2 from "./images/3.jpg"
import "./css/Mainmid.css"

function Mainmid(){
    return(
        <div className="image_container">
            <div className="image1">
                <img src={ Image1 }
                    alt='testA'/>
                <h5>여성 인기 아이템</h5>
            </div>
            <div className="image2">
                <img src={ Image2 }
                    alt='testA'/>
                <h5>남성 인기 아이템</h5>
            </div>
        </div>

    );
}

export default Mainmid;
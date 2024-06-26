import React from "react";
import banner from "../../../assets/banner/banner.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
    return (
        <div className="banner">
                    <div  className="banner-item">     
                         <img src={banner} alt="" className="banner-content_image_title" />  
                    </div>
        </div>
    );
};

export default Slide;

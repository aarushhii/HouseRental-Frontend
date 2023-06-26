// import React, { useState } from "react";
import "../App.css";
import {sidebarData} from './sidebarData';



function Sidebar() {


  return (
    <div className="sidebar">
        <ul className="sidebarList" >
        {sidebarData.map((val,key) => {
            return (
            <li key={key} className="row" onClick={()=> {window.location.pathname=val.link}}>
                <div id="icon">{val.icon}</div>
                <div id="title">{val.title}</div>

            </li>
            );
        })}
        </ul>
    </div>




    //   <div
    //     className="carouselInner"
    //     // style={{ backgroundImage: `url(${images[currImg].img})` }}
    //   >
    //     <div
    //       className="left"
    //     //   onClick={() => {
    //     //     currImg > 0 && setCurrImg(currImg - 1);
    //     //   }}
    //     >
    //       {/* <ArrowBackIosIcon style={{ fontSize: 30 }} /> */}
    //     </div>
    //     <div className="center">
    //       {/* <h1>{images[currImg].title}</h1>
    //       <p>{images[currImg].subtitle}</p> */}
    //     </div>
    //     <div
    //       className="right"
    //     //   onClick={() => {
    //     //     currImg < images.length - 1 && setCurrImg(currImg + 1);
    //     //   }}
    //     >
    //       {/* <ArrowForwardIosIcon style={{ fontSize: 30 }} /> */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Sidebar;
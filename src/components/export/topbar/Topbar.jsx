import React from 'react';
import "./topbar.css";
import blackn from "../../assests/blackn.png";
import Arrow from "../../assests/Arrow.png";
import Circle from "../../assests/Circle.png";
import Balance from '../rectangle1/Balance';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLogo">
                    <span className="topbarText">Payment</span>
                </div>
                <div className="topbarButton">
                    <img 
                        src={Circle} 
                        alt="" 
                        style={{
                            width:"33px",
                            height:"33px",
                            position:"absolute",
                            top:"11px",
                            left:"21px"

                        }}
                    />
                    <img 
                        src={blackn}
                        alt="" 
                        style={{
                            position:"absolute", 
                            left:"24px", 
                            top:"16px",
                            width:"22px",
                            height:"18px",
                            borderRadius:"50%",
                            border:"2px solid black"
                        }}
                    />
                    <img 
                        src={Arrow} 
                        alt="" 
                        style={{
                            position:"absolute",
                            left:"25%",
                            top:"40%",
                            width:"17px"
                        }}
                    />
                    <span className="btn">Send Cash</span>
                </div>
            </div>
        </div>
    )
}

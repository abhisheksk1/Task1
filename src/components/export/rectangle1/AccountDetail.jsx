import React from 'react';
import "./accountDetail.css";
import eye from "../../assests/eye.png";
import eyedot from "../../assests/eyedot.png";

export default function AccountDetail() {
    return (
        <div className="rightSide">
            <span className="balanceHeading">Account details</span>
            <div className="availableBalanceDetail">
                <span className="availableBalance">**** **** 0885</span>
                <img 
                    src={eye} 
                    alt="" 
                    style={{
                        marginLeft:"10px",
                        width:"30px",
                        height:"20.62px"

                    }}
                />
                <img 
                    src={eyedot}
                    alt="" 
                    style={{
                        marginLeft:"-1.3rem",
                        width:"13px",
                        height:"13px"

                    }}
                />
            </div>
            <span className="viewDetail">View details</span>
        </div>
    )
}

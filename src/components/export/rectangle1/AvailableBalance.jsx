import React from 'react';
import "./availableBalance.css";
import blackn from "../../assests/blackn.png";

export default function AvailableBalance() {
    return (
        <div className="leftSide">
            <span className="balanceHeading">Available Balance</span>
            <div className="availableBalanceDetail">
                <img 
                    src={blackn} 
                    alt="" 
                    style={{
                        width:"20px",
                        height:"20px",
                        paddingRight: "10px"
                    }}
                />
                <span className="availableBalance">2,324178.07</span>
            </div>
            <span className="viewDetail">View details</span>
        </div>
    )
}

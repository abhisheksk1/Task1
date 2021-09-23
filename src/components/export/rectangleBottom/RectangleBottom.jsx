import React from 'react';
import "./rectangleBottom.css";

export default function RectangleBottom() {
    return (
        <div className="rectangleBottom">
            <span className="heading">Operational history(3 of 8)</span>
            <div className="rectanglegrp">
                <div className="rowItem">
                    <div className="date">Date</div>
                    <div className="to-from">To/From</div>
                    <div className="method">Method</div>
                    <div className="amount">Amount</div>
                </div>
                <div className="rectangle1">
                    <div className="mentionDate">Oct 6</div>
                </div>
                <div className="rectangle2">
                    <div className="mentionDate">Oct 5</div>
                </div>
                <div className="rectangle3">
                    <div className="mentionDate">Oct 5</div>
                </div>
                <div className="rectangle4">
                    <span className="seeMore">See more</span>
                </div>
            </div>
        </div>
    )
}

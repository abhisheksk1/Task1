import React from 'react';
import "./feed.css";
import Topbar from '../topbar/Topbar';
import Balance from '../rectangle1/Balance';
import From from '../from/From';
import To from '../to/To';
import Export from '../export/Export';
import RectangleBottom from '../rectangleBottom/RectangleBottom';

export default function Feed() {
    return (
        <div className="feed">
            <Topbar/>
            <Balance/>
            <From/>
            <To/>
            <Export/>
            <RectangleBottom/>
        </div>
    )
}

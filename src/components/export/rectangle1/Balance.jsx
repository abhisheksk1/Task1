import React from 'react';
import AccountDetail from './AccountDetail';
import AvailableBalance from './AvailableBalance';
import "./balance.css";

export default function Balance() {
    return (
        <div className="rectangle">
            <AvailableBalance/>
            <div className="verticalLine"></div>
            <AccountDetail/>
        </div>
    )
}

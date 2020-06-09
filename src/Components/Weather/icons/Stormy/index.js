import React from 'react';
import './style.css';



export default function Stormy(props){
    return (
        <div className="stormy">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <span className="snowe"></span>
            <span className="snowex"></span>
            <span className="stick"></span>
            <span className="stick2"></span>
            <h1>{props.temp}°C</h1>
        </div>
    );
}
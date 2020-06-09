import React from 'react';
import './style.css';


export default function Breezy(props){
    return (
        <div className="breezy">
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>   
            </ul>
            <span className="cloudr"></span>
            <h1>{props.temp}°C</h1>
        </div>
    );
}
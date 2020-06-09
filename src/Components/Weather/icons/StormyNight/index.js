import React from 'react';
import './style.css';



export default function StormyNight(props){
    return (
        <div className="stormyNight">
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
            <span className="snoweNight"></span>
            <span className="snowexNight"></span>
            <span className="stickNight"></span>
            <span className="stick2Night"></span>
            <h1>{props.temp}°C</h1>
        </div>
    );
}
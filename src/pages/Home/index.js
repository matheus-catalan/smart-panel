import React from 'react';
import Typical from 'react-typical';

import Timer from './../../Components/Timer';
import Weather from './../../Components/Weather';
import Calendar from './../../Components/Calendar';

import './style.css';

export default function Home(){
    
    return (
        <div className="container">
            "teste"
            <div className="header">
                <Timer></Timer>
            </div>
            <div className="body">
                <Weather></Weather>
                <Calendar></Calendar>
            </div>
            <div className="footer">
                <Typical
                    steps={['', 1000,  '"Não destrua o futuro por problemas do passado"', 500]}
                    loop={1}
                    wrapper="b"
                />
            </div>
        </div>
    );
};
import React from 'react';

import './style.css';

export default function Line(props){

    return(
        <div className="line-break">
            <p>Previsão para os proximos dias em {props.text}</p>
            <div className="line"></div>
        </div>

    );
}
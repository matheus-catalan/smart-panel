import React, { useState, useEffect, Fragment } from 'react';
import './style.css';

export default function Timer(){
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');

    
    useEffect(() => {
        const zeroFill = n => {
            return ('0' + n).slice(-2);
        }

        setInterval(() => {

            const now = new Date();


            const time = zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
            
            // const date = now.toDateString();
            var dHoje = new Date();
            var diasDaSemana = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];		
            var diaSemana = dHoje.getDay();
            // Operador ternário para colocação da palavra feira
            var nomeDiaDaSemana = diaSemana > 0 & diaSemana < 6 ? diasDaSemana[diaSemana] + "-feira" : diasDaSemana[diaSemana];
            var dia = dHoje.getDate()
            var mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            var mes = dHoje.getMonth();
            var mesDoAno = mesesDoAno[mes];
            var ano = dHoje.getFullYear();

            var dateCurrent = nomeDiaDaSemana + ", " + dia + " de " + mesDoAno + " de " + ano ;

            setTime(time);
            setDate(dateCurrent);
        }, 1000);
    }, [])
    
    return(
        <Fragment>
            <h1 className="time">{time}</h1>
            <h1 className="date">{date}</h1>
        </Fragment>

    );
}
import React from 'react';
import {Timeline, StyledOcticon} from '@primer/components';
import {Flame} from '@primer/octicons-react';
import './style.css';
// import Calendar from 'react-calendar';
import Week from './Week';

import 'react-calendar/dist/Calendar.css';



export default function CalendarItem(){



    const itens = [
        { "id": 1, "date": "30/05/2020 10:00", "Titulo": "Prova de calculo"},
        { "id": 2, "date": "28/05/2020 14:00", "Titulo": "prova de FT"},
        { "id": 3, "date": "25/05/2020 19:00", "Titulo": "Trabalho gabriel"},
        { "id": 4, "date": "20/05/2020 07:00", "Titulo": "Festa"},
        { "id": 5, "date": "05/06/2020 00:00", "Titulo": "Final semetre"},
    ];




    return (
        <div className="container-calendar">
            <div className="row calendar">
                <Week />
                {/* <Calendar 
                    showNavigation={true} 
                    showNeighboringMonth={true} 
                    tileContent={true}
                /> */}
            </div>
            <div className="row timeLine">
                <Timeline>
                    {
                        itens.map(element => {
                           return(
                                <div key={element['id']}>
                                    <Timeline.Item>
                                        <Timeline.Badge bg="red.5">
                                        <StyledOcticon icon={Flame} color="white" />
                                        </Timeline.Badge>
                                        <Timeline.Body> <p>{element['Titulo']}<b> em 10 dias </b></p>
                                        </Timeline.Body>
                                    </Timeline.Item>
                                </div>
                           );
                        })
                    }
                </Timeline> 
            </div>
        </div>
    );
}
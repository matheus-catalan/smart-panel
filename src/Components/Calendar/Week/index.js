import React, {useState, useEffect} from 'react';
import { Brightness1 } from '@material-ui/icons';


import './style.css';

export default function Week() {
    const [week, setWeek] = useState([]);

    
    useEffect(() => {
        setInterval(() => {
            const afterWeekDayNow = [];
            const beforeWeekDayNow = [];
            const weekFormated = [];


            const now = new Date();
            
            var diasDaSemana = ["D", "S", "T", "Q", "Q", "S", "S"];	
    
            for (let index = 2; index > 0; index--) {

                let date = now.getDay() - index;

                afterWeekDayNow.push(diasDaSemana[date < 0 ? 7 + date : date]); 
                weekFormated.push(diasDaSemana[date < 0 ? 7 + date : date]); 
            }

            weekFormated.push(diasDaSemana[now.getDay()]);

            for (let index = 1; index <= 2; index++) {

                let date = now.getDay() + index;

                beforeWeekDayNow.push(diasDaSemana[date < 0 ? 7 + date : date]); 
                weekFormated.push(diasDaSemana[date < 0 ? 7 + date : date]); 
            }

            setWeek(weekFormated);

        }, 1000);
    }, [])

    console.log(week);

    return (
        <>
            <div className="container-week">
                {
                    week.map((element, index) => {
                        return <div className={'day '+ (index === 2 ? 'current' : '')}>
                                <p>{element}</p>
                                {index === 2 ? <Brightness1 style={{ color: '#757575', fontSize: 15}} /> : ''}
                            </div>;
                    })
                }
            </div>       
        </>
    )
}

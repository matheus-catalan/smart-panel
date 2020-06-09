import React, {useState, useEffect, Fragment} from 'react';
import { WiDaySunny } from "weather-icons-react";


import axios from 'axios';
import './style.css';


import Breezy from './icons/Breezy';
import Cloudy from './icons/Cloudy';
import CloudyDay from './icons/CloudyDay';
import Hot from './icons/Hot';
import Night from './icons/Night';
import Stormy from './icons/Stormy';
import BreezyNight from './icons/BreezyNight';
import Line from '../../Components/Line';

export default function Weather(){
    const [weather, setWeather] = useState();

    function icon(icon){

        const iconTable = {
            "01d": <Hot></Hot>,
            "02d": <CloudyDay></CloudyDay>,
            "03d": <Cloudy></Cloudy>,
            "04d": <Cloudy></Cloudy>,
            "09d": <Breezy></Breezy>,
            "10d": <Breezy></Breezy>,
            "11d": <Breezy></Breezy>,
            "13d": <Stormy></Stormy>,
            "50d": '',
            "01n": <Night></Night>,
            "02n": <Cloudy></Cloudy>,
            "03n": <Cloudy></Cloudy>,
            "04n": <Cloudy></Cloudy>,
            "09n": <BreezyNight></BreezyNight>,
            "10n": <BreezyNight></BreezyNight>,
            "11n": <BreezyNight></BreezyNight>,
            "13n": <Stormy></Stormy>,
            "50n": <BreezyNight></BreezyNight>
        };

        return iconTable[icon];
    }

    const nextDays = [
        {'label': 'Seg', 'temp': '25'},
        {'label': 'Ter', 'temp': '25'},
        {'label': 'Qua', 'temp': '25'},
        {'label': 'Qui', 'temp': '25'},
        {'label': 'Sex', 'temp': '25'},
    ]


    
    useEffect(() => {
        const getWeather = async () => {
            let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
                params: {
                    lat: '-21.1986118',
                    lon: '-50.5312319',
                    appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                    lang: 'pt',
                    units: 'metric'
                }  
            });
            
            setWeather(res.data);
            
        }  
        getWeather();
    }, []);


   

  
    setInterval(() => {
        const getWeather = async () => {
            let res = await axios.get("http://api.openweathermap.org/data/2.5/forecast", {
                params: {
                    lat: '-21.1986118',
                    lon: '-50.5312319',
                    appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                    lang: 'pt',
                    units: 'metric'
                }  
            });

            setWeather(res.data);
        }  
        getWeather();
    }, 21600000);



    if(!weather){
        return (<Fragment>Carregando...</Fragment>)
    }else{
        return (

            <div className="container-weather">
                <div className="tempCurrent">
                    <div className="icon">
                        {icon(weather['weather'][0]['icon'])}
                    </div>
                    <div className="temp">
                        <span className="temperature">{weather['main']['temp'].toFixed(1)} °C</span><br></br>
                        <span className="feels_like">Sensação de {weather['main']['temp'].toFixed(1)} °C</span><br></br>
                        <span className="tempMinMax">Max: {weather['main']['temp_max'].toFixed(1)}°C | Min: {weather['main']['temp_min'].toFixed(1)}°C</span><br></br>
                    </div>
                </div>
                <Line text={weather['name']}/>
                <div className="tempNext">
                    {
                            nextDays.map(element => {
                                return (
                                    <>
                                        <div className="itemNextDay" key={element['label']}>
                                            <p className="iconNextDay">{element['label']}</p>
                                            <WiDaySunny size={45} color='#fff'/>
                                            <p className="tempNextText">15 °C</p>
                                        </div>
                                    </>
                                );
                            })
                    }
                </div>
            </div>
        )
    }
}
    
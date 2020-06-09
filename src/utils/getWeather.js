import React, {useState} from 'react';
import axios from 'axios';


const [latitude, setLatitude] = useState('');
const [longitude, setlongitude] = useState('');
const [weather, setWeather] = useState(false);

export default function getWeather() {

    let weatherFunc = async () => {
        await navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setlongitude(position.coords.longitude);
        });

        if(latitude){
            let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
                params: {
                    lat: latitude,
                    lon: longitude,
                    appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
                    lang: 'pt',
                    units: 'metric'
                }  
            });
            console.log('teste');
            return res.data;
        }

    return weather;

    }

}


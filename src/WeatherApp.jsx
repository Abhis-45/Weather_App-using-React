import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo] = useState({
        city: "",
        feelslike : 0,
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        weather: "",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div>
            <SearchBox updateInfo={updateInfo}></SearchBox>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    );
}
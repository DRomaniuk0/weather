import React, {useEffect, useState} from 'react';
import './App.scss';
import StatusBar from "./components/TopBar/StatusBar";
import AppNavigation from "./components/AppNavigation/AppNavigation";
import Weather from "./components/Weather/Weather";
import weatherApi from "./helpers/getWeather";
import {useNavigations} from "./helpers/useNavigations";
const currentMonth = new Date().toLocaleString("en-US",{ month: 'long' })

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [weather, setWeather] = useState<any>(null);
    const {latitude, longitude} = useNavigations();

    useEffect(() => {
        if (!latitude || !longitude) {
            return;
        }

        setIsLoading(true)
        weatherApi.getWeather(latitude, longitude)
            .then((data) => {
            setIsLoading(false);
            setWeather(data);
        }).catch((error) => {
            setIsLoading(false)
            throw new Error(error);
        })
    }, [latitude, longitude]);

  return (
    <div className="App">
        <StatusBar />
        <AppNavigation/>
        <div className="today_date">
            <div className="container">
                {currentMonth}
            </div>
        </div>
        {isLoading ? <>Loading</> : <Weather currentWeather={weather}/>}
    </div>
  );
}

export default App;

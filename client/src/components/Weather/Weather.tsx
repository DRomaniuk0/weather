import {FC, PropsWithChildren, useMemo, useState} from "react";
import styles from './Weather.module.scss'
import WeatherImg from "./WeatherImg/WeatherImg";
import WeatherDetails from "./WeatherDetails/WetherDetails";
import TodayWeatherDetails from "./TodayWeatherDetails/TodayWeatherDetails";
import getPartOfDay from "../../helpers/tima-zones";
import {Period, WeatherList} from "../../helpers/types";

const Weather: FC<PropsWithChildren<any>> = ({currentWeather}) => {
    const [dayPeriod, setDayPeriod] = useState<number>(0);

    const weatherForDay:WeatherList[] = currentWeather?.data?.list;

    const periodWeatherInfo: WeatherList = useMemo(() => {
        return weatherForDay?.[dayPeriod];
    }, [dayPeriod]);
    
    console.log("::Weather -> periodWeatherInfo", periodWeatherInfo);

    return (
        <div className={styles.weather_block__wrapper}>
            <div className={styles.container}>
                {weatherForDay?.map((item: any, index: number) => {
                    const hours = new Date(item.dt_txt).getHours();
                    const partOfDay = getPartOfDay(hours)
                    const partOfDayBgColor = partOfDay.bgColor;

                    return (
                        <div className={styles.weather_card} key={index} onClick={() => setDayPeriod(index)}>
                            <WeatherImg dayPartDetails={item} partOfDay={partOfDay}/>
                            <WeatherDetails {...item} partOfDayBgColor={partOfDayBgColor}/>
                        </div>
                    )
                })}
                <TodayWeatherDetails periodWeatherInfo={periodWeatherInfo}/>
            </div>
        </div>
    )
}

export default Weather;
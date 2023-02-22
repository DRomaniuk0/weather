import styles from './Details.module.scss';
import Wind from "./Wind/Wind";
import UVIndex from "./UVIndex/UVIndex";
import Pressure from "./Pressure/Pressure";
import Humidity from "./Humidity/Humidity";
import {FC, PropsWithChildren} from "react";

const Details: FC<PropsWithChildren<any>> = (weatherDetails) => {
    const wind: number = weatherDetails?.todayWeatherInfo?.periodWeatherInfo?.wind?.speed;
    const uvIndex: number = weatherDetails?.todayWeatherInfo?.periodWeatherInfo?.main?.temp_kf;
    const pressure: number = weatherDetails?.todayWeatherInfo?.periodWeatherInfo?.main?.pressure;
    const humidity: number = weatherDetails?.todayWeatherInfo?.periodWeatherInfo?.main?.humidity;

    return(
        <div className={styles.details_wrapper}>
            <Wind windSpeed={wind}/>
            <UVIndex uvIndex={uvIndex}/>
            <Pressure pressure={pressure}/>
            <Humidity humidity={humidity}/>
        </div>
    )
}

export default Details;
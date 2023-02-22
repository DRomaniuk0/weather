import styles from './TodayWeatherDetails.module.scss'
import Details from "./Details/Details";
import {FC, PropsWithChildren} from "react";
import {WeatherList} from "../../../helpers/types";

const TodayWeatherDetails: FC<PropsWithChildren<any>> = (periodWeatherInfo: WeatherList) => {

    return(
        <div className={styles.today_details__weather}>
            <p>Today Details</p>
            <Details todayWeatherInfo={periodWeatherInfo}/>
        </div>
    )
}

export default TodayWeatherDetails;
import {FC} from "react";
import styles from './WeatherDetails.module.scss';


const WeatherDetails: FC = (dayPartDetails:any) => {
    const description = dayPartDetails?.weather[0]?.description;
    const temperature = dayPartDetails?.main?.temp;
    const cardBgColor = dayPartDetails?.partOfDayBgColor;

    const descriptionCapitalized = description?.charAt(0).toUpperCase() + description?.slice(1);

    return(
    <div style={{background: cardBgColor}} className={styles.weather_details__wrapper}>
        <p className={styles.weather_temperature}>{Math.trunc(temperature)}°</p>
        <p className={styles.weather_description}>{descriptionCapitalized}</p>
    </div>
  )
}

export default WeatherDetails;
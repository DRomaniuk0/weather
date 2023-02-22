import {FC} from "react";
import styles from './WeatherImg.module.scss';
import {WeatherIcon} from "../../../helpers/image-switcher";
import {WeatherImgProps} from "./WeatherImg.type";

const WeatherImg:FC<WeatherImgProps> = ({dayPartDetails, partOfDay}) => {
    const description: string = dayPartDetails?.weather[0]?.description;

    return (
        <div className={styles.weather_img}>
            <WeatherIcon description={description}/>
            <p className={styles.partOfDay}>{partOfDay?.partOfDay}</p>
        </div>
    )
}

export default WeatherImg;
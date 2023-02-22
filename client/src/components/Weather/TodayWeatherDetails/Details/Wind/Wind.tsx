import WindIcon from '../../../../../assets/icons/wind.svg';
import styles from './Wind.module.scss';
const Wind = (windSpeed: Record<string, number>) => {
    const wind = windSpeed?.windSpeed;
    return (
        <div className={styles.wind}>
            <img src={WindIcon} alt="WindIcon"/>
            <div>
                <p className={styles.wind_details}>E {wind ? wind : 0} kmh</p>
                <p className={styles.title}>Wind</p>
            </div>
        </div>
    )
}

export default Wind;
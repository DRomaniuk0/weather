import HumidityIcon from '../../../../../assets/icons/humidity.svg';
import styles from './Humidity.module.scss';
const Humidity = (humidity: Record<string, number>) => {
    const humidityValue = humidity?.humidity;
    return (
        <div className={styles.humidity}>
            <img src={HumidityIcon} alt="HumidityIcon"/>
            <div>
                <p className={styles.humidity_details}>{humidityValue ? humidityValue : 0}%</p>
                <p className={styles.title}>Humidity</p>
            </div>
        </div>
    )
}

export default Humidity;
import PressureIcon from "../../../../../assets/icons/pressure.svg";
import styles from "./Pressure.module.scss";
const Pressure = (pressure: Record<string, number>) => {
    const pressureValue = pressure?.pressure;
    return (
        <div className={styles.pressure}>
            <img src={PressureIcon} alt="WindIcon"/>
            <div>
                <p className={styles.pressure_details}>{pressureValue ? pressureValue : 0} hPa</p>
                <p className={styles.title}>Pressure</p>
            </div>
        </div>
    )
}

export default Pressure;
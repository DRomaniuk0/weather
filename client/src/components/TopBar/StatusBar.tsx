import {FC, useEffect, useMemo, useState} from "react";
import styles from "./StatusBar.module.scss";
import BatteryIcon from "../../assets/icons/battery.svg";
import WifiIcon from "../../assets/icons/wifi.svg";
import ConnectionIcon from "../../assets/icons/connection.svg";

const StatusBar: FC = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const clock = setInterval(() => tick(), 1000);

        return function cleanUp() {
            clearInterval(clock);
        };
    }, [time]);

    const tick = () => {
        setTime(new Date());
    }

    return(
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.status_bar__hour}>
                        {`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}
                    </div>
                    <div className={styles.status_bar__icons}>
                        <img src={ConnectionIcon} alt="ConnectionIcon"/>
                        <img src={WifiIcon} alt="WifiIcon"/>
                        <img src={BatteryIcon} alt="BatteryIcon"/>
                    </div>
                </div>
            </div>
    )
}

export default StatusBar;
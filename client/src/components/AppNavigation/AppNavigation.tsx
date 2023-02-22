import {FC} from "react";
import styles from "./AppNavigation.module.scss";
import ReturnBackIcon from "../../assets/icons/back.svg";
const AppNavigation: FC = () => {
    return(
        <div className={styles.main_wrapper}>
            <div className="container">
                <div className={styles.wrapper}>
                    <img src={ReturnBackIcon} alt="ReturnBackIcon"/>
                    <div className={styles.day}>
                        Today
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppNavigation;
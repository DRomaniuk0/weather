import UVIndexIcon from '../../../../../assets/icons/sun.svg';
import styles from './UVIndex.module.scss';

const UVIndex = (uvIndex: Record<string, number>) => {
    const uv = uvIndex?.uvIndex;
    return(
        <div className={styles.uvindex}>
            <img src={UVIndexIcon} alt="UVIndexIcon"/>
            <div>
                <p className={styles.uvindex_details}>{uv ? uv : 0}</p>
                <p className={styles.title}>UV Index</p>
            </div>
        </div>
    )
}

export default UVIndex;
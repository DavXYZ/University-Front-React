import styles from './common.module.css'; 

const Resource = () => {
    return (
        <div className={styles.resourceContainer}>
            <div className={styles.resourceLinks}>
                <div className={styles.resourceLink}>
                    <span>Գլխավոր</span>
                </div>
                <div className={styles.resourceLink}>
                    <span>Հեղինակային ռեսուրսներ</span>
                    <div className={styles.arrowDropDown}></div>
                </div>
                <div className={styles.resourceLink}>
                    <span>Հրապարակման աջակցության ծառայություններ</span>
                    <div className={styles.arrowDropDown}></div>
                </div>
            </div>
        </div>
    );
};

export default Resource;

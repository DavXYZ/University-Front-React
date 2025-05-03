
import styles from "./sidebar.module.css"



const Sidebar= ({ currentStep }) => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.sidebarItem} ${currentStep === 1 ? styles.active : ""}`}>
        <div className={styles.itemContent}>
          <span>Հոդվածի հիմնական տվյալներ</span>
        </div>
      </div>
      <div className={`${styles.sidebarItem} ${currentStep === 2 ? styles.active : ""}`}>
        <div className={styles.itemContent}>
          <span>Հեղինակի տվյալներ</span>
        </div>
      </div>
      <div className={`${styles.sidebarItem} ${currentStep === 3 ? styles.active : ""}`}>
        <div className={styles.itemContent}>
          <span>Հոդվածի ֆայլի վերբեռնում</span>
        </div>
      </div>
      <div className={`${styles.sidebarItem} ${currentStep === 4 ? styles.active : ""}`}>
        <div className={styles.itemContent}>
          <span>Վերանայեք և ներկայացրեք</span>
        </div>
      </div>
      <div className={styles.stepIndicators}>
        <div className={`${styles.indicator} ${currentStep >= 1 ? styles.completed : ""}`}>
          <div className={styles.indicatorNumber}>1</div>
        </div>
        <div className={`${styles.indicator} ${currentStep >= 2 ? styles.completed : ""}`}>
          <div className={styles.indicatorNumber}>2</div>
        </div>
        <div className={`${styles.indicator} ${currentStep >= 3 ? styles.completed : ""}`}>
          <div className={styles.indicatorNumber}>3</div>
        </div>
        <div className={`${styles.indicator} ${currentStep >= 4 ? styles.completed : ""}`}>
          <div className={styles.indicatorNumber}>4</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

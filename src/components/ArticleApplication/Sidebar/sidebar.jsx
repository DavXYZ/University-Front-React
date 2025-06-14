import styles from "./sidebar.module.css"
import { GoCheck } from "react-icons/go";
const Sidebar = ({ currentStep }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContent}>


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
          {[1, 2, 3, 4].map((step) => {
            const isCompleted = currentStep + 1 > step;
            const isCurrent = currentStep + 1 === step;

            return (
              <div
                key={step}
                className={`
          ${styles.indicator} 
          ${isCompleted ? styles.completed : ""} 
          ${isCurrent ? styles.current : ""}
        `}
              >
                <div className={styles.indicatorNumber}>
                  {isCompleted ? <  GoCheck /> : step}
                </div>
              </div>
            );
          })}
        </div>


      </div>
    </div>
  )
}

export default Sidebar

import styles from './Profile.module.css';
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaCopy, FaPhone, FaBirthdayCake, FaUniversity, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import NavBar from '../common2/NavBar/NavBar';
import HeaderAuthor from '../common2/HeaderAuthor/HeaderAuthor';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.profileWrap}>
        <NavBar />
        <HeaderAuthor />
    <div className={styles.profileContainer}>
      {/* Left section */}
      <div className={styles.left}>
        <div className={styles.userCard}>
          <img src="/path/to/user.jpg" alt="user" className={styles.avatar} />
          <h2>Արամ Կարապետյան</h2>
          <p className={styles.role}>Հեղինակ</p>
          <p className={styles.id}>1351</p>
        </div>

        <div className={styles.infoBlock}>
          <div className={styles.infoItem}>
            <span><FaEnvelope /></span>
            <input type="text" value="aram.karapetyan@example.com" readOnly />
            <FaCopy />
          </div>
          <div className={styles.infoItem}>
            <span><FaPhone /></span>
            <span>+374 91 123456</span>
          </div>
          <div className={styles.infoItem}>
            <span><FaBirthdayCake /></span>
            <span>Դեկտ, 12 1996</span>
          </div>
          <div className={styles.infoItem}>
            <span><FaUniversity /></span>
            <span>Հայաստանի ազգային պոլիտեխնիկական համալսարան</span>
          </div>
          <div className={styles.infoItem}>
            <span><FaGraduationCap /></span>
            <span>Տեխնիկական գիտությունների թեկնածու</span>
          </div>
          <div className={styles.infoItem}>
            <span><FaUserTie /></span>
            <span>Դոցենտ</span>
          </div>
        </div>

        <div className={styles.progressSection}>
          <div className={styles.circularProgress}>
            <div className={styles.circle}>
              <span>71%</span>
            </div>
            <p>Օգտագործողի հոսք</p>
          </div>
          <div className={styles.simpleProgress}>
            <p>Գրանցման առաջընթաց</p>
            <div className={styles.bar}><div className={styles.barFill}></div></div>
            <span>65%</span>
            <p>Վերջին թարմացում: 2024-03-30</p>
          </div>
        </div>

        <div className={styles.bottomStats}>
          <h4>Հոդվածային ակտիվություն</h4>
          <div>
            <span>2 հոդված</span>
            <p>Ներկայացված հոդվածներ</p>
            <p>Վերջին ուղարկվածը՝ 8 ամիս առաջ</p>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className={styles.right}>
        <h4>Ակտիվ հրատարակություններ և ժամանակացույցեր</h4>
        <div className={styles.publicationCard}>
          <span className={styles.newLabel}>New</span>
          <img src="/path/to/cover.jpg" alt="cover" />
          <p><strong>Վերջնաժամկետ՝</strong> 2024-03-15 - 2024-03-25</p>
          <p>Պատասխանատու խմբագիր՝ Դավիթ Ավագյան (Ք)</p>
          <p>Ընդհանուր՝ 1 հոսք (60% ավարտված)</p>
          <div className={styles.timer}>
            <span>05 : 16 : 21</span>
            <p>օր ժամ րոպե</p>
          </div>
          <button>Դիտել հրատարակությունը</button>
          <div className={styles.actionLinks}>
            <p>Հանդիպում խմբագրի հետ</p>
            <p>Վերջնաժամկետ՝ 2024-03-30</p>
            <button>Ավելացնել նոր հոդված</button>
            <button>Դիտել ժամանակացույցը</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;

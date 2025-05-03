import styles from './Profile.module.css';
import { FaEnvelope, FaCopy, FaPhone, FaBirthdayCake, FaUniversity, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import NavBar from '../common2/NavBar/NavBar';
import HeaderAuthor from '../common2/HeaderAuthor/HeaderAuthor';
import ProfileImg from '../assets/profile.png';
import ProgressCircle from './ProgressCircle/ProgressCircle';
import { useEffect } from 'react';

const Profile = ({ 
  userData, 
  authenticate,
  isLoading 
}) => {

  useEffect(() => {
    if (!userData.isAuth) {
      authenticate();
    }
  }, [authenticate, userData.isAuth]);

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('hy-AM', options);
  };

  return (
    <div className={styles.profileWrap}>
      <NavBar />
      <HeaderAuthor />
      <div className={styles.profileContainer}>
        {/* Left section */}
        <div className={styles.left}>
          <div className={styles.userCard}>
            <img 
              src={userData.profile_image || ProfileImg} 
              alt="user" 
              className={styles.avatar} 
            />
            <div className={styles.userInfo}>
              <h2>{userData.full_name || 'Անուն Ազգանուն'}</h2>
              <div className={styles.roleId}>
                <p className={styles.role}>{userData.role || 'Հեղինակ'}</p>
                {userData.id && <p className={styles.id}>{userData.id}</p>}
              </div>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.infoItem}>
              <span>Email</span>
              <div className={styles.valueBlock}>
                <input
                  type="text"
                  value={userData.email || 'user@example.com'}
                  readOnly
                  onClick={(e) => e.target.select()}
                />
                <FaCopy
                  className={styles.copyIcon}
                  onClick={() => {
                    navigator.clipboard.writeText(userData.email);
                    alert("Էլ․ փոստը պատճենվեց");
                  }}
                />
                <a
                  href={`mailto:${userData.email}?subject=Հետադարձ կապ&body=Բարև,`}
                  className={styles.mailIcon}
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
            
            {userData.phone_number && (
              <div className={styles.infoItem}>
                <span>Հեռ․</span>
                <span>{userData.phone_number}</span>
              </div>
            )}
            
            {userData.date_of_birth && (
              <div className={styles.infoItem}>
                <span>Ծննդ․</span>
                <span>{formatDate(userData.date_of_birth)}</span>
              </div>
            )}
            
            {userData.university && (
              <div className={styles.infoItem}>
                <span>Աշխատավայր</span>
                <span>{userData.university}</span>
              </div>
            )}
            
            {(userData.academic_degree || userData.academic_title) && (
              <div className={styles.infoItem}>
                <span>Գիտ․ աստ․/Կոչում</span>
                <span>
                  {[userData.academic_degree, userData.academic_title]
                    .filter(Boolean)
                    .join(', ')}
                </span>
              </div>
            )}
            
            {userData.position && (
              <div className={styles.infoItem}>
                <span>Պաշտոն</span>
                <span>{userData.position}</span>
              </div>
            )}
          </div>

          <div className={styles.onGoingArticle}>
            <span>Ընթացիկ հոդված</span>
            <ProgressCircle percentage={50} />
            <div className={styles.phaseAndDate}>
              <span>Գրախոսման փուլում 65%</span>
              <hr/>
              <span>Վերջնաժամկետ 20-03-2024</span>
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
import styles from './common.module.css'; 
import npua from "../assets/NPUA2.png";
import contacts from "../assets/contacts.png";

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogoSection}>
                    <img src={npua} alt="National Polytechnic University of Armenia Logo" className={styles.footerLogo} />
                    <div className={styles.footerUniversityName}>
                        <span>ՀԱՊՀ</span>
                    </div>
                </div>

                <div className={styles.footerLinksSection}>
                    <div className={styles.footerLinks}>
                        <a href="#">Գաղտնիություն</a>
                        <a href="#">Կայքի քարտեզ</a>
                    </div>
                    <div className={styles.footerCopyright}>
                        <span>
                            Հեղինակային իրավունք © Գիտության և տեխնոլոգիայի համալսարան: Բոլոր իրավունքները պաշտպանված են: Նախագծված է MTPC-ի կողմից:
                        </span>
                    </div>
                </div>

                <div className={styles.footerFollowUs}>
                    <span>Հետևեք մեզ</span>
                    <img src={contacts} alt="Social Media Contacts" className={styles.socialIcons} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
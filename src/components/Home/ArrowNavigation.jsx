import { useNavigate } from "react-router-dom";
import styles from './home.module.css';

function ArrowNavigation() {
    const navigate = useNavigate();

    const items = [
        { title: "Գրանցվեք կայքում", description: "Ստեղծեք հաշիվ՝ հոդվածի ներկայացման բաժին մուտք գործելու և դրա կարգավիճակին հետևելու համար:", path: "/signin" },
        { title: "Հետևեք կանոններին", description: "Ուսումնասիրեք հոդվածների ներկայացման պահանջները՝ համոզվելու համար, որ ձեր աշխատանքը համապատասխանում է համալսարանի չափանիշներին:", path: "/introduction" },
        { title: "Լրացրեք ձևը", description: "Մուտք գործեք հոդվածների ներկայացման բաժին և լրացրեք ձևը՝ ներառելով բոլոր անհրաժեշտ տվյալները։", path: "/title" },
        { title: "Սպասեք պատասխանին", description: "Հոդվածը ուղարկելուց հետո սպասեք խմբագրական թիմի առաջարկություններին կամ հաստատմանը:", path: "/submission" },
    ];

    return (
        <div className={styles.arrowNavigation}>
            {items.map((item, index) => (
                <div key={index} className={styles.navItem} onClick={() => navigate(item.path)}>
                    <div className={styles.navHeader}>
                        <span className={styles.navTitle}>{item.title}</span>
                        <div className={styles.navArrow}>
                            <span className={styles.arrowIcon}>→</span>
                        </div>
                    </div>
                    <p className={styles.navDescription}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ArrowNavigation;

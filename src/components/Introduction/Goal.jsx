import styles from './introduction.module.css';
import library from "../assets/library.png";
import people2 from "../assets/people2.png";
import people3 from "../assets/people3.png";
import people4 from "../assets/people4.png";

const Goal = () => {
    return (
        <div className={styles.goalContainer}>
            <div className={styles.goalWrapper}>
                <h2 className={styles.goalTitle}>Հոդված գրելու նպատակը</h2>

                <div className={styles.goalContent}>
                    {/* Row 1 */}
                    <div className={styles.goalRow}>
                        <div className={styles.goalCard}>
                            <div className={styles.goalCardContent}>
                                <h3 className={styles.goalCardTitle}>Հետաքրքրության թեմաների ընդգծում</h3>
                                <p className={styles.goalCardDescription}>
                                    Հոդվածները նպատակ ունեն կարևոր կամ համապատասխան թեմաները հանրությանը ներկայացնելու, դրանց ավելի տեսանելի դարձնելու։
                                </p>
                            </div>
                            <div className={styles.goalCardImage}>
                                <img src={library} alt="illustration" />
                            </div>
                        </div>

                        <div className={styles.goalCard}>
                            <div className={styles.goalCardContent}>
                                <h3 className={styles.goalCardTitle}>Տեղեկատվություն տրամադրում</h3>
                                <p className={styles.goalCardDescription}>
                                    Հոդվածը ուսումնասիրում է առանձին հարցեր ու խնդիրներ, մասնագիտական և օգտակար տեղեկություններ տրամադրելով ընթերցողին:
                                </p>
                            </div>
                            <div className={styles.goalCardImage}>
                                <img src={people2} alt="illustration" />
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className={styles.goalRow}>
                        <div className={styles.goalCard}>
                            <div className={styles.goalCardContent}>
                                <h3 className={styles.goalCardTitle}>Ընտրություն ներկայացնում</h3>
                                <p className={styles.goalCardDescription}>
                                    Հոդվածները հաճախ տալիս են տարբեր տեսակետներ, առաջարկներ կամ լուծումներ այն խնդիրներին, որոնց նրանք անդրադառնում են:
                                </p>
                            </div>
                            <div className={styles.goalCardImage}>
                                <img src={people3} alt="illustration" />
                            </div>
                        </div>

                        <div className={styles.goalCard}>
                            <div className={styles.goalCardContent}>
                                <h3 className={styles.goalCardTitle}>Մտորումներ առաջացնում</h3>
                                <p className={styles.goalCardDescription}>
                                    Հոդվածը կարող է նպաստել ընթերցողի մտածողությանը և հակասական հարցերի շուրջ կարծիք կազմելու:
                                </p>
                            </div>
                            <div className={styles.goalCardImage}>
                                <img src={people4} alt="illustration" />
                            </div>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className={styles.goalRow}>
                        <div className={styles.goalCard}>
                            <div className={styles.goalCardContent}>
                                <h3 className={styles.goalCardTitle}>Պատմություններ ու դեպքերի քննարկում</h3>
                                <p className={styles.goalCardDescription}>
                                    Շատ հոդվածներ տարածում են պատմություններ, իրադարձություններ կամ կարևոր մարդանց մասին՝ ազդելով ընթերցողի տեսանկյունին:
                                </p>
                            </div>
                            <div className={styles.goalCardImage}>
                                <img src={library} alt="illustration" />
                            </div>
                        </div>

                        <div className={styles.goalCard}>
                            <div className={styles.goalCardContent}>
                                <h3 className={styles.goalCardTitle}>Լեզվաբառարանական հստակություն</h3>
                                <p className={styles.goalCardDescription}>
                                    Հոդվածը պետք է լինեն հստակ, և տրամաբանական կառուցվածքով, որպեսզի ընթերցողը հեշտությամբ ընկալի մտքերն ու գաղափարները:
                                </p>
                            </div>
                            <div className={styles.goalCardImage}>
                                <img src={people2} alt="illustration" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Goal;

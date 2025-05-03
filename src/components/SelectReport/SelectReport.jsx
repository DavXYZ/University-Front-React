import styles from "./SelectReport.module.css";
import Header from '../common/Header';
import NavBar from "../common/Navbar";
import Footer from "../common/Footer";
import LearnMore from "../common/LearnMore";
import jpg1 from '../assets/high-angle-hand-correcting-grammar-mistakes.jpg'
import jpg2 from '../assets/man-correcting-grammar-mistakes-front-view.jpg'
import icon1 from '../assets/business-evaluation_15710641.png'
import icon2 from '../assets/higher-education_15710734.png'
import icon3 from '../assets/global-learning_15710739.png'
import icon1black from '../assets/a60ef520d1fd96088c5368a1bc6b1446c701f538.png'
import icon2black from '../assets/fed8d12f79110ee72064bb15df2de27b7b7cb2e2.png'
import icon3black from '../assets/02f5116e76671f1fa78a1b7c326b1aca5d42ccbd.png'
import iconNextSvg from '../assets/arrow_back_ios_new.svg'
export default function SelectReport() {
  return (
    <div className={styles.container}>
        <Header />
        <NavBar />
      {/* <header className={styles.header}>
        <div className={styles.topBanner}>
          <div className={styles.bannerText}>Հայաստանի ազգային պոլիտեխնիկական համալսարան</div>
        </div>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Image src="/placeholder.svg?height=45&width=158" alt="Logo" width={158} height={45} />
          </div>
          <nav className={styles.navigation}>
            <div className={styles.navItemActive}><div>Մեր մասին</div></div>
            <div className={styles.navItem}><div>Հրապարակումներ</div></div>
            <div className={styles.navItem}><div>Հայտարարություններ</div></div>
            <div className={styles.navItem}><div>Կապ մեզ հետ</div></div>
          </nav>
          <div className={styles.navActions}>
            <div className={styles.searchBox}>
              <div className={styles.searchIcon}></div>
              <div>Որոնել</div>
            </div>
            <div className={styles.languageSelector}>
              <div>ՀԱՅ</div>
              <div className={styles.dropdownIcon}></div>
            </div>
            <div className={styles.submitButton}><div>Ուղարկել Հոդված</div></div>
          </div>
        </div>
      </header> */}

      <section className={styles.hero}>
        <img
          src={jpg2}
          alt="Hero background"
          fill
          className={styles.heroBackground}
        />
        <div className={styles.heroOverlay}>
          <div className={styles.heroContent}>
            <div className={styles.heroMain}>
              <div className={styles.heroText}>
                <h1 className={styles.heroTitle}>Կիսվեք Ձեր Հետազոտություններով Աշխարհի Հետ!</h1>
                <p className={styles.heroDescription}>
                  Ձեր ձայնը կարևոր է ! Եթե ունեք ոգեշնչող պատմություն, խորքային վերլուծություն կամ հետաքրքիր
                  նորություններ, ապա սա Ձեր հնարավորությունն է ազդեցություն թողնելու։
                </p>
              </div>
              <div className={styles.heroImage}>
                <img
                  src={jpg1}
                  alt="Hero image"
                  width={481}
                  height={321}
                  className={styles.heroImageInner}
                />
              </div>
            </div>
            <div className={styles.heroActions}>
              <h2 className={styles.heroActionsTitle}>Որտեղ եք ցանկանում հրապարակել Ձեր հոդվածը?</h2>
              <div className={styles.actionCards}>
                <ActionCard title="Գրել Հոդված Բամբերում" iconPng={icon1}/>
                <ActionCard title="Գրել Հոդված Տեղեկագրում" iconPng={icon2}/>
                <ActionCard title="Գրել Հոդված Լրաբերում" iconPng={icon3}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.platforms}>
        <div className={styles.platformsHeader}>
          <h2 className={styles.platformsTitle}>Հարթակները, որոնց միջոցով կարող եք կիսվել Ձեր գաղափարներով</h2>
          <p className={styles.platformsDescription}>
            Այս երեք տարբեր հարթակներն առաջարկում են տարբեր հնարավորություններ՝ օգնելու Ձեզ հասնել ձեր լսարանին:
          </p>
        </div>
        <div className={styles.platformCards}>
          <PlatformCard
            title="Տեղեկագիր"
            iconPng={icon1black}
            description="Նվազագույն տեղեկություններ և արագ թարմացումներ՝ ներկայացնելով ամենակարևոր նորությունները:"
          />
          <PlatformCard
            title="Բանբեր"
            iconPng={icon2black}
            description="Այս հարթակն ավելի նպատակային է նրանց համար, ովքեր ցանկանում են գրել մանրամասն հոդվածներ։"
            isCentered={true}
          />
          <PlatformCard
          iconPng={icon3black}
            title="Լրաբեր"
            description="Արդյունավետ ու հետաքրքիր նյութեր՝ նպատակ ունենալով հասնել լայն լսարանի։"
          />
        </div>
      </section>

      <section className={styles.news}>
        <div className={styles.newsHeader}>
          <div className={styles.newsHeaderLeft}>
            <h2 className={styles.newsTitle}>Նուրություններ</h2>
            <p className={styles.newsDescription}>
              Պատմություններ համալսարանում մարդկանց, հետազոտությունների և նորարարությունների մասին
            </p>
          </div>
          <div className={styles.newsHeaderRight}>
            <span className={styles.viewMore}>Տեսնել Ավելին</span>
          </div>
        </div>
        <div className={styles.newsGrid}>
          <NewsCard
            category="Գյուղատնտեսություն"
            title="Գործարկում է կենտրոն, որը կենտրոնացած է մարդկանց և մոլորակների առողջության վրա"
            isLarge={true}
          />
          <div className={styles.newsRightColumn}>
            <NewsCard
              category="Առողջություն և բժշկություն"
              title="Գործարկում է կենտրոն, որը կենտրոնացած է մարդկանց և մոլորակների առողջության վրա"
              isWide={true}
            />
            <div className={styles.newsSmallGrid}>
              <NewsCard category="Հետազոտությոն" title="Նեյթ Պերսիլիի ընտրական պատմության մինի" isSmall={true} />
              <NewsCard category="Հետազոտությոն" title="Լինել առաջատար համալսարան" isSmall={true} />
            </div>
          </div>
        </div>
      </section>
      <LearnMore />
      <Footer />

      {/* <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <h3 className={styles.footerTopTitle}>Իմացեք ավելին</h3>
          <div className={styles.footerLinks}>
            <div className={styles.footerLink}>Բակալավրիատ հետազոտություն</div>
            <div className={styles.footerLink}>Հետդիպլոմային հետազոտություններ</div>
            <div className={styles.footerLink}>Գտեք հետազոտող</div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerLogo}>
            <Image src="/placeholder.svg?height=40&width=140" alt="Footer Logo" width={140} height={40} />
            <div className={styles.footerLogoText}>ՀԱՊՀ</div>
          </div>
          <div className={styles.footerInfo}>
            <div className={styles.footerInfoLinks}>
              <span>Գաղտնիություն</span>
              <span>Կայքի քարտեզ</span>
            </div>
            <div className={styles.copyright}>
              Հեղինակային իրավունք © Գիտության և տեխնոլոգիայի համալսարան: Բոլոր իրավունքները պաշտպանված են:
            </div>
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.socialMediaText}>Հետևեք մեզ</div>
            <div className={styles.socialIcons}>
              <div className={styles.socialIcon}></div>
              <div className={styles.socialIcon}></div>
              <div className={styles.socialIcon}></div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

function ActionCard({ title,iconPng }) {
  return (
    <div className={styles.actionCard}>
      <div className={styles.actionCardIcon}>
        <img src={iconPng}/>
      </div>
      <div className={styles.actionCardContent}>
        <div className={styles.actionCardTitle}>{title}</div>
        <div className={styles.actionCardArrow}><img src={iconNextSvg} alt="Next arrow" /></div>
      </div>
    </div>
  );
}

function PlatformCard({ title, description,iconPng, isCentered = false }) {
  return (
    <div className={`${styles.platformCard} ${isCentered ? styles.platformCardCentered : ""}`}>
      <div className={styles.platformCardIcon}>
        <img src={iconPng} alt={title} width={54} height={54} />
      </div>
      <div className={styles.platformCardTitle}>{title}</div>
      <div className={styles.platformCardDescription}>{description}</div>
    </div>
  );
}

function NewsCard({ category, title, isLarge = false, isWide = false, isSmall = false }) {
  const cardClassName = `${styles.newsCard} ${isLarge ? styles.newsCardLarge : ""} ${isWide ? styles.newsCardWide : ""} ${isSmall ? styles.newsCardSmall : ""}`;
  return (
    <div className={cardClassName}>
      <div className={styles.newsCardContent}>
        <div className={styles.newsCardCategory}>{category}</div>
        <h3 className={styles.newsCardTitle}>{title}</h3>
      </div>
    </div>
  );
}

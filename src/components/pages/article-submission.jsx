
import styles from "../ArticleApplication/ArticleSubmission/ArticleApplication.module.css"
import Header from "../common/Header"
import LearnMore from "../common/LearnMore"
import Footer from "../common/Footer"

import NavBar from "../common/NavBar"
import ArticleSubmissionContainer from "../ArticleApplication/ArticleSubmission/article-submission.container"

export default function ArticleSubmissionPage() {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      <div className={styles.secondaryNav}>
        <div className={styles.secondaryNavLinks}>
          <div className={styles.secondaryNavItem}>
            <div>Գլխավոր</div>
          </div>
          <div className={styles.secondaryNavItem}>
            <div>Հեղինակային ռեսուրսներ</div>
          </div>
          <div className={styles.secondaryNavItem}>
            <div>Հրապարակման աջակցության ծառայություններ</div>
          </div>
        </div>
      </div>
      <div className={styles.progressBar}>
        <div className={styles.progressIndicator}>
          <div>Ներկայացման առաջընթաց</div>
        </div>
      </div>
      <ArticleSubmissionContainer />
      <LearnMore />
      <Footer />
    </div>
  )
}

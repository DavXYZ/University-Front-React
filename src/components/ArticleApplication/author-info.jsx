"use client"

import { useState } from "react"
import styles from "./author-info.module.css"
import { ChevronDown } from "lucide-react"



const AuthorInfo = ({ onNext, onPrev }) => {
  const [biography, setBiography] = useState("")

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Քայլ 2: Հեղինակի տվյալներ</h1>
        <p className={styles.subtitle}>Հեղինակներ</p>
        <p className={styles.description}>
          Խնդրում ենք ավելացնել բոլոր այն հեղինակներին, ովքեր մասնակցել են ձեր հոդվածի պատրաստմանը, ինչպես նաև նրանց
          աշխատանքային կազմակերպությունները: Եթե հեղինակները մեր տվյալների բազայում չկան, կարող եք նրանց ավելացնել:
        </p>
      </div>

      <div className={styles.authorCard}>
        <div className={styles.authorInfo}>
          <div className={styles.authorName}>Անուն Ազգանուն</div>
          <div className={styles.authorDetails}>
            <div className={styles.detailsLeft}>
              <p>SSRN -ին պատկանելություն չի տրամադրում</p>
              <p>
                <strong>Էլ փոստ՝</strong> help@gmail.com
              </p>
              <p>
                <strong>ORCID.</strong> ORCID -ը չի տրամադրվել SSRN -ին
              </p>
            </div>
            <div className={styles.detailsRight}>
              <p>
                <strong>Փոխկապակցված դեր․</strong> դերը չի տրամադրվել SSRN -ին
              </p>
              <p>
                <strong>Դերը՝</strong> Կապ Հեղինակ
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Կրթական աստիճան</h2>
        <p className={styles.sectionDescription}>Ընտրեք ձեր կրթական աստիճանը:</p>
        <div className={styles.selectWrapper}>
          <select className={styles.select}>
            <option value="" disabled selected>
              Ընտրել
            </option>
            <option value="bachelor">Բակալավր</option>
            <option value="master">Մագիստրոս</option>
            <option value="phd">Դոկտոր</option>
          </select>
          <ChevronDown className={styles.selectIcon} size={16} />
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Հեղինակի կարճ կենսագրություն</h2>
        <p className={styles.sectionDescription}>Ստեղծեք 150 բառանոց հոդվածի հեղինակային կենսագրություն:</p>
        <div className={styles.textareaContainer}>
          <textarea className={styles.textarea} value={biography} onChange={(e) => setBiography(e.target.value)} />
          <div className={styles.charCount}>{biography.length}/40000</div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Ավելացնել հեղինակներ</h2>
        <p className={styles.sectionDescription}>Հեղինակի որոնում</p>
        <div className={styles.searchInput}>
          <input type="text" placeholder="Մուտքագրեք էլ․ հասցեն, անունը կամ ORCID" className={styles.input} />
        </div>
        <div className={styles.coauthorsInfo}>
          <p>Նախորդ համահեղինակներ՝ 0։</p>
        </div>
      </div>

      <div className={styles.addAuthorButton}>
        <button className={styles.outlineButton}>Ավելացնել նոր հեղինակ</button>
      </div>

      <div className={styles.actionButtons}>
        <button className={styles.saveButton}>Պահպանել</button>
        <button className={styles.prevButton} onClick={onPrev}>
          Նախորդ քայլը
        </button>
        <button className={styles.nextButton} onClick={onNext}>
          Հաջորդ քայլը
        </button>
      </div>
    </div>
  )
}

export default AuthorInfo

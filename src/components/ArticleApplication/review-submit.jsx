"use client"

import { useState } from "react"
import styles from "./review-submit.module.css"
import { ChevronDown, Check } from "lucide-react"



const ReviewSubmit = ({ onPrev, onSubmit }) => {
  const [termsAccepted, setTermsAccepted] = useState(true)

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Քայլ 4: Վերանայում և Ներկայացում</h1>
        <p className={styles.subtitle}>Վերբեռնված ներկայացում</p>
        <p className={styles.description}>Խնդրում ենք ներբեռնել ձեր հոդվածի նկարողագրաակն PDF կամ Word ֆայլը:</p>
      </div>

      <div className={styles.uploadSection}>
        <p className={styles.uploadInstruction}>
          Սահմանել համապատասխան ֆայլի անվանումը՝ ՀեղինակիԱնուն_ՀոդվածՎերնագիր_Տարեթիվ:
        </p>

        <div className={styles.dropZone}>
          <div className={styles.uploadIcon}></div>
          <div className={styles.uploadText}>
            <span>Ներբեռնել ֆայլերը այստեղ`</span>
            <span className={styles.uploadLink}>ընտրել</span>
          </div>
          <p className={styles.uploadLimit}>Ներբեռնել PDF կամ word առավելագույնը 100 ՄԲ</p>
        </div>

        <div className={styles.uploadedFiles}>
          <h3 className={styles.uploadedTitle}>Բեռնված ֆայլեր</h3>

          <div className={styles.fileItem}>
            <div className={styles.filePreview}></div>
            <div className={styles.fileProgress}>
              <span>50% 2 sec left</span>
            </div>
          </div>

          <div className={styles.fileItem}>
            <div className={styles.filePreview}></div>
            <div className={styles.fileActions}></div>
          </div>
        </div>

        <div className={styles.uploadButtons}>
          <button className={styles.cancelButton}>Չեղարկել</button>
          <button className={styles.attachButton}>Կցել ֆայլ</button>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Հոդվածի տեասկը</h2>
        <p className={styles.sectionDescription}>Խնդրում ենք նշել ստորև՝ ըստ աշխատանքի բնույթի։</p>
        <div className={styles.selectWrapper}>
          <select className={styles.select}>
            <option value="" disabled selected>
              Ընտրել
            </option>
            <option value="scientific">Գիտական հոդված</option>
            <option value="review">Ակնարկային հոդված</option>
            <option value="report">Կարճ հաղորդում</option>
          </select>
          <ChevronDown className={styles.selectIcon} size={16} />
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Հոդվածի վերնագիր</h2>
        <div className={styles.inputField}>
          <input type="text" value="Վերնագիր" readOnly className={styles.input} />
        </div>
      </div>

      <div className={styles.inlineFields}>
        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Լեզու</label>
          <div className={styles.selectWrapper}>
            <select className={styles.select} defaultValue="Անգլերեն">
              <option value="Անգլերեն">Անգլերեն</option>
              <option value="Հայերեն">Հայերեն</option>
              <option value="Ռուսերեն">Ռուսերեն</option>
            </select>
            <ChevronDown className={styles.selectIcon} size={16} />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel}>Ամսաթիվ</label>
          <div className={styles.dateInput}>
            <input type="text" value="mm / dd / yyyy" readOnly className={styles.input} />
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Հիմնաբառեր</h2>
        <p className={styles.sectionDescription}>
          Տրամադրեք հիմնական բառեր, որոնք բնութագրում են հոդվածի թեման։ Հիմնաբառ ավելացնելու համար մուտքագրեք բառը և
          սեղմեք՝ <span className={styles.underline}>Ավելացնել</span>։
        </p>
        <div className={styles.keywordsContainer}>
          <div className={styles.keywordTag}>Տեղեկատվական հա...</div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Կատեգորիա</h2>
        <p className={styles.sectionDescription}>Ընտրեք ձեր հոդվածի հիմնական կատեգորիան</p>
        <div className={styles.categoryOptions}>
          <div className={styles.categoryOption}>
            <div className={styles.categoryCheckbox}>
              <Check size={18} className={styles.checkIcon} />
            </div>
            <span>Կիրառական գիտություններ</span>
          </div>
          <div className={styles.categoryOption}>
            <div className={styles.categoryCheckboxInactive}></div>
            <span>Առողջապահական գիտություններ</span>
          </div>
          <div className={styles.categoryOption}>
            <div className={styles.categoryCheckboxInactive}></div>
            <span>Հումանիտար գիտություններ</span>
          </div>
          <div className={styles.categoryOption}>
            <div className={styles.categoryCheckboxInactive}></div>
            <span>Կենսաբանական գիտություններ</span>
          </div>
          <div className={styles.categoryOption}>
            <div className={styles.categoryCheckboxInactive}></div>
            <span>Բնագիտական գիտություններ</span>
          </div>
          <div className={styles.categoryOption}>
            <div className={styles.categoryCheckboxInactive}></div>
            <span>Հասարակագիտական գիտություններ</span>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Հրապարակման մանրամասներ՝ ձեռագրի նույնականացման համար</h2>
        <div className={styles.inputField}>
          <input type="text" placeholder="Ավելացնել նոր մանրամասներ" className={styles.input} />
        </div>
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Հեղինակներ</h2>
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
      </div>

      <div className={styles.formSection}>
        <h2 className={styles.sectionTitle}>Պայմաններ և դրույթներ</h2>
        <p className={styles.termsText}>
          ԾԱՆՈԹԱԳՐՈՒԹՅՈՒՆ. Դուք չեք փոխանցում հեղինակային իրավունքը որևէ փաստաթղթի, որը տեղադրում եք SSRN-ում: Փոխարենը,
          դուք տրամադրում եք SSRN-ին ոչ-էքսկլյուզիվ իրավունք տեղադրել և տարածել ձեր աշխատանքը՝ համաձայն ՀՏՀ-ի «SSRN-ի
          ապրանքներ և ծառայություններ» բաժնի: Դուք կարող եք ցանկացած պահի հեռացնել ձեր աշխատանքը SSRN-ից:
          <br />
          Տրամադրելով նյութ SSRN-ին և ընդունելով մեր Օգտագործման պայմանները, դուք հաստատում եք, որ ձեր նյութը չի խախտում
          այլ կողմերի հեղինակային կամ այլ սեփականության իրավունքներ: Դուք կարող եք հրապարակել ձեր աշխատանքը SSRN-ում,
          եթե դուք եք հեղինակային իրավունքի սեփականատերը, ունեք սեփականատիրոջ թույլտվությունը կամ հրապարակչի
          քաղաքականությամբ թույլատրված է այն:
        </p>
        <div className={styles.termsCheckbox}>
          <div className={styles.checkbox} onClick={() => setTermsAccepted(!termsAccepted)}>
            {termsAccepted && <Check size={18} className={styles.checkIcon} />}
          </div>
          <p className={styles.checkboxLabel}>
            Ես վերանայել եմ բոլոր ֆայլերը, որոնք վերբեռնում եմ, և ունեմ դրանք վերբեռնելու իրավունք: Ես կարդացել և
            համաձայն եմ SSRN-ի Պայմաններին և դրույթներին:
          </p>
        </div>
      </div>

      <div className={styles.actionButtons}>
        <button className={styles.prevButton} onClick={onPrev}>
          Նախորդ քայլը
        </button>
        <button className={styles.submitButton} onClick={onSubmit}>
          Ներկայացնել
        </button>
      </div>
    </div>
  )
}

export default ReviewSubmit

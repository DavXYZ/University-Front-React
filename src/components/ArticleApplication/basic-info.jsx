"use client"

import { useState } from "react"
import styles from "./basic-info.module.css"
import { ChevronDown, Calendar, X, Check, Info } from "lucide-react"



const BasicInfo = ({ onNext }) => {
  const [values, setValues] = useState({
    isAuthor: true,
    journal: "",
    journalSeries: "",
    articleType: "",
    title: "",
    language: "Անգլերեն",
    date: "",
    field: "Կիրառական գիտություններ",
    keywords: ["Տեղեկատվական համակարգեր"],
  })
  const [currentKeyword, setCurrentKeyword] = useState("")
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleRadioChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleAddKeyword = () => {
    if (currentKeyword.trim()) {
      setValues({
        ...values,
        keywords: [...values.keywords, currentKeyword.trim()],
      })
      setCurrentKeyword("")
    }
  }

  const handleRemoveKeyword = (keyword) => {
    setValues({
      ...values,
      keywords: values.keywords.filter((k) => k !== keyword),
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Basic validation
    const newErrors = {}
    if (!values.journal) newErrors.journal = "Խնդրում ենք ընտրել հանդեսը"
    if (!values.journalSeries) newErrors.journalSeries = "Խնդրում ենք ընտրել հանդեսի սերիան"
    if (!values.articleType) newErrors.articleType = "Խնդրում ենք ընտրել հոդվածի տեսակը"
    if (!values.title) newErrors.title = "Խնդրում ենք ներկայացնել հոդվածի վերնագիրը"
    if (!values.date) newErrors.date = "Խնդրում ենք ընտրել ամսաթիվը"
    if (values.keywords.length === 0) newErrors.keywords = "Խնդրում ենք ավելացնել առնվազն մեկ հիմնաբառ"

    setErrors(newErrors)
    setTouched({
      journal: true,
      journalSeries: true,
      articleType: true,
      title: true,
      date: true,
      keywords: true,
    })

    if (Object.keys(newErrors).length === 0) {
      onNext()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formHeader}>
        <div className={styles.formDescription}>
          Այս ձևաթուղթը նախատեսված է ձեր հոդվածի նախնական վերնագիրը, բանալի բառերը և կարճ նկարագրությունը լրացնելու
          համար։ Ներկայացված տեղեկատվությունը ստուգվելու և հաստատվելու դեպքում, դուք կկարողանաք շարունակել ձեր հոդվածի
          ամբողջական տարբերակի ներկայացումը։
        </div>
        <div className={styles.formTitle}>
          <h1>Քայլ 1: Հոդվածի հիմնական տվյալներ</h1>
          <p>
            Խնդրում ենք ներբեռնել ձեր հոդվածի PDF կամ Word ֆայլը: Մենք կհավաքագրենք վերնագիրը, ամփոփագիրը և հիմնաբառերը՝
            վերանայման համար:
          </p>
        </div>
      </div>

      <div className={styles.guideContainer}>
        <div className={styles.guide}>
          <div className={styles.guideHeader}>
            <h2>Օգնող Ուղեցույց</h2>
            <Info size={20} className={styles.infoIcon} />
          </div>
          <div className={styles.guideContent}>
            <p>
              <strong>1. Վերնագիր (Title)</strong>
              <br />
              Պետք է լինի հստակ և ինֆորմատիվ:
              <br />
              Խուսափեք կրճատումներից և վերացական ձևակերպումներից:
              <br />
              Մեծատառերի և փոքրատառերի ճիշտ օգտագործում (օր.՝ «Գլոբալ տաքացման ազդեցությունը գյուղատնտեսության վրա»):
            </p>

            <p>
              <strong>2. Բանալին բառեր (Keywords)</strong>
              <br />
              Նշեք 5-7 բանալի բառ, որոնք ճշգրիտ նկարագրում են հոդվածի հիմնական թեման:
              <br />
              Բառերը առանձնացրեք ստորակետով (օր.՝ "էկոլոգիա, տաքացում, գյուղատնտեսություն, կլիմա, հետազոտություն"):
            </p>

            <p>
              <strong>3. Կարճ նկարագրություն (Abstract)</strong>
              <br />
              Նկարագրությունը պետք է լինի 150-200 բառ:
              <br />
              Ներառեք հոդվածի նպատակները, հիմնական մեթոդները և ակնկալվող արդյունքները:
            </p>

            <p>
              <strong>4. Կատեգորիա (Category)</strong>
              <br />
              Նշեք հոդվածի համապատասխան ակադեմիական ոլորտը (օր.՝ "Տնտեսագիտություն, Բնագիտություն, Կրթություն"):
            </p>

            <p className={styles.warning}>
              Ձևաթղթի հաստատումից հետո, օգտատիրոջը կուղարկվի ծանուցում, որպեսզի նա կարողանա ներբեռնել հոդվածի ամբողջական
              տարբերակը:
            </p>
          </div>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <div className={styles.radioGroup}>
            <label className={styles.formLabel}>Դու՞ք հեղինա՞կն եք, թե ՞ ներկայացնում եք մեկ ուրիշի անունից:</label>
            <div className={styles.radioOptions}>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="isAuthor"
                  checked={values.isAuthor === true}
                  onChange={() => handleRadioChange("isAuthor", true)}
                />
                <Check size={20} className={styles.radioIcon} />
                <span>Ես հեղինակն եմ</span>
              </label>
              <label className={styles.radioOption}>
                <input
                  type="radio"
                  name="isAuthor"
                  checked={values.isAuthor === false}
                  onChange={() => handleRadioChange("isAuthor", false)}
                />
                <div className={styles.radioIconInactive} />
                <span>Ես ներկայացնում եմ մեկ ուրիշի անունից</span>
              </label>
            </div>
          </div>

          <div className={styles.selectGroup}>
            <label className={styles.formLabel}>Ընտրել հանդեսը</label>
            <p className={styles.formDescription}>Խնդրում ենք նշել ստորև՝ բաժիններից որևէ մեկը։</p>
            <div className={styles.selectWrapper}>
              <select name="journal" className={styles.select} value={values.journal} onChange={handleChange}>
                <option value="" disabled>
                  Ընտրել
                </option>
                <option value="journal1">Բանբեր</option>
                <option value="journal2">Տեղեկագիր</option>
                <option value="journal3">Լրաբեր</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>
            {errors.journal && touched.journal && <div className={styles.errorMessage}>{errors.journal}</div>}
          </div>

          <div className={styles.selectGroup}>
            <label className={styles.formLabel}>Ընտրել հանդեսի սերիան</label>
            <p className={styles.formDescription}>Խնդրում ենք նշել ստորև՝ որ ֆակուլտետին է համապատասխանում։</p>
            <div className={styles.selectWrapper}>
              <select
                name="journalSeries"
                className={styles.select}
                value={values.journalSeries}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Ընտրել
                </option>
                <option value="series1">Ճարտարագիտություն</option>
                <option value="series2">Տնտեսագիտություն</option>
                <option value="series3">Տեղեկատվական տեխնոլոգիաներ</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>
            {errors.journalSeries && touched.journalSeries && (
              <div className={styles.errorMessage}>{errors.journalSeries}</div>
            )}
          </div>

          <div className={styles.selectGroup}>
            <label className={styles.formLabel}>Հոդվածի տեսակը</label>
            <p className={styles.formDescription}>Խնդրում ենք նշել ստորև՝ ըստ աշխատանքի բնույթի։</p>
            <div className={styles.selectWrapper}>
              <select name="articleType" className={styles.select} value={values.articleType} onChange={handleChange}>
                <option value="" disabled>
                  Ընտրել
                </option>
                <option value="type1">Գիտական հոդված</option>
                <option value="type2">Ակնարկային հոդված</option>
                <option value="type3">Կարճ հաղորդում</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>
            {errors.articleType && touched.articleType && (
              <div className={styles.errorMessage}>{errors.articleType}</div>
            )}
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.formLabel}>Հոդվածի վերնագիր</label>
            <p className={styles.formDescription}>Խնդրում ենք ներկայացնել հոդվածի վերնագիրը:</p>
            <div className={styles.titleInput}>
              <textarea name="title" className={styles.textarea} value={values.title} onChange={handleChange} />
            </div>
            {errors.title && touched.title && <div className={styles.errorMessage}>{errors.title}</div>}
          </div>

          <div className={styles.inlineFields}>
            <div className={styles.selectGroup}>
              <label className={styles.formLabel}>Լեզու՝ Word-ի լեզուն: Օրինակ՝ English</label>
              <div className={styles.selectWrapper}>
                <select name="language" className={styles.select} value={values.language} onChange={handleChange}>
                  <option value="Անգլերեն">Անգլերեն</option>
                  <option value="Հայերեն">Հայերեն</option>
                  <option value="Ռուսերեն">Ռուսերեն</option>
                </select>
                <ChevronDown size={16} className={styles.selectIcon} />
              </div>
            </div>

            <div className={styles.selectGroup}>
              <label className={styles.formLabel}>Ամսաթիվ՝ հոդվածի գրության օրը (օր.՝ mm/dd/yyyy):</label>
              <div className={styles.dateInput}>
                <input type="date" name="date" className={styles.select} value={values.date} onChange={handleChange} />
                <Calendar size={20} className={styles.calendarIcon} />
              </div>
              {errors.date && touched.date && <div className={styles.errorMessage}>{errors.date}</div>}
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.formLabel}>Ոլորտ</label>
            <p className={styles.formDescription}>Ընտրեք ձեր հոդվածի հիմնական ոլորտը</p>

            <div className={styles.fieldOptions}>
              <label className={styles.fieldOption}>
                <input
                  type="radio"
                  name="field"
                  value="Կիրառական գիտություններ"
                  checked={values.field === "Կիրառական գիտություններ"}
                  onChange={() => handleRadioChange("field", "Կիրառական գիտություններ")}
                />
                <Check size={18} className={styles.fieldIcon} />
                <span>Կիրառական գիտություններ</span>
              </label>

              <label className={styles.fieldOption}>
                <input
                  type="radio"
                  name="field"
                  value="Առողջապահական գիտություններ"
                  checked={values.field === "Առողջապահական գիտություններ"}
                  onChange={() => handleRadioChange("field", "Առողջապահական գիտություններ")}
                />
                <div className={styles.fieldIconInactive} />
                <span>Առողջապահական գիտություններ</span>
              </label>

              <label className={styles.fieldOption}>
                <input
                  type="radio"
                  name="field"
                  value="Հումանիտար գիտություններ"
                  checked={values.field === "Հումանիտար գիտություններ"}
                  onChange={() => handleRadioChange("field", "Հումանիտար գիտություններ")}
                />
                <div className={styles.fieldIconInactive} />
                <span>Հումանիտար գիտություններ</span>
              </label>

              <label className={styles.fieldOption}>
                <input
                  type="radio"
                  name="field"
                  value="Կենսաբանական գիտություններ"
                  checked={values.field === "Կենսաբանական գիտություններ"}
                  onChange={() => handleRadioChange("field", "Կենսաբանական գիտություններ")}
                />
                <div className={styles.fieldIconInactive} />
                <span>Կենսաբանական գիտություններ</span>
              </label>

              <label className={styles.fieldOption}>
                <input
                  type="radio"
                  name="field"
                  value="Բնագիտական գիտություններ"
                  checked={values.field === "Բնագիտական գիտություններ"}
                  onChange={() => handleRadioChange("field", "Բնագիտական գիտություններ")}
                />
                <div className={styles.fieldIconInactive} />
                <span>Բնագիտական գիտություններ</span>
              </label>

              <label className={styles.fieldOption}>
                <input
                  type="radio"
                  name="field"
                  value="Հասարակագիտական գիտություններ"
                  checked={values.field === "Հասարակագիտական գիտություններ"}
                  onChange={() => handleRadioChange("field", "Հասարակագիտական գիտություններ")}
                />
                <div className={styles.fieldIconInactive} />
                <span>Հասարակագիտական գիտություններ</span>
              </label>
            </div>
          </div>

          <div className={styles.keywordsGroup}>
            <label className={styles.formLabel}>Առանցքային բառեր</label>
            <p className={styles.formDescription}>
              Տրամադրեք հիմնական բառեր, որոնք բնութագրում են հոդվածի թեման։ Հիմնաբառ ավելացնելու համար մուտքագրեք բառը և
              սեղմեք՝ <span className={styles.underline}>Ավելացնել</span>։
            </p>

            <div className={styles.keywordsInput}>
              <div className={styles.keywordsList}>
                {values.keywords.map((keyword, index) => (
                  <div key={index} className={styles.keywordTag}>
                    <span>{keyword}</span>
                    <button type="button" onClick={() => handleRemoveKeyword(keyword)} className={styles.removeKeyword}>
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>

              <div className={styles.addKeyword}>
                <input
                  type="text"
                  value={currentKeyword}
                  onChange={(e) => setCurrentKeyword(e.target.value)}
                  placeholder="Մուտքագրեք հիմնաբառ"
                  className={styles.keywordInput}
                />
                <button type="button" onClick={handleAddKeyword} className={styles.addKeywordButton}>
                  Ավելացնել
                </button>
              </div>
            </div>
            {errors.keywords && touched.keywords && <div className={styles.errorMessage}>{errors.keywords}</div>}
          </div>
        </div>

        <div className={styles.formActions}>
          <button type="button" className={styles.saveButton}>
            Պահպանել
          </button>
          <button type="submit" className={styles.nextButton}>
            Հաջորդ քայլը
          </button>
        </div>
      </form>
    </div>
  )
}

export default BasicInfo

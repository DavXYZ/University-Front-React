"use client"

import { ChevronDown, Calendar, X, Check, Info } from "lucide-react"
import { Formik, Field, Form, ErrorMessage } from "formik"
import styles from "./basic-info.module.css"
import TreeNode from "../TreeNode/TreeNode"
import basicInfoSchema from "../../../validation/schemas/basicInfoSchema"
import { ARTICLE_TYPE_OPTIONS, FIELD_OPTIONS, JOURNAL_OPTIONS, LANGUAGE_OPTIONS, SERIES_OPTIONS } from "../../../config/basicInfoConfig"





const BasicInfo = ({basicInfo,handleSubmit,handleToggleExpand,setCurrentKeyword,currentKeyword,handleSetData,expandedNodes}) => {
 
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

            <p>
              <strong>5. Հեղինակի տվյալներ (Author Details)</strong>
              <br />
              Անուն, Ազգանուն
              <br />
              Գիտական կոչում (PhD, MSc, BA, և այլն):
              <br />
              Հաստատության անվանում (օր.՝ "Երևանի պետական համալսարան")
              <br />
              Էլ․ հասցե (հավանական հետագա կապի համար):
            </p>

            <p>
              <strong>6. Հավելյալ նշումներ (Additional Notes)</strong>
              <br />
              Եթե անհրաժեշտ է, կցեք տվյալներ, որոնք կարող են օգնել վերնագրի և թեմայի հաստատման գործընթացում:
            </p>

            <p>
              <strong>Հիշեցում օգտատերներին</strong>
              <br />
              Բոլոր դաշտերը պարտադիր են լրացման համար։
              <br />
              Ներբեռնվող ֆայլը պետք է լինի PDF կամ Word ֆորմատով:
              <br />
              Ֆայլի անվանումը պետք է լինի միայն լատինատառ՝ օրինակ՝
              <br />
              "Petrosyan_Article_Title.pdf":
            </p>

            <p className={styles.warning}>
              Ձևաթղթի հաստատումից հետո, օգտատիրոջը կուղարկվի ծանուցում, որպեսզի նա կարողանա ներբեռնել հոդվածի ամբողջական
              տարբերակը:
            </p>
          </div>
        </div>
      </div>


      <Formik
        initialValues={
          basicInfo || {
            isAuthor: true,
            journal: "",
            journalSeries: "",
            articleType: "",
            title: "",
            language: "Անգլերեն",
            date: new Date().toISOString().split('T')[0], // Today's date as default,
            field: "Կիրառական գիտություններ",
            keywords: ["Տեղեկատվական համակարգեր"],
          }
        }
        validationSchema={basicInfoSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue, handleSubmit, isSubmitting }) => (
          <Form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formSection}>
              <div className={styles.radioGroup}>
                <label className={styles.formLabel}>Դու՞ք հեղինա՞կն եք, թե ՞ ներկայացնում եք մեկ ուրիշի անունից:</label>
                <div className={styles.radioOptions}>
                  <label className={styles.radioOption}>
                    <Field
                      type="radio"
                      name="isAuthor"
                      checked={values.isAuthor === true}
                      onChange={() => setFieldValue("isAuthor", true)}
                      className={styles.radioInput}
                    />
                    {values.isAuthor ? (
                      <Check size={20} className={styles.radioIcon} />
                    ) : (
                      <div className={styles.radioIconInactive} />
                    )}
                    <span>Ես հեղինակն եմ</span>
                  </label>
                  <label className={styles.radioOption}>
                    <Field
                      type="radio"
                      name="isAuthor"
                      checked={values.isAuthor === false}
                      onChange={() => setFieldValue("isAuthor", false)}
                      className={styles.radioInput}
                    />
                    {!values.isAuthor ? (
                      <Check size={20} className={styles.radioIcon} />
                    ) : (
                      <div className={styles.radioIconInactive} />
                    )}
                    <span>Ես ներկայացնում եմ մեկ ուրիշի անունից</span>
                  </label>
                </div>
              </div>

              {/* Journal selection */}
              <div className={styles.selectGroup}>
                <label className={styles.formLabel}>Ընտրել հանդեսը</label>
                <p className={styles.formDescription}>Խնդրում ենք նշել ստորև՝ բաժիններից որևէ մեկը։</p>
                <div className={styles.selectWrapper}>
                  <Field as="select" name="journal" className={styles.select}>
                    <option value="" disabled>
                      Ընտրել
                    </option>
                    {JOURNAL_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </Field>
                  <ChevronDown size={16} className={styles.selectIcon} />
                </div>
                <ErrorMessage name="journal" component="div" className={styles.errorMessage} />
              </div>

              {/* Journal series selection */}
              <div className={styles.selectGroup}>
                <label className={styles.formLabel}>Ընտրել հանդեսի սերիան</label>
                <p className={styles.formDescription}>Խնդրում ենք նշել ստորև՝ որ ֆակուլտետին է համապատասխանում։</p>
                <div className={styles.selectWrapper}>
                  <Field as="select" name="journalSeries" className={styles.select}>
                    <option value="" disabled>
                      Ընտրել
                    </option>
                    {SERIES_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </Field>
                  <ChevronDown size={16} className={styles.selectIcon} />
                </div>
                <ErrorMessage name="journalSeries" component="div" className={styles.errorMessage} />
              </div>

              {/* Article type selection */}
              <div className={styles.selectGroup}>
                <label className={styles.formLabel}>Հոդվածի տեսակը</label>
                <p className={styles.formDescription}>Խնդրում ենք նշել ստորև՝ ըստ աշխատանքի բնույթի։</p>
                <div className={styles.selectWrapper}>
                  <Field as="select" name="articleType" className={styles.select}>
                    <option value="" disabled>
                      Ընտրել
                    </option>
                    {ARTICLE_TYPE_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </Field>
                  <ChevronDown size={16} className={styles.selectIcon} />
                </div>
                <ErrorMessage name="articleType" component="div" className={styles.errorMessage} />
              </div>

              {/* Article title */}
              <div className={styles.inputGroup}>
                <label className={styles.formLabel}>Հոդվածի վերնագիր</label>
                <p className={styles.formDescription}>Խնդրում ենք ներկայացնել հոդվածի վերնագիրը:</p>
                <div className={styles.titleInput}>
                  <Field as="textarea" name="title" className={styles.textarea} rows={5} />
                </div>
                <ErrorMessage name="title" component="div" className={styles.errorMessage} />
              </div>

              {/* Language and date */}
              <div className={styles.inlineFields}>
                <div className={styles.selectGroup}>
                  <label className={styles.formLabel}>Լեզու՝ Word-ի լեզուն: Օրինակ՝ English</label>
                  <div className={styles.selectWrapper}>
                    <Field as="select" name="language" className={styles.select}>
                      {LANGUAGE_OPTIONS.map(({ value, label }) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </Field>
                    <ChevronDown size={16} className={styles.selectIcon} />
                  </div>
                </div>

                <div className={styles.selectGroup}>
                  <label className={styles.formLabel}>Ամսաթիվ՝ հոդվածի գրության օրը (օր.՝ mm/dd/yyyy):</label>
                  <div className={styles.dateInput}>
                    <Field type="date" name="date" className={styles.select} />
                  </div>
                  <ErrorMessage name="date" component="div" className={styles.errorMessage} />
                </div>
              </div>

              {/* Field selection */}
              <div className={styles.fieldContainer}>
                <label className={styles.fieldLabel}>Ոլորտ</label>
                <p className={styles.fieldDescription}>Ընտրեք ձեր հոդվածի համապատասխան ակադեմիական ոլորտը</p>

                <div className={styles.fieldDropdown}>
                  {FIELD_OPTIONS.map((fieldOption) => (
                    <TreeNode
                      key={fieldOption.id}
                      node={fieldOption}
                      selectedField={values.field}
                      onFieldSelect={(fieldId) => setFieldValue("field", fieldId)}
                      expandedNodes={expandedNodes}
                      onToggleExpand={handleToggleExpand}
                      level={0}
                    />
                  ))}
                </div>
                <ErrorMessage name="field" component="div" className={styles.fieldError} />
              </div>

              {/* Keywords */}
              <div className={styles.keywordsGroup}>
                <label className={styles.formLabel}>Առանցքային բառեր</label>
                <p className={styles.formDescription}>
                  Տրամադրեք հիմնական բառեր, որոնք բնութագրում են հոդվածի թեման։ Հիմնաբառ ավելացնելու համար մուտքագրեք
                  բառը և սեղմեք՝ <span className={styles.underline}>Ավելացնել</span>։
                </p>

                <div className={styles.keywordsInput}>
                  <div className={styles.keywordsList}>
                    {values.keywords.map((keyword, index) => (
                      <div key={`${keyword}-${index}`} className={styles.keywordTag}>
                        <span>{keyword}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const newKeywords = values.keywords.filter((k) => k !== keyword)
                            setFieldValue("keywords", newKeywords)
                          }}
                          className={styles.removeKeyword}
                          aria-label={`Remove ${keyword}`}
                        >
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
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && currentKeyword.trim()) {
                          e.preventDefault()
                          if (currentKeyword.trim()) {
                            setFieldValue("keywords", [...values.keywords, currentKeyword.trim()])
                            setCurrentKeyword("")
                          }
                        }
                      }}
                      placeholder="Մուտքագրեք հիմնաբառ"
                      className={styles.keywordInput}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (currentKeyword.trim()) {
                          setFieldValue("keywords", [...values.keywords, currentKeyword.trim()])
                          setCurrentKeyword("")
                        }
                      }}
                      className={styles.addKeywordButton}
                      disabled={!currentKeyword.trim()}
                    >
                      Ավելացնել
                    </button>
                  </div>
                </div>
                <ErrorMessage name="keywords" component="div" className={styles.errorMessage} />
              </div>
            </div>

            <div className={styles.formActions}>
              <button
                type="button"
                className={styles.saveButton}
                onClick={() => handleSetData(values)}
              >
                Պահպանել
              </button>
              <button type="submit" className={styles.nextButton} disabled={isSubmitting}>
                Հաջորդ քայլը
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default BasicInfo

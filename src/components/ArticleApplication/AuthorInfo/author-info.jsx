"use client"

import { Formik, Form, Field, ErrorMessage } from "formik"
import { ChevronDown, Search, X, Loader2 } from "lucide-react"
import styles from "./author-info.module.css"
import hintStyles from "./hint.module.css"
import RegisterForm from "../../auth/Register/RegisterForm"
import authorInfoSchema from "../../../validation/schemas/authorInfoSchema"
import { EDUCATION_LEVELS } from "../../../config/authorInfoConfig"

const AuthorInfo = ({isRegisterModalOpen,
            showHint,
            setShowHint,
            handleKeyPress,
            handleInputChange,
            isSearching,
            handleAddAuthor,
            handleSelectAuthor,
            handleRemoveAuthor,
            handleSubmit,
            onPrev,
            authorInfo,
            searchQuery,
            handleSearch,
            searchError,
            showResults,
            searchResults,
            setIsRegisterModalOpen,
            handleSave
          }) => {


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

      {authorInfo.authors &&
        authorInfo.authors.map((author, index) => (
          <div key={index} className={styles.authorCard}>
            <div className={styles.authorInfo}>
              <div className={styles.authorHeader}>
                <div className={styles.authorName}>{author.name}</div>
                {index > 0 && (
                  <button
                    className={styles.removeAuthorButton}
                    onClick={() => handleRemoveAuthor(index)}
                    aria-label="Remove author"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              <div className={styles.authorDetails}>
                <div className={styles.detailsLeft}>
                  <p>{author.affiliation}</p>
                  <p>
                    <strong>Էլ փոստ՝</strong> {author.email}
                  </p>
                  <p>
                    <strong>ORCID.</strong> {author.orcid}
                  </p>
                </div>
                <div className={styles.detailsRight}>
                  <p>
                    <strong>Փոխկապակցված դեր․</strong> {author.relatedRole}
                  </p>
                  <p>
                    <strong>Դերը՝</strong> {author.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

      <Formik
        initialValues={{
          educationLevel: authorInfo.educationLevel || "",
          biography: authorInfo.biography || "",
        }}
        validationSchema={authorInfoSchema}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Կրթական աստիճան</h2>
              <p className={styles.sectionDescription}>Ընտրեք ձեր կրթական աստիճանը:</p>
              <div className={styles.selectWrapper}>
                <Field as="select" name="educationLevel" className={styles.select}>
                  <option value="" disabled>
                    Ընտրել
                  </option>
                  {EDUCATION_LEVELS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Field>
                <ChevronDown className={styles.selectIcon} size={16} />
              </div>
              <ErrorMessage name="educationLevel" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Հեղինակի կարճ կենսագրություն</h2>
              <p className={styles.sectionDescription}>Ստեղծեք 150 բառանոց հոդվածի հեղինակային կենսագրություն:</p>
              <div className={styles.textareaContainer}>
                <Field as="textarea" name="biography" className={styles.textarea} />
                <div className={styles.charCount}>{values.biography.length}/40000</div>
              </div>
              <ErrorMessage name="biography" component="div" className={styles.errorMessage} />
            </div>

            <div className={styles.formSection}>
              <h2 className={styles.sectionTitle}>Ավելացնել հեղինակներ</h2>
              <p className={styles.sectionDescription}>Հեղինակի որոնում</p>

              <div className={styles.searchContainer}>
                <div className={styles.searchInputWrapper}>
                  <input
                    type="text"
                    placeholder="Մուտքագրեք էլ․ հասցեն, անունը կամ ORCID"
                    className={styles.searchInput}
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    disabled={isSearching}
                  />
                  <button
                    type="button"
                    className={styles.searchButton}
                    onClick={handleSearch}
                    disabled={isSearching || !searchQuery.trim()}
                    aria-label="Search authors"
                  >
                    {isSearching ? <Loader2 size={18} className={styles.spinning} /> : <Search size={18} />}
                  </button>
                </div>

                {searchError && <div className={styles.searchError}>{searchError}</div>}

                {showResults && searchResults.length > 0 && (
                  <div className={styles.searchResults}>
                    {searchResults.map((author, index) => (
                      <div
                        key={author.id || index}
                        className={styles.searchResultItem}
                        onClick={() => handleSelectAuthor(author)}
                      >
                        <div className={styles.resultName}>
                          {author.full_name}
                        </div>
                        <div className={styles.resultEmail}>{author.email}</div>
                        <div className={styles.resultAffiliation}>
                          {author.affiliation || author.organization || "Չի նշված"}
                        </div>
                        {author.orcid && <div className={styles.resultOrcid}>ORCID: {author.orcid}</div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles.coauthorsInfo}>
                <p>Նախորդ համահեղինակներ՝ {authorInfo.authors ? authorInfo.authors.length - 1 : 0}։</p>
              </div>
            </div>

            <div className={styles.addAuthorButton}>
              <button
                type="button"
                className={styles.outlineButton}
                onClick={() => {
                  setIsRegisterModalOpen(true)
                  setShowHint(true)
                }}
              >
                Ավելացնել նոր հեղինակ
              </button>
            </div>

            {showHint && (
              <div className={hintStyles.hintContainer}>
                <div className={hintStyles.hintClose} onClick={() => setShowHint(false)} />
                <div className={hintStyles.hintHeader}>
                  <div className={hintStyles.hintContent}>
                    <div>
                      <span className={hintStyles.hintTitle}>
                        Հուշում 📌<br />
                      </span>
                      <span className={hintStyles.hintText}>
                        Գրանցումն ավարտելու համար անհրաժեշտ է լրացնել բոլոր հեղինակների տվյալները։
                        <br />
                        Առանց այս քայլի հնարավոր չէ շարունակել։Եթե հեղինակների քանակը չեն համապատասխանի ներբեռնած ֆայլին
                        գործընթացը կկասեցվի։
                        <br />
                      </span>
                    </div>
                    <div className={hintStyles.hintFooter}>
                      <div className={hintStyles.hintBullet} />
                      <div style={{ width: 20, height: 20, background: "#3371EA" }} />
                      <div className={hintStyles.hintImportant}>
                        Լրացրեք բոլոր պահանջվող դաշտերը՝ շարունակելու համար!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isRegisterModalOpen && (
              <RegisterForm
                onClick={() => setIsRegisterModalOpen(false)}
                onSubmit={handleAddAuthor}
                showOnlySubmit={true}
              />
            )}

            <div className={styles.actionButtons}>
              <button
                type="button"
                className={styles.saveButton}
                onClick={() => handleSave(values)}>
                Պահպանել
              </button>
              <button type="button" className={styles.prevButton} onClick={onPrev}>
                Նախորդ քայլը
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

export default AuthorInfo

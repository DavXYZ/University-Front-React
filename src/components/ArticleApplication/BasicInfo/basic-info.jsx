"use client"

import {Info} from "lucide-react"
import styles from "./basic-info.module.css"
import BasicInfoForm from "@/components/ArticleApplication/Forms/BasicInfoForm.jsx";
import {useState} from "react";
import basicInfoSchema from "@/validation/schemas/basicInfoSchema.js";
import {Form, Formik} from "formik";


const BasicInfo = ({
                       basicInfo,
                       handleSubmitBasicInfo,
                       handleToggleExpand,
                       setCurrentKeyword,
                       currentKeyword,
                       handleSetData,
                       expandedNodes,
                       isClickedButtonSave,
                       setIsClickedButtonSave
                   }) => {


    return (
        <div className={styles.container}>
            <div className={styles.formHeader}>
                <div className={styles.formDescription}>
                    Այս ձևաթուղթը նախատեսված է ձեր հոդվածի նախնական վերնագիրը, բանալի բառերը և կարճ նկարագրությունը
                    լրացնելու
                    համար։ Ներկայացված տեղեկատվությունը ստուգվելու և հաստատվելու դեպքում, դուք կկարողանաք շարունակել ձեր
                    հոդվածի
                    ամբողջական տարբերակի ներկայացումը։
                </div>
                <div className={styles.formTitle}>
                    <h1>Քայլ 1: Հոդվածի հիմնական տվյալներ</h1>
                    <p>
                        Խնդրում ենք ներբեռնել ձեր հոդվածի PDF կամ Word ֆայլը: Մենք կհավաքագրենք վերնագիրը, ամփոփագիրը և
                        հիմնաբառերը՝
                        վերանայման համար:
                    </p>
                </div>
            </div>


            <div className={styles.guideContainer}>
                <div className={styles.guide}>
                    <div className={styles.guideHeader}>
                        <h2>Օգնող Ուղեցույց</h2>
                        <Info size={20} className={styles.infoIcon}/>
                    </div>

                    <div className={styles.guideContent}>
                        <p>
                            <strong>1. Վերնագիր (Title)</strong>
                            <br/>
                            Պետք է լինի հստակ և ինֆորմատիվ:
                            <br/>
                            Խուսափեք կրճատումներից և վերացական ձևակերպումներից:
                            <br/>
                            Մեծատառերի և փոքրատառերի ճիշտ օգտագործում (օր.՝ «Գլոբալ տաքացման ազդեցությունը
                            գյուղատնտեսության վրա»):
                        </p>

                        <p>
                            <strong>2. Բանալին բառեր (Keywords)</strong>
                            <br/>
                            Նշեք 5-7 բանալի բառ, որոնք ճշգրիտ նկարագրում են հոդվածի հիմնական թեման:
                            <br/>
                            Բառերը առանձնացրեք ստորակետով (օր.՝ "էկոլոգիա, տաքացում, գյուղատնտեսություն, կլիմա,
                            հետազոտություն"):
                        </p>

                        <p>
                            <strong>3. Կարճ նկարագրություն (Abstract)</strong>
                            <br/>
                            Նկարագրությունը պետք է լինի 150-200 բառ:
                            <br/>
                            Ներառեք հոդվածի նպատակները, հիմնական մեթոդները և ակնկալվող արդյունքները:
                        </p>

                        <p>
                            <strong>4. Կատեգորիա (Category)</strong>
                            <br/>
                            Նշեք հոդվածի համապատասխան ակադեմիական ոլորտը (օր.՝ "Տնտեսագիտություն, Բնագիտություն,
                            Կրթություն"):
                        </p>

                        <p>
                            <strong>5. Հեղինակի տվյալներ (Author Details)</strong>
                            <br/>
                            Անուն, Ազգանուն
                            <br/>
                            Գիտական կոչում (PhD, MSc, BA, և այլն):
                            <br/>
                            Հաստատության անվանում (օր.՝ "Երևանի պետական համալսարան")
                            <br/>
                            Էլ․ հասցե (հավանական հետագա կապի համար):
                        </p>

                        <p>
                            <strong>6. Հավելյալ նշումներ (Additional Notes)</strong>
                            <br/>
                            Եթե անհրաժեշտ է, կցեք տվյալներ, որոնք կարող են օգնել վերնագրի և թեմայի հաստատման
                            գործընթացում:
                        </p>

                        <p>
                            <strong>Հիշեցում օգտատերներին</strong>
                            <br/>
                            Բոլոր դաշտերը պարտադիր են լրացման համար։
                            <br/>
                            Ներբեռնվող ֆայլը պետք է լինի PDF կամ Word ֆորմատով:
                            <br/>
                            Ֆայլի անվանումը պետք է լինի միայն լատինատառ՝ օրինակ՝
                            <br/>
                            "Petrosyan_Article_Title.pdf":
                        </p>

                        <p className={styles.warning}>
                            Ձևաթղթի հաստատումից հետո, օգտատիրոջը կուղարկվի ծանուցում, որպեսզի նա կարողանա ներբեռնել
                            հոդվածի ամբողջական
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
                onSubmit={handleSubmitBasicInfo}
                enableReinitialize
            >
                {({values, setFieldValue, handleSubmit, isSubmitting}) => (

                    <Form onSubmit={handleSubmit}>
                        <BasicInfoForm
                            basicInfo={basicInfo}
                            handleSubmit={handleSubmit}
                            handleToggleExpand={handleToggleExpand}
                            setCurrentKeyword={setCurrentKeyword}
                            currentKeyword={currentKeyword}
                            handleSetData={handleSetData}
                            expandedNodes={expandedNodes}
                            isClickedButtonSave={isClickedButtonSave}
                            values={values}
                            setFieldValue={setFieldValue}
                        />
                        <div className={styles.formActions}>
                            <button
                                type="button"
                                className={styles.saveButton}
                                onClick={() => setIsClickedButtonSave(true)}
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

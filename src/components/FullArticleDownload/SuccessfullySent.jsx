"use client"

import { useDispatch } from "react-redux"
import styles from "./successfullSent.module.css"
import subSucPng from "../assets/submission-success.png"
import { resetSubmission, clearForm } from "@/redux/reducers/article-submission-reducer.js"

const SubmissionSuccess = () => {
    const dispatch = useDispatch()

    const handleStartNewSubmission = () => {
        dispatch(resetSubmission())
        dispatch(clearForm())
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headerSection}>
                    <h1 className={styles.title}>«Ձեր հայտը հաջողությամբ ուղարկվել է:»</h1>
                    <p className={styles.subtitle}>
                        Մեր համակարգը այժմ վերանայում է այն: Շնորհակալություն Ձեր ներդրման համար:
                    </p>
                </div>

                <div className={styles.imageContainer}>
                    <img
                        src={subSucPng || "/placeholder.svg"}
                        alt="Submission success illustration"
                        className={styles.successImage}
                    />
                </div>

                <div className={styles.infoSection}>
                    <div className={styles.container}>
                        <div className={styles.smallTitle}>Հաջորդ քայլեր</div>
                        <ul className={styles.list}>
                            <li>
                                Եթե ձեր հայտը հաստատվի, Ձեզ կուղարկվի հաստատման էլեկտրոնային նամակ նշված էլ.
                                փոստի հասցեին:
                            </li>
                            <li>
                                Հետևեք Ձեր ներկայացման կարգավիճակին ձեր պրոֆիլի միջոցով:
                            </li>
                            <li>
                                Լրացուցիչ տեղեկությունների համար կարող եք կապ հաստատել մեր աջակցության թիմի հետ:
                            </li>
                        </ul>
                    </div>

                    <div className={styles.newSubmissionContainer}>
                        <button onClick={handleStartNewSubmission} className={styles.newSubmissionButton || styles.button}>
                            Ներկայացնել նոր հոդված
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubmissionSuccess;

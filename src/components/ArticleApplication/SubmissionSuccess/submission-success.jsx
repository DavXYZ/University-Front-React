"use client"

import { useDispatch } from "react-redux"
import styles from "./submission-success.module.css"
import subSucPng from "../../assets/submission-success.png"
import { resetSubmission, clearForm } from "../../../redux/reducers/article-submission-reducer"

const SubmissionSuccess = () => {
  const dispatch = useDispatch()

  const handleStartNewSubmission = () => {
    // Reset the submission state
    dispatch(resetSubmission())
    // Clear the form data for a fresh start
    dispatch(clearForm())
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.headerSection}>
          <h1 className={styles.title}>«Ձեր հայտը հաջողությամբ ուղարկվել է:</h1>
          <p className={styles.subtitle}>
            Շնորհակալություն, որ ներկայացրել եք հոդվածի նախնական վերնագիրը: Ձեր ներկայացրած տվյալները ստացվել են, և մենք
            կդիտարկենք դրանք, որպեսզի ստուգենք, արդյոք վերնագիրը համապատասխանում է մեր ստանդարտներին:
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
          <div className={styles.processingInfo}>
            <p className={styles.processingTitle}>Ձեր հարցումն այժմ գտնվում է մշակումային փուլում:</p>
            <p className={styles.processingText}>
              Մենք կուղարկենք հաստատման կամ մերժման ծանուցում մոտ օրերս:
              <br />
              Եթե դուք ունեք որևէ հարց կամ լրացուցիչ տեղեկատվություն տրամադրելու կարիք, խնդրում ենք կապվել մեզ հետ:
            </p>
          </div>

          <p className={styles.thankYou}>Շնորհակալություն համագործակցության համար:</p>

          <p className={styles.contactInfo}>
            Հայաստանի ազգային պոլիտեխնիկական համալսարան Էլ. փոստ: info@polytechnic.am Հեռախոս: +374 10 58 01 02
          </p>

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

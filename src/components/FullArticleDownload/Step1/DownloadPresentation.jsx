import React from 'react';
import styles from './downloadPresentation.module.css';

const DownloadPresentation = () => {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.noticeContainer}>
        <p className={styles.noticeText}>
          Եթե ցանկանում եք ներկայացնել ձեր հետազոտական հոդվածների շարքում, խնդրում ենք կապ հաստատել ձեր ադմինիստրատորի հետ՝ ստանալու համար ձեր եզակի ներկայացման հղումը։
        </p>
      </div>
      <div className={styles.stepContent}>
        <h2 className={styles.stepTitle}>Քայլ 1: Ներբեռնել ներկայացումը</h2>
        <p className={styles.stepDescription}>
          Խնդրում ենք ներբեռնել ձեր հոդվածի PDF կամ Word ֆայլը: Մենք կհավաքագրենք վերնագիրը, ամփոփագիրը և հիմնաբառերը՝ վերանայման համար:
        </p>
      </div>
    </div>
  );
};

export default DownloadPresentation;
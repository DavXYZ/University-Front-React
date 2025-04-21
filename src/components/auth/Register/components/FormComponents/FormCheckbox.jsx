// FormCheckbox.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import s from '../../Register.module.css';

const FormCheckbox = ({ name, label }) => (
  <div className={s.checkboxContainer}>
    <label className={s.checkboxLabel}>
      <Field type="checkbox" name={name} className={s.checkbox} />
      {label}
    </label>
    <ErrorMessage name={name} component="div" className={s.formSummaryError} />
  </div>
);

export default FormCheckbox;
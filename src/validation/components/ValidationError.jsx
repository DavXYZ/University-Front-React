// src/components/FormComponents/ValidationError.jsx
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from 'formik';
import s from './ValidationError.module.css'; // Make sure to import the CSS module

const ValidationError = ({ name, id }) => {
  const { t } = useTranslation();
  
  return (
    <ErrorMessage name={name}>
      {(msg) => (
        <div id={id} className={s.errorMessage} role="alert">
          {t(msg)}
        </div>
      )}
    </ErrorMessage>
  );
};

export default ValidationError;
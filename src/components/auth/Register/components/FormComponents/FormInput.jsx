import { Field, useField } from 'formik';
import ValidationError from '../../../../../validation/components/ValidationError';
import s from '../../Register.module.css';

const FormInput = ({ name, label, placeholder, type = "text" }) => {
  const [field, meta] = useField(name);
  const isInvalid = meta.error && (meta.touched || meta.submitCount > 0);

  return (
    <div className={`${s.inputContainer} ${isInvalid ? s.invalid : ''}`}>
      {label && (
        <label htmlFor={name} className={s.label}>
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${s.input} ${isInvalid ? s.invalidInput : ''}`}
        aria-describedby={`${name}-error`}
        aria-invalid={isInvalid ? "true" : "false"}
        {...field}
      />
      {isInvalid && (
        <ValidationError name={name} id={`${name}-error`} />
      )}
    </div>
  );
};

export default FormInput;
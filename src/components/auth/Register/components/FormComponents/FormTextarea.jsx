import React from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import s from './FormTextarea.module.css';
import ValidationError from '../../../../../validation/components/ValidationError';

const FormTextarea = ({ name, label, placeholder }) => {
    const [field, meta] = useField(name);
    const isInvalid = meta.touched && meta.error;

    return (
        <div className={`${s.inputContainer} ${isInvalid ? s.invalid : ''}`}>
            {label && <label htmlFor={name} className={s.label}>{label}</label>}
            <Field
                as="textarea"
                id={name}
                name={name}
                placeholder={placeholder}
                className={`${s.textarea} ${isInvalid ? s.invalidInput : ''}`}
                aria-describedby={`${name}-error`}
                aria-invalid={isInvalid ? "true" : "false"}
                {...field}
            />
            <ValidationError name={name} id={`${name}-error`} />
        </div>
    )
};

export default FormTextarea;
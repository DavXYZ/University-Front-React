import React from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import s from '../../Register.module.css';
import ValidationError from '../../../../../validation/components/ValidationError';
// Example for FormSelect
const FormSelect = ({ name, label, options, onChange, disabled }) => {
    const [field, meta] = useField(name);
    const isInvalid = meta.error && (meta.touched || meta.submitCount > 0);

    return (
        <div className={`${s.inputContainer} ${isInvalid ? s.invalid : ''}`}>
            {label && <label htmlFor={name} className={s.label}>{label}</label>}
            <Field
                as="select"
                id={name}
                name={name}
                onChange={onChange}
                disabled={disabled}
                className={`${s.input} ${isInvalid ? s.invalidInput : ''}`}
                aria-describedby={`${name}-error`}
                aria-invalid={isInvalid ? "true" : "false"}
                {...field}
            >
                <option value="">Select an option</option>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Field>
            {isInvalid && (
                <ValidationError name={name} id={`${name}-error`} />
            )}
        </div>
    );
};

export default FormSelect;
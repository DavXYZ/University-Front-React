
import { Field, useField } from "formik"
import s from "../../Register.module.css"
import ValidationError from "../../../../../validation/components/ValidationError"
import { useTranslation } from "react-i18next";
const FormSelect = ({ name, label, options, onChange, disabled, value, placeholder }) => {
    const {t} = useTranslation();
    const [field, meta] = useField(name);
    const isInvalid = meta.error && (meta.touched || meta.submitCount > 0);
    const handleChange = (e) => {
        if (onChange) onChange(e);
        field.onChange(e);
    };

    return (
        <div className={`${s.inputContainer} ${isInvalid ? s.invalid : ""}`}>
            {label && (
                <label htmlFor={name} className={s.label}>
                    {label}
                </label>
            )}
            <Field
                as="select"
                id={name}
                name={name}
                onChange={handleChange}
                disabled={disabled}
                className={`${s.input} ${isInvalid ? s.invalidInput : ""}`}
                aria-describedby={`${name}-error`}
                aria-invalid={isInvalid ? "true" : "false"}
                value={value !== undefined ? value : field.value}
            >
                <option value="">{placeholder || `${t('select')} ${label}`}</option>
                {Array.isArray(options) &&
                    options.map((option, index) => {
                        // Handle both object and string options
                        const optionValue = typeof option === 'object' ? 
                            (option.value || option.code || option.name) : 
                            option;
                        const optionLabel = typeof option === 'object' ? 
                            (option.label || option.name) : 
                            option;
                        
                        return (
                            <option key={`${optionValue}-${index}`} value={optionValue}>
                                {optionLabel}
                            </option>
                        );
                    })}
            </Field>
            {isInvalid && <ValidationError name={name} id={`${name}-error`} />}
        </div>
    );
};

export default FormSelect;
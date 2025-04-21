// src/validation/schemas/registerSchema.js
import * as Yup from 'yup';
import { validateAge } from '../validators/ageValidator';
import { validatePhone } from '../validators/phoneValidator';
import i18n from '../../i18n'; // Import your i18n instance

// Helper function to get translations
const t = (key, options = {}) => {
  return i18n.t(key, options);
};

export const registerSchema = Yup.object({
  full_name: Yup.string()
    .required(t('validation.required'))
    .min(2, t('validation.minLength', { min: 2 }))
    .max(50, t('validation.maxLength', { max: 50 })),

  email: Yup.string()
    .email(t('validation.email'))
    .required(t('validation.required')),

  password: Yup.string()
    .min(8, t('validation.minLength', { min: 8 }))
    .max(50, t('validation.maxLength', { max: 50 }))
    .required(t('validation.required')),

  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], t('validation.passwordMismatch'))
    .required(t('validation.required')),

  phone_number: Yup.string()
    .test('phone-validation', t('validation.phoneFormat'), validatePhone)
    .optional(),

  gender: Yup.string()
    .oneOf(["male", "female"], t('validation.invalidGender'))
    .required(t('validation.required')),

  country: Yup.string()
    .required(t('validation.required')),

  city: Yup.string()
    .required(t('validation.required')),

  date_of_birth: Yup.date()
    .required(t('validation.required'))
    .nullable()
    .test('age-validation', t('validation.ageRestriction'), validateAge),

  university: Yup.string()
    .required(t('validation.universityRequired')),

  data_processing_consent: Yup.boolean()
    .oneOf([true], 'You must agree to data processing')
    .required('You must agree to data processing')
});
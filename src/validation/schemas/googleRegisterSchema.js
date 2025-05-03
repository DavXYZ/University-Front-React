// src/validation/schemas/registerSchema.js
import * as Yup from 'yup';
import { validateAge } from '../validators/ageValidator';
import { validatePhone } from '../validators/phoneValidator';
import i18n from '../../i18n'; // Import your i18n instance

// Helper function to get translations
const t = (key, options = {}) => {
  return i18n.t(key, options);
};

const googleRegisterSchema = Yup.object({
  
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

export default googleRegisterSchema;
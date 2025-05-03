import { useTranslation, Trans } from 'react-i18next';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect, useRef } from 'react';
import { Country, City } from 'country-state-city';
import { NavLink } from 'react-router-dom';

import s from './Register.module.css';

// Components
import { FormInput, FormTextarea, FormSelect, FormCheckbox } from './components/FormComponents';
import UniversityAutocomplete from './components/UniversityAutocomplete/UniversityAutocomplete';
import Header from '../../common/Header';
import NavBar from '../../common/NavBar';
import Footer from '../../common/Footer';

// Constants and Config
import { fieldConfigs } from '../../../config/fieldConfigs';
import { registerSchema } from '../../../validation';

// Assets
import profile_image from '../../assets/profile-image.png';
import camera_icon from '../../assets/camera-icon.png';

const RegisterForm = ({ onSubmit }) => {
    const { t, i18n } = useTranslation();
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedCountryCode, setSelectedCountryCode] = useState("");
    const [previewImage, setPreviewImage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const loadCountries = () => {
            const allCountries = Country.getAllCountries().map((c, idx) => ({
                originalName: c.name,
                name: t(`country.${c.name}`, { defaultValue: c.name }),
                code: c.isoCode,
                key: `${c.isoCode}-${idx}`
            }));
            setCountries(allCountries);
        };

        loadCountries();
    }, [i18n.language, t]);

    const handleCountryChange = (countryName, setFieldValue) => {
        const countryObj = countries.find(c => c.name === countryName);
        if (!countryObj) return;

        const country = Country.getAllCountries().find(c => c.name === countryObj.originalName);

        if (country) {
            setSelectedCountry(countryName);
            setSelectedCountryCode(country.isoCode);
            setFieldValue("country", countryName);
            setFieldValue("city", "");

            const countryCities = City.getCitiesOfCountry(country.isoCode)?.map(c => ({
                originalName: c.name,
                name: t(`cities.${c.name}`, c.name)
            })) || [];

            setCities(countryCities);
        } else {
            setCities([]);
            setSelectedCountryCode("");
        }
    };

    const handleImageUpload = (event, setFieldValue) => {
        const file = event.target.files[0];
        if (!file) return;

        const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (!validTypes.includes(file.type)) {
            alert(t('form.errors.invalidImageType'));
            return;
        }

        const img = new Image();
        img.onload = () => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
                setFieldValue('profile_image', file);
            };
            reader.readAsDataURL(file);
        };
        img.src = URL.createObjectURL(file);
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    const isFormComplete = (values, errors) => {
        // Check required fields
        const requiredFields = Object.keys(fieldConfigs).filter(key => 
            !fieldConfigs[key]?.optional
        );
        
        // Check if all required fields are filled and valid
        const fieldsValid = requiredFields.every(key => {
            const value = values[key];
            
            // Special handling for different field types
            if (key === 'data_processing_consent') return value === true;
            if (key === 'profile_image') return value !== null;
            
            return value && value.toString().trim() !== '' && !errors[key];
        });
        
        // Check password match
        const passwordsMatch = values.password === values.confirm_password;
        
        return fieldsValid && passwordsMatch;
    };

    const renderField = (field, setFieldValue, values) => {
        const config = fieldConfigs[field];

        const translatedConfig = {
            ...config,
            label: t(config.label),
            placeholder: config.placeholder ? t(config.placeholder) : undefined,
            options: config.options ? config.options.map(option => ({
                label: t(option.label),
                value: option.value
            })) : undefined
        };

        if (field === "country") {
            return (
                <FormSelect
                    key={`country-${values.country}`}
                    name={field}
                    label={translatedConfig.label}
                    options={countries.map(c => ({
                        label: c.name,
                        value: c.name
                    }))}
                    value={values.country}
                    placeholder={translatedConfig.placeholder}
                    onChange={(e) => handleCountryChange(e.target.value, setFieldValue)}
                />
            );
        }

        if (field === "city") {
            return (
                <FormSelect
                    key={`city-${selectedCountryCode}`}
                    name={field}
                    label={translatedConfig.label}
                    options={cities.map(city => ({
                        label: city.name,
                        value: city.name
                    }))}
                    value={values.city}
                    placeholder={translatedConfig.placeholder}
                    disabled={!selectedCountry || cities.length === 0}
                    onChange={(e) => setFieldValue(field, e.target.value)}
                />
            );
        }

        if (field === 'university') {
            return (
                <div key={`university-${values.university}`}>
                    <label htmlFor="university" className={s.label}>
                        {translatedConfig.label}
                    </label>
                    <UniversityAutocomplete
                        value={values.university}
                        onChange={(value) => setFieldValue('university', value)}
                        placeholder={translatedConfig.placeholder}
                    />
                    <ErrorMessage name="university" component="div" className={s.formSummaryError} />
                </div>
            );
        }

        if (translatedConfig.options) {
            return (
                <FormSelect
                    key={`${field}-select`}
                    name={field}
                    label={translatedConfig.label}
                    options={translatedConfig.options}
                    placeholder={translatedConfig.placeholder}
                    onChange={(e) => setFieldValue(field, e.target.value)}
                />
            );
        }

        return (
            <FormInput
                key={`${field}-input`}
                name={field}
                label={translatedConfig.label}
                placeholder={translatedConfig.placeholder}
                type={translatedConfig.type || 'text'}
            />
        );
    };

    return (
        <div>
            <Header />
            <NavBar />
            <Formik
                initialValues={{
                    ...Object.keys(fieldConfigs).reduce((acc, key) => {
                        acc[key] = "";
                        return acc;
                    }, {}),
                    profile_image: null,
                    data_processing_consent: false
                }}
                validationSchema={registerSchema}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    registerSchema.validate(values, { abortEarly: false })
                        .then(() => {
                            const formData = new FormData();

                            Object.entries(values).forEach(([key, value]) => {
                                if (value !== null && value !== undefined) {
                                    if (key === 'profile_image' && value) {
                                        formData.append(key, value);
                                    }
                                    else {
                                        formData.append(key, value.toString());
                                    }
                                }
                            });

                            onSubmit(formData, setErrors);
                            setSubmitting(false);
                        })
                        .catch(err => {
                            const errors = {};
                            err.inner.forEach(error => {
                                errors[error.path] = error.message;
                            });
                            setErrors(errors);
                            setSubmitting(false);
                        });
                }}
            >
                {({ isSubmitting, setFieldValue, values, errors /*isValid, dirty*/ }) => (
                    <Form className={s.container} encType="multipart/form-data">
                        <div className={s.formContainer}>
                            <div className={s.left}>
                                <div className={s.userInfo}>
                                    <h2 className={s.formHeading}>{t('form.heading')}</h2>
                                    <span>
                                        <Trans i18nKey="form.common.agreeTerms" components={{ 1: <NavLink to="/terms"><u>Terms of Use</u></NavLink> }} />
                                    </span>
                                    <div className={s.uploadContainer}>
                                        <input
                                            type="file"
                                            id="fileInput"
                                            className={s.fileInput}
                                            ref={fileInputRef}
                                            onChange={(e) => handleImageUpload(e, setFieldValue)}
                                            accept="image/*"
                                        />
                                        <label className={s.uploadLabel} onClick={triggerFileInput}>
                                            <img
                                                src={previewImage || profile_image}
                                                alt="Profile"
                                                className={s.profileImage}
                                            />
                                            <div className={s.overlay}>
                                                <img src={camera_icon} alt="Upload Icon" className={s.uploadIcon} />
                                            </div>
                                        </label>
                                    </div>
                                    <p>{t('form.common.uploadHint')}</p>

                                    <div className={s.formRow}>
                                        <div className={s.formColumn}>
                                            {['full_name', 'email'].map(field =>
                                                renderField(field, setFieldValue, values)
                                            )}
                                        </div>
                                    </div>

                                    <div className={s.formRow}>
                                        <div className={s.formColumn}>
                                            {renderField('date_of_birth', setFieldValue, values)}
                                        </div>
                                        <div className={s.formColumn}>
                                            {renderField('gender', setFieldValue, values)}
                                        </div>
                                    </div>

                                    <div className={s.formRow}>
                                        <div className={s.formColumn}>
                                            {renderField('phone_number', setFieldValue, values)}
                                        </div>
                                        <div className={s.formColumn}>
                                            {renderField('country', setFieldValue, values)}
                                            {renderField('city', setFieldValue, values)}
                                        </div>
                                    </div>

                                    <div className={s.formRow}>
                                        <div className={s.formColumn}>
                                            {renderField('password', setFieldValue, values)}
                                        </div>
                                        <div className={s.formColumn}>
                                            {renderField('confirm_password', setFieldValue, values)}
                                        </div>
                                    </div>

                                    {renderField('social_link', setFieldValue, values)}
                                </div>
                                <div className={s.aboutArticles}>
                                    <h2>{t('form.common.articlesHeading')}</h2>
                                    <FormTextarea
                                        name="published_articles"
                                        label={t('form.common.publishedArticles')}
                                        placeholder="TT"
                                    />
                                    <FormTextarea
                                        name="thematic_focus_of_articles"
                                        label={t('form.common.thematicFocus')}
                                        placeholder="https://scholar.google.com/h/article12345 <<..."
                                    />
                                    <FormTextarea
                                        name="past_conferences_or_meetings"
                                        label={t('form.common.pastConferences')}
                                        placeholder="https://conference2023.com/speaker/12345"
                                    />
                                    <FormTextarea
                                        name="membership_in_scientific_team"
                                        label={t('form.common.membership')}
                                        placeholder="«Research Laboratory of Artificial Intelligence»"
                                    />
                                </div>
                            </div>
                            <div className={s.right}>
                                <h2>{t('form.common.universityData')}</h2>
                                {renderField('university', setFieldValue, values)}
                                {renderField('academic_degree', setFieldValue, values)}
                                {renderField('academic_title', setFieldValue, values)}
                                {renderField('profession', setFieldValue, values)}
                                {renderField('position', setFieldValue, values)}
                                {renderField('level_of_education', setFieldValue, values)}

                                <FormCheckbox
                                    name="data_processing_consent"
                                    label={t('form.common.agreeProcessing')}
                                />

                                <button 
                                    type="submit" 
                                    disabled={!isFormComplete(values, errors) || isSubmitting} 
                                    className={s.btn}
                                    title={!isFormComplete(values, errors) ? t('form.errors.completeAllFields') : ''}
                                >
                                    {t('form.common.createAccount')}
                                </button>
                                <span className={s.termOfUse}>
                                    <Trans i18nKey="form.common.agreeTermsButton" components={{ 1: <NavLink to="/terms"><u>Terms of Use</u></NavLink> }} />
                                </span>
                                <div className={s.loginButton}>
                                    <NavLink to='/login'>{t('form.common.login')}</NavLink>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
            <Footer />
        </div>
    );
};

export default RegisterForm;
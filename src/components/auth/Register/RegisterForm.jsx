import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState, useEffect } from 'react';
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
import { UNIVERSITIES } from '../../../constants/universities';
import { fieldConfigs } from '../../../config/fieldConfigs';
import { registerSchema } from '../../../validation';

// Assets
import profile_image from '../../assets/profile-image.png';
import camera_icon from '../../assets/camera-icon.png';

const RegisterForm = ({ onSubmit }) => {
    const [universities] = useState(UNIVERSITIES);
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        const allCountries = Country.getAllCountries().map(c => c.name);
        setCountries(allCountries);
    }, []);

    const handleCountryChange = (countryName, setFieldValue) => {
        setSelectedCountry(countryName);
        setFieldValue('country', countryName);
        setFieldValue('city', '');

        const country = Country.getAllCountries().find(c => c.name === countryName);
        const countryCities = country ? City.getCitiesOfCountry(country.isoCode)?.map(c => c.name) || [] : [];
        setCities(countryCities);
    };

    // In your RegisterForm.jsx, update the renderField function and the map operation:

    const renderField = (field, setFieldValue, values) => {
        const config = fieldConfigs[field];

        if (field === 'country') {
            return (
                <FormSelect
                    key={`country-${values.country}`} // Add key prop
                    name={field}
                    label={config.label}
                    options={countries}
                    onChange={(e) => handleCountryChange(e.target.value, setFieldValue)}
                />
            );
        }

        if (field === 'city') {
            return (
                <FormSelect
                    key={`city-${values.city}`} // Add key prop
                    name={field}
                    label={config.label}
                    options={cities}
                    onChange={(e) => setFieldValue(field, e.target.value)}
                    disabled={!selectedCountry || cities.length === 0}
                />
            );
        }

        if (field === 'university') {
            return (
                <div key={`university-${values.university}`}> {/* Add key prop */}
                    <label htmlFor="university" className={s.label}>
                        {config.label}
                    </label>
                    <UniversityAutocomplete
                        value={values.university}
                        onChange={(value) => setFieldValue('university', value)}
                        universities={universities}
                    />
                    <ErrorMessage name="university" component="div" className={s.formSummaryError} />
                </div>
            );
        }

        if (config.options) {
            return (
                <FormSelect
                    key={`${field}-select`} // Add key prop
                    name={field}
                    label={config.label}
                    options={config.options}
                    onChange={(e) => setFieldValue(field, e.target.value)}
                />
            );
        }

        return (
            <FormInput
                key={`${field}-input`} // Add key prop
                name={field}
                label={config.label}
                placeholder={config.placeholder}
                type={config.type || 'text'}
            />
        );
    };



    return (
        <div>
            <Header />
            <NavBar />
            <Formik
                initialValues={Object.keys(fieldConfigs).reduce((acc, key) => {
                    acc[key] = "";
                    return acc;
                }, { role: "", checkbox: false })}
                validationSchema={registerSchema}
                validateOnBlur={false}  // Disable validation on blur
                validateOnChange={false} // Disable validation on change
                onSubmit={(values, { setSubmitting, setErrors }) => {
                    // Manually trigger validation before submit
                    registerSchema.validate(values, { abortEarly: false })
                        .then(() => {
                            onSubmit(values, setErrors);
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
                {({ isSubmitting, setFieldValue, values }) => (
                    <Form className={s.container}>
                        <div className={s.formContainer}>
                            <div className={s.left}>
                                <div className={s.userInfo}>
                                    <h2 className={s.formHeading}>Ստեղծեք հաշիվ</h2>
                                    <span>Ստեղծելով հաշիվ դուք համաձայնվում եք <NavLink to="/terms"><u>Օգտագործման պայմաններին</u></NavLink></span>
                                    <div className={s.uploadContainer}>
                                        <input type="file" id="fileInput" className={s.fileInput} />
                                        <label htmlFor="fileInput" className={s.uploadLabel}>
                                            <img src={profile_image} alt="Profile" className={s.profileImage} />
                                            <div className={s.overlay}>
                                                <img src={camera_icon} alt="Upload Icon" className={s.uploadIcon} />
                                            </div>
                                        </label>
                                    </div>
                                    <p>* Վերբեռնված պատկերը պետք է ունենա 500px լայնություն և 500px երկարություն</p>

                                    {['full_name', 'email', 'password', 'confirm_password', 'phone_number', 'gender', 'country', 'city', 'date_of_birth'].map(field =>
                                        renderField(field, setFieldValue, values)
                                    )}
                                </div>
                                <div className={s.aboutArticles}>
                                    <h2>Հոդվածների վերաբերյալ տվյալներ</h2>
                                    <FormTextarea name="published_articles" label="Հրապարակված հոդվածներ" placeholder="ՏՏ" />
                                    <FormTextarea name="thematic_focus_of_articles" label="Հոդվածների թեմատիկ ուղղվածություն" placeholder="https://scholar.google.com/h/article12345 <<Տեխնոլոգիաների ազդեցությունը կրթա..." />
                                    <FormTextarea name="past_conferences_or_meetings" label="Անցած գիտաժողովներ կամ համաժողովներ" placeholder="https://scholar.google.com/h/article12345 <<Տեխնոլոգիաների ազդեցությունը կրթա..." />
                                    <FormTextarea name="membership_of_the_scientific_team" label="Գիտական թիմի անդամություն" placeholder="«Արհեստական բանականության հետազոտական լաբորատորիա» «Կենսաբանության և գենետիկայի հետազոտական խումբ» https://conference2023.com/speaker/12345" />
                                </div>
                            </div>
                            <div className={s.right}>
                                <h2>Համալսարանային տվյալներ</h2>
                                {renderField('university', setFieldValue, values)}
                                {renderField('academic_degree', setFieldValue)}
                                {renderField('academic_title', setFieldValue)}
                                {renderField('profession', setFieldValue)}
                                {renderField('position', setFieldValue)}
                                {renderField('level_of_education', setFieldValue)}
                                <FormCheckbox
                                    name="checkbox"
                                    label="Համաձայն եմ, որ իմ տվյալները մշակվեն գործընթացների համար"
                                />

                                <button type="submit" disabled={isSubmitting} className={s.btn}>
                                    Ստեղծել հաշիվ
                                </button>
                                <span className={s.termOfUse}>Ես համաձայն եմ կայքի <NavLink to="/terms"><u>Օգտագործման Պայմաններին</u></NavLink></span>
                                <div className={s.loginButton}>
                                    <NavLink to='/login'>Մուտք</NavLink>
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
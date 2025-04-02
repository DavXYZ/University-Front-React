import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { register } from "../../redux/reducers/authUserReducer";
import { Navigate, NavLink } from "react-router-dom";
import s from "./Register.module.css";
import profile_image from '../assets/profile-image.png';
import camera_icon from '../assets/camera-icon.png';
import { Country, City } from 'country-state-city';
import Header from '../common/Header'
import NavBar from '../common/NavBar'
import Footer from '../common/Footer'
import UniversityAutocomplete from './UniversityAutocomplete/UniversityAutocomplete'
// Reusable Form Components
const FormInput = ({ name, label, placeholder, type = "text", className = s.input }) => (
  <div>
    {label && <label htmlFor={name} className={s.label}>{label}</label>}
    <Field
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
    />
    <ErrorMessage name={name} component="div" className={s.formSummaryError} />
  </div>
);

const FormTextarea = ({ name, label, placeholder }) => (
  <FormInput name={name} label={label} placeholder={placeholder} type="textarea" className={s.textarea} />
);

const FormSelect = ({
  name,
  options,
  label,
  onChange,
  disabled = false,
  placeholder = `Select your ${name.replace("_", " ")}`
}) => (
  <div>
    {label && <label htmlFor={name} className={s.label}>{label}</label>}
    <Field
      as="select"
      id={name}
      name={name}
      className={s.input}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </Field>
    <ErrorMessage name={name} component="div" className={s.formSummaryError} />
  </div>
);

const FormCheckbox = ({ name, label }) => (
  <label className={s.checkboxLabel}>
    <Field type="checkbox" name={name} className={s.checkbox} />
    {label}
  </label>
);

// Main Component
const RegisterForm = ({ onSubmit }) => {
  const [universities] = useState([
    "Հայաստանի ազգային պոլիտեխնիկական համալսարան",
    "Երևանի պետական համալսարան",
    "Ամերիկյան համալսարան հայաստանում",
    "Ռուս-Հայական (Սլավոնական) համալսարան",
    "Մխիթար Հերացու անվան երևանի պետական բժշկական համալսարան",
    "Հայաստանի պետական տնտեսագիտական համալսարան",
    "Մեսրոպ Մաշտոցի անվան համալսարան",
    "Վալերի Բրյուսովի անվան պետական համալսարան",
    "Հայաստանի պետական ագրարային համալսարան",
    "Հայաստանում ֆրանսիական համալսարան",
    "Հայաստանի Եվրոպական համալսարան"
  ]);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Field configurations
  const fieldConfigs = {
    full_name: { label: "Անուն Ազգանուն", placeholder: "Մուտքագրեք ձեր անունը" },
    email: { label: "Էլ․ փոստ", placeholder: "info@polytechnic.am" },
    password: { label: "Գաղտնաբառ", placeholder: "xxxxxxxxxx", type: "password" },
    confirm_password: { label: "Հաստատեք գաղտնաբառը", placeholder: "xxxxxxxxxx", type: "password" },
    phone_number: { label: "Բջջային համար", placeholder: "+374--------" },
    gender: {
      label: "Սեռ",
      placeholder: "Սեռը",
      options: [
        "Արական",
        "Իգական"
      ]
    },
    country: { label: "Երկիր", placeholder: "Երկիր" },
    city: { label: "Քաղաք", placeholder: "/ Քաղաք" },
    date_of_birth: { label: "Ծննդյան ամսաթիվ", placeholder: "օր ամիս տարի", type: "date" },
    university: { label: "Համալսարան", placeholder: "Համալսարանի անվանումը" },
    academic_degree: { label: "Ակադեմիական աստիճան", options: ["Doctor", "PhD", "Master", "Bachelor"] },
    academic_title: { label: "Գիտական կոչում", options: ["Professor", "Associate Professor"] },
    profession: { label: "Մասնագիտություն", options: ["Տեղեկատվական անվտանգություն", "Տեղեկատվական տեխնոլոգիա"] },
    position: { label: "Պաշտոն", options: ["Պրոֆեսոր/դասախոս", "Դոցենտ/դասախոս"] },
    level_of_education: { label: "Ուսումնառության մակարդակ", options: ["Բակալավր", "Մագիստրատուրա"] }
  };

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

  const renderField = (field, setFieldValue,values) => {
    const config = fieldConfigs[field];

    if (field === 'country') {
      return (
        <FormSelect
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
        <div>
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
          name={field}
          label={config.label}
          options={config.options}
          onChange={(e) => setFieldValue(field, e.target.value)}
        />
      );
    }

    return (
      <FormInput
        name={field}
        label={config.label}
        placeholder={config.placeholder}
        type={config.type || 'text'}
      />
    );
  };

  const validationSchema = Yup.object({
    full_name: Yup.string()
      .required("Required")
      .min(2, "Must be between 2 and 50 characters")
      .max(50, "Must be between 2 and 50 characters"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters")
      .max(50, "Must be at most 50 characters")
      .required("Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
    phone_number: Yup.string()
      .matches(/^\+374[0-9]{8}$/, "Must start with +374 and have 8 digits")
      .optional(),
    gender: Yup.string()
      .oneOf(["Արական", "Իգական"], "Invalid gender")
      .required("Required"),
    country: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    date_of_birth: Yup.date()
      .required("Required")
      .nullable()
      .test("age", "Must be at least 18", (value) => {
        if (!value) return false;
        const today = new Date();
        const birthDate = new Date(value);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;
        return age >= 18;
      }),
    // Add validation for other fields as needed
  });

  return (
    <div>
      <Header />
      <NavBar />
      <Formik
        initialValues={Object.keys(fieldConfigs).reduce((acc, key) => {
          acc[key] = "";
          return acc;
        }, { role: "", checkbox: false })}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          onSubmit(values, setErrors);
          setSubmitting(false);
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
                    renderField(field, setFieldValue,values)
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



const Register = ({ isAuth, register, role }) => {
  const onSubmit = (formData, setErrors) => {
    register(formData, setErrors);
  };

  // Redirect logic
  if (isAuth) {
    return <Navigate to="/" />;
  }

  if (!role) {
    return <Navigate to="/role-register" />;
  }

  return <RegisterForm onSubmit={onSubmit} />;
};

const mapStateToProps = (store) => ({
  isAuth: store.auth.isAuth,
  role: store.auth.role
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
import * as Yup from 'yup';

const authorInfoSchema = Yup.object({
    educationLevel: Yup.string().required("Կրթական աստիճանը պարտադիր է"),
    biography: Yup.string().required("Կենսագրությունը պարտադիր է"),
})

export default authorInfoSchema;

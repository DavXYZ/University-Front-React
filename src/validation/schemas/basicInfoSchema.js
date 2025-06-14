import * as Yup from 'yup'

const basicInfoSchema = Yup.object({
  journal: Yup.string().required("Խնդրում ենք ընտրել հանդեսը"),
  journalSeries: Yup.string().required("Խնդրում ենք ընտրել հանդեսի սերիան"),
  articleType: Yup.string().required("Խնդրում ենք ընտրել հոդվածի տեսակը"),
  title: Yup.string().required("Խնդրում ենք ներկայացնել հոդվածի վերնագիրը"),
  date: Yup.string().required("Խնդրում ենք ընտրել ամսաթիվը"),
  keywords: Yup.array().min(1, "Խնդրում ենք ավելացնել առնվազն մեկ հիմնաբառ"),
})

export default basicInfoSchema;
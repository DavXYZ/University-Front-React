
export const FIELD_OPTIONS = [
  {
    id: "applied-sciences",
    label: "Կիրառական գիտություններ",
    children: [
      {
        id: "agricultural-research",
        label: "Գյուղատնտեսական գիտության հետազոտական ցանց",
        children: [],
      },
      {
        id: "computer-science-research",
        label: "Համակարգչային գիտության հետազոտական ցանց",
        children: [
          { id: "applied-computing", label: "Կիրառական հաշվարկների էլեկտրոնային հանդես" },
          { id: "artificial-intelligence", label: "Արհեստական բանականության էլեկտրոնային հանդես" },
          { id: "computation-theory", label: "Հաշվարկման տեսության էլեկտրոնային հանդես" },
          { id: "cs-education", label: "Համակարգչային գիտության կրթության էլեկտրոնային հանդես" },
          { id: "cybersecurity", label: "Կիբերանվտանգության, գաղտնիության և ցանցերի էլեկտրոնային հանդես" },
          { id: "high-performance", label: "Բարձր արդյունավետության հաշվարկների էլեկտրոնային հանդես" },
          { id: "human-computer", label: "Մարդ-համակարգիչ փոխազդեցության էլեկտրոնային հանդես" },
          { id: "information-systems", label: "Տեղեկատվական համակարգերի էլեկտրոնային հանդես" },
          { id: "robotics", label: "Ռոբոտատեխնիկայի էլեկտրոնային հանդես" },
          { id: "software-engineering", label: "Ծրագրային ապահովման ինժեներիայի էլեկտրոնային հանդես" },
        ],
      },
      {
        id: "energy-research",
        label: "Էներգետիկայի հետազոտական ցանց",
        children: [],
      },
      {
        id: "engineering-research",
        label: "Ինժեներական հետազոտական ցանց",
        children: [],
      },
      {
        id: "food-science",
        label: "Սննդագիտության հետազոտական ցանց",
        children: [],
      },
      {
        id: "forensic-science",
        label: "Դատաբժշկական գիտության հետազոտական ցանց",
        children: [],
      },
      {
        id: "mathematics-research",
        label: "Մաթեմատիկայի հետազոտական ցանց",
        children: [],
      },
      {
        id: "transport-research",
        label: "Տրանսպորտի հետազոտական ցանց",
        children: [],
      },
    ],
  },
  {
    id: "health-sciences",
    label: "Առողջապահական գիտություններ",
    children: [],
  },
  {
    id: "humanities",
    label: "Հումանիտար գիտություններ",
    children: [],
  },
  {
    id: "biological-sciences",
    label: "Կենսաբանական գիտություններ",
    children: [],
  },
  {
    id: "natural-sciences",
    label: "Բնագիտական գիտություններ",
    children: [],
  },
  {
    id: "social-sciences",
    label: "Հասարակագիտական գիտություններ",
    children: [],
  },
]

export const JOURNAL_OPTIONS = [
  { value: "journal1", label: "Բանբեր" },
  { value: "journal2", label: "Տեղեկագիր" },
  { value: "journal3", label: "Լրաբեր" },
]

export const SERIES_OPTIONS = [
  { value: "series1", label: "Ճարտարագիտություն" },
  { value: "series2", label: "Տնտեսագիտություն" },
  { value: "series3", label: "Տեղեկատվական տեխնոլոգիաներ" },
]

export const ARTICLE_TYPE_OPTIONS = [
  { value: "type1", label: "Գիտական հոդված" },
  { value: "type2", label: "Ակնարկային հոդված" },
  { value: "type3", label: "Կարճ հաղորդում" },
]

export const LANGUAGE_OPTIONS = [
  { value: "Անգլերեն", label: "Անգլերեն" },
  { value: "Հայերեն", label: "Հայերեն" },
  { value: "Ռուսերեն", label: "Ռուսերեն" },
]
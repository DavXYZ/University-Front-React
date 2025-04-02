export const fieldConfigs = {
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
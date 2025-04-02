import "./title.css";
import error from "../assets/error.png";
import calendar from "../assets/calendar_today.png";

const StepComponent = () => {
    return (
        <div className="step-menu">
            <div className="step-description">
                <div className="step-descriptionText">
                    Այս ձևաթուղթը նախատեսված է ձեր հոդվածի նախնական վերնագիրը,
                    բանալի բառերը և կարճ նկարագրությունը լրացնելու համար։
                    Ներկայացված տեղեկատվությունը ստուգվելու և հաստատվելու դեպքում,
                    դուք կկարողանաք շարունակել ձեր հոդվածի ամբողջական տարբերակի ներկայացումը։
                </div>
            </div>

            <div className="articleData">
                <h2 className="articleData-heading">Քայլ 1: Հոդվածի հիմնական տվյալներ</h2>
                <p className="articleData-description">
                    Խնդրում ենք ներբեռնել ձեր հոդվածի PDF կամ Word ֆայլը: Մենք կհավաքագրենք վերնագիրը, ամփոփագիրը և հիմնաբառերը՝ վերանայման համար:
                </p>
            </div>

            <div className="articleGuide">
                <div className="articleGuide-header">
                    <h2 className="articleGuide-stepTitle">
                        Քայլ 1: Հոդվածի հիմնական տվյալներ
                    </h2>
                    <p className="articleGuide-instructions">
                        Խնդրում ենք ներբեռնել ձեր հոդվածի PDF կամ Word ֆայլը: Մենք կհավաքագրենք վերնագիրը, ամփոփագիրը և հիմնաբառերը՝ վերանայման համար:
                    </p>
                </div>

                <div className="articleGuide-upload">
                    <div className="articleGuide-guidelines">
                        {`1. Վերնագիր (Title)
    Պետք է լինի հստակ և ինֆորմատիվ:
    Խուսափեք կրճատումներից և վերացական ձևակերպումներից: 
    Մեծատառերի և փոքրատառերի ճիշտ օգտագործում (օր.՝ «Գլոբալ տաքացման 
    ազդեցությունը գյուղատնտեսության վրա»):

2. Բանալի բառեր (Keywords) 
    Նշեք 5-7 բանալի բառ, որոնք ճշգրիտ նկարագրում են հոդվածի հիմնական թեման: 
    Բառերը առանձնացրեք ստորակետով (օր.՝ "էկոլոգիա, տաքացում, 
    գյուղատնտեսություն, կլիմա, հետազոտություն"):

3. Կարճ նկարագրություն (Abstract) 
    Նկարագրությունը պետք է լինի 150-200 բառ:
    Ներառեք հոդվածի նպատակները, հիմնական մեթոդները և ակնկալվող 
    արդյունքները:

4. Կատեգորիա (Category) 
    Նշեք հոդվածի համապատասխան ակադեմիական ոլորտը (օր.՝ 
   "Տնտեսագիտություն, Բնագիտություն, Կրթություն"):

5. Հեղինակի տվյալներ (Author Details) 
    Անուն, Ազգանուն 
    Գիտական կոչում (PhD, MSc, BA, և այլն): 
    Հաստատության անվանում (օր.՝ "Երևանի պետական համալսարան") 
    Էլ․ հասցե (հավանական հետագա կապի համար):

6. Հավելյալ նշումներ (Additional Notes) 
    Եթե անհրաժեշտ է, կցեք տվյալներ, որոնք կարող են օգնել վերնագրի և թեմայի
    հաստատման գործընթացում:
    Հիշեցում օգտատերերին
    Բոլոր դաշտերը պարտադիր են լրացման համար:
    Ներբեռնվող ֆայլը պետք է լինի PDF կամ Word ֆորմատով:
    Ֆայլի անվանումը պետք է լինի միայն լատինատառ՝ օրինակ՝ 
    "Petrosyan_Article_Title.pdf":

Ձևաթղթի հաստատումից հետո, օգտատիրոջը կուղարկվի ծանուցում, որպեսզի նա 
կարողանա ներբեռնել հոդվածի ամբողջական տարբերակը:`}
                    </div>

                    <span className="articleGuide-uploadPrompt articleGuide--hidden">
                        Ներբեռնել ֆայլերը այստեղ`ընտրել
                    </span>

                    <span className="articleGuide-fileRequirements articleGuide--hidden">
                        Ներբեռնել PDF կամ word առավելագույնը 100 ՄԲ
                    </span>

                    <div className="articleGuide-helper">
                        Օգնող Ուղեցույց
                    </div>

                    <div className="articleGuide-error">
                        <div className="articleGuide-errorIcon"></div>
                        <img src={error} alt="error Logo" />
                    </div>
                </div>
            </div>

            <div className="stepIsAuthor">
                <div className="stepIsAuthor-question">
                    Դուք հեղինա՞կն եք, թե՞ ներկայացնում եք մեկ ուրիշի անունից:
                </div>
                <div className="stepIsAuthor-checkboxGroup">
                    <div className="stepIsAuthor-checkbox">
                        <div className="stepIsAuthor-checkboxBounding">
                            <div className="stepIsAuthor-checkIcon active"></div>
                        </div>
                        <span className="stepIsAuthor-checkboxLabel">Ես հեղինակն եմ</span>
                    </div>
                    <div className="stepIsAuthor-checkbox">
                        <div className="stepIsAuthor-checkboxBounding">
                            <div className="stepIsAuthor-checkIcon"></div>
                        </div>
                        <span className="stepIsAuthor-checkboxLabel">
                            Ես ներկայացնում եմ մեկ ուրիշի անունից
                        </span>
                    </div>
                </div>
            </div>

            <div className="stepContent">
                <div className="stepContent-title">
                    Բովանդակության ձևաչափ
                </div>
                <div className="stepContent-description">
                    Ինչպիսի՞ն է այն աշխատանքի ձևաչափը դա հոդված է, գրքի գլուխ, թե այլ բան: Խնդրում ենք նշել ստորև։
                </div>
                <div className="stepContent-selectContainer">
                    <div className="stepContent-select">
                        <span className="stepContent-selectText">Ընտրել</span>
                        <div className="stepContent-chevron"></div>
                    </div>
                </div>
            </div>

            <div className="stepTitleWrite">
                <div className="stepTitleWrite-title">
                    Հոդվածի վերնագիր
                </div>
                <div className="stepTitleWrite-instruction">
                    Վերնագիր: Խնդրում ենք ներկայացնել հոդվածի վերնագիրը:
                </div>
                <div className="stepTitleWrite-inputContainer">
                    <div className="stepTitleWrite-inputHeader">
                        <div className="stepTitleWrite-icon"></div>
                    </div>
                </div>
            </div>

            <div className="stepLanguageAndData">
                {/* Language Component */}
                <div className="stepLanguage">
                    <div className="stepLanguage-label">Լեզու՝ PDF-ի լեզուն: Օրինակ՝ English</div>
                    <div className="stepLanguage-dropdown">
                        <div className="stepLanguage-dropdownContent">
                            <div className="stepLanguage-dropdownText">Անգլերեն</div>
                            <div className="stepLanguage-chevron"></div>
                        </div>
                    </div>
                </div>

                {/* Date Component */}
                <div className="stepDate">
                    <div className="stepDate-label">Ամսաթիվ՝ հոդվածի գրության օրը (օր.՝ mm/dd/yyyy):</div>
                    <div className="stepDate-input">
                        <div className="stepDate-inputText">mm / dd / yyyy</div>
                        <img src= {calendar} alt="Calendar"></img>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default StepComponent;
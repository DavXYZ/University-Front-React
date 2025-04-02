// NavBar.js
import s from './common.module.css'; 
import npua from '../assets/NPUA.png';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

function NavBar() {
    const { t, i18n } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setIsDropdownOpen(false);
    };

    const getCurrentLanguageLabel = () => {
        switch(i18n.language) {
            case "en":
                return "English";
            case "ru":
                return "Русский";
            case "hy":
            default:
                return "Հայերեն";
        }
    };

    return (
        <div className={s.navbar}>
            <div className={s.container}>
                <img src={npua} alt="NPUA Logo" />
                <span>NPUA</span>
            </div>
            <div className={s.navLinks}>
                <a href="#">{t('about_us')}</a>
                <a href="#">{t('our_publications')}</a>
                <a href="#">{t('announcements')}</a>
                <a href="#">{t('contact_us')}</a>
                <div className={s.languageSelector}>
                    <div className={s.languageContainer}>
                        <button
                            className={s.languageButton}
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            {getCurrentLanguageLabel()}
                        </button>

                        {isDropdownOpen && (
                            <div className={s.languageDropdown}>
                                <div className={s.languageOption} onClick={() => changeLanguage("en")}>
                                    <span>English</span>
                                </div>
                                <div className={s.languageOption} onClick={() => changeLanguage("ru")}>
                                    <span>Русский</span>
                                </div>
                                <div className={s.languageOption} onClick={() => changeLanguage("hy")}>
                                    <span>Հայերեն</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <button className={s.writeNowButton}>{t('write_now')}</button>
            </div>
        </div>
    );
}

export default NavBar;
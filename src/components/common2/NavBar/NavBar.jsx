import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import s from './NavBar.module.css';

import npuaLogo from '../../assets/npualogo.png';

// ICONS
import { PiHouseLineLight, PiBellLight, PiChartLineLight, PiPlusLight } from "react-icons/pi";
import { LuUsers, LuMailOpen } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const NavBar = () => {
  const { t } = useTranslation();
  const [isSpecialistOpen, setIsSpecialistOpen] = useState(false);

  const toggleSpecialists = () => {
    setIsSpecialistOpen(prev => !prev);
  };

  return (
    <div className={s.navBar}>
      <div className={s.logoAndUniName}>
        <img src={npuaLogo} alt="logo" />
        <h6>{t("npua")}</h6>
      </div>

      <div className={s.menuContent}>
        <button className={s.crtGroupBtn}>
          <PiPlusLight size={18} /> {t('create_new_group')}
        </button>

        <div className={s.navItem}>
          <PiHouseLineLight />
          <NavLink to="/home">{t('home')}</NavLink>
        </div>

        <div className={s.section}>
          <h4>{t('analysis')}</h4>
          <div className={s.navItem}><PiChartLineLight /> <NavLink to="#">{t("statistics")}</NavLink></div>
          <div className={s.navItem}><PiBellLight /> <NavLink to="#">{t("notices")}</NavLink></div>
        </div>

        <div className={s.section}>
          <h4>{t('support')}</h4>
          <div className={s.navItem}><LuMailOpen /> <NavLink to="#">{t("notification")}</NavLink></div>
          <div className={s.navItem}><LuUsers /> <NavLink to="#">{t("applicants")}</NavLink></div>
          <div className={s.navItem} onClick={toggleSpecialists}>
            <HiOutlineUserGroup />
            <span>{t("specialist")}</span>
            {isSpecialistOpen ? <GoChevronUp /> : <GoChevronDown />}
          </div>
          {isSpecialistOpen && (
            <div className={s.dropdown}>
              <NavLink to="#">{t("reviewer")}</NavLink>
              <NavLink to="#">{t("editor")}</NavLink>
            </div>
          )}
        </div>

        <div className={s.section}>
          <h4>{t('articles')}</h4>
          <div className={s.navItem}><IoSettingsOutline /> <NavLink to="#">{t("article_management")}</NavLink></div>
          <div className={s.navItem}><IoSettingsOutline /> <NavLink to="#">{t("article_files")}</NavLink></div>
        </div>

        <div className={s.section}>
          <div className={s.navItem}><IoSettingsOutline /> <NavLink to="#">{t('settings')}</NavLink></div>
          <div className={s.navItem}><MdOutlineLogout /> <button>{t('logout')}</button></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import DropDownButton from "../DropDownButton/DropDownButton";
import s from './HeaderAuthor.module.css';
import { IoSettingsOutline } from "react-icons/io5";

const randomUsers = [
  "https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png",
  "https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png",
  "https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png"
];

const HeaderAuthor = () => {
  const { t } = useTranslation();

  return (
    <div className={s.headerAuthor}>
      <div className={s.navItems}>
        <NavLink to="/" className={s.navLink}>{t('home')}</NavLink>
        <DropDownButton category="faculties" />
        <DropDownButton category="articles" />
        <DropDownButton category="editors" />
      </div>
      <div className={s.rightSection}>
        <button className={s.plusButton}>+</button>
        <div className={s.randomUsers}>
          {randomUsers.map((userImage, index) => (
            <img key={index} src={userImage} alt={`User ${index + 1}`} />
          ))}
          <span>{randomUsers.length}</span>
        </div>
        <NavLink to="/profile" className={s.profileLink}>
          <img src="https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png" alt="profile_image" />
        </NavLink>
        <NavLink to="#" className={s.settingsLink}><IoSettingsOutline /></NavLink>
      </div>
    </div>
  );
};

export default HeaderAuthor;
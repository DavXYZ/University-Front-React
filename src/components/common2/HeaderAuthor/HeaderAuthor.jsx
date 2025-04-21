import { useTranslation } from "react-i18next"
import { NavLink } from "react-router"
import DropDownButton from "../DropDownButton/DropDownButton";
import s from './HeaderAuthor.module.css'

const randomUsers=[
    "https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png",
    "https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png",
    "https://www.shareicon.net/data/512x512/2016/05/24/770139_man_512x512.png"
]

const HeaderAuthor = () => {
    const {t} = useTranslation();

    return (
        <div className={s.headerAuthor}>
            <NavLink>{t('home')}</NavLink>
            <DropDownButton category="faculties"/>
            <DropDownButton category="articles"/>
            <DropDownButton category="editors"/>
            <button>+</button>
            <div className={s.randomUsers}>
                {randomUsers.map((userImage) => <img src={userImage} />)}
                <span>{randomUsers.length}</span>
            </div>
            <NavLink><img src="" alt="profile_image" /></NavLink>
        </div>
    )
}

export default HeaderAuthor;
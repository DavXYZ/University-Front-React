import { useState } from "react";
import { useTranslation } from "react-i18next";
import s from './DropDownButton.module.css';

const DropDownButton = ({ category }) => {
  const { t } = useTranslation();
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  return (
    <div className={s.dropdownWrapper}>
      <button
        className={s.toggleButton}
        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
        aria-expanded={isOpenDropDown}
      >
        {t(category)}
      </button>
      {isOpenDropDown && (
        <div className={s.dropdownContent}>
          <a href="#" className={s.dropdownLink}>{t('option1')}</a>
          <a href="#" className={s.dropdownLink}>{t('option2')}</a>
          <a href="#" className={s.dropdownLink}>{t('option3')}</a>
        </div>

      )}
    </div>
  );
};

export default DropDownButton;
import { useState } from "react";
import { useTranslation } from "react-i18next";
import s from './DropDownButton.module.css';

const DropDownButton = (props) => {
  const { t } = useTranslation();
  const [isOpenDropDown, setDropDown] = useState(false);

  return (
    <div className={s.dropdownWrapper}>
      <button className={s.toggleButton} onClick={() => setDropDown(!isOpenDropDown)}>
        {t(`${props.category}`)} {isOpenDropDown ? '▼' : '▲'}
      </button>
      {isOpenDropDown && (
        <div className={s.dropdownContent}>
          {/* some code */}
        </div>
      )}
    </div>
  );
};

export default DropDownButton;

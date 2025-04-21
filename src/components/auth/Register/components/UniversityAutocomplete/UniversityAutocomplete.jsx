import { useState, useEffect, useRef } from 'react';
import styles from './UniversityAutocomplete.module.css';
import { useTranslation } from 'react-i18next';
import { UNIVERSITY_KEYS } from '../../../../../constants/universityKeys';

const UniversityAutocomplete = ({ value, onChange }) => {
  const { t } = useTranslation('universities');
  const [inputValue, setInputValue] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null);

  const translatedUniversities = UNIVERSITY_KEYS.map((key) => ({
    key,
    name: t(key),
  }));

  useEffect(() => {
    if (inputValue.length > 1) {
      const filtered = translatedUniversities.filter(({ name }) =>
        name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, t]);

  const handleSelect = (univ) => {
    setInputValue(univ.name);
    onChange(univ.name);
    setShowSuggestions(false);
  };

  return (
    <div ref={wrapperRef} className={styles.autocompleteWrapper}>
      <input
        type="text"
        placeholder={t('search_placeholder', { ns: 'common' }) || 'Search university'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onFocus={() => inputValue.length > 1 && setShowSuggestions(true)}
        className={styles.inputField}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((univ, index) => (
            <li
              key={univ.key}
              onClick={() => handleSelect(univ)}
              className={`${styles.suggestionItem} ${index === activeIndex ? styles.active : ''}`}
            >
              {univ.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UniversityAutocomplete;

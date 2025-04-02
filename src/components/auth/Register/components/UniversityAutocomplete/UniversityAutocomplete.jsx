import { useState, useEffect } from 'react';
import styles from './UniversityAutocomplete.module.css';

 const UniversityAutocomplete = ({ value, onChange, universities }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    if (inputValue.length > 1) {
      const filtered = universities.filter(univ =>
        univ.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Show top 5 matches
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [inputValue, universities]);

  const handleSelect = (univ) => {
    setInputValue(univ);
    onChange(univ);
    setShowSuggestions(false);
  };

  return (
    <div className={styles.autocompleteWrapper}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          onChange(e.target.value);
        }}
        className={styles.input}
        placeholder="Մուտքագրեք ձեր համալսարանը"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((univ, index) => (
            <li 
              key={index} 
              onClick={() => handleSelect(univ)}
              className={styles.suggestionItem}
            >
              {univ}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UniversityAutocomplete;
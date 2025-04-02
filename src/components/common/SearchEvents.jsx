import React, { useState } from 'react';
import styles from './common.module.css'; // Import your CSS module
import search from "../assets/search.svg";

function SearchEvents() {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    return (
        <div className={styles.frame}>
            <div className={styles.eventCalendarTitle}>
                Իրադարձությունների օրացույց
            </div>
            <div className={styles.searchBox}>
                <img src={search} alt="Logo" />
                <input
                    type="text"
                    className={styles.searchInput}
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Որոնեք իրադարձություններ, հոդվածներ, կոնֆերանսներ"
                />
            </div>
        </div>
    );
}

export default SearchEvents;

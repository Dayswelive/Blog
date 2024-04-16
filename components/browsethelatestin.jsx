//importing state
import React, { useState } from "react";

import styles from "../stylesheets/browse.module.css";
function browsethelatestin() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  //Function to handle the category border line

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <div className={styles.browsethelatestin_container}>
        <div className={styles.browse}>
          <span className={styles.heading}>Browse the latest in...</span>
          <div className={styles.options}>
            <span
              className={`${styles.category_name} ${
                selectedCategory === "Style" ? styles.selected : ""
              }`}
              onClick={() => handleCategoryClick("Style")}
            >
              STYLE
            </span>
            <span
              className={`${styles.category_name} ${
                selectedCategory === "Living" ? styles.selected : ""
              }`}
              onClick={() => handleCategoryClick("Living")}
            >
              LIVING
            </span>
            <span
              className={`${styles.category_name} ${
                selectedCategory === "Travel" ? styles.selected : ""
              }`}
              onClick={() => handleCategoryClick("Travel")}
            >
              TRAVEL
            </span>
            <span
              className={`${styles.category_name} ${
                selectedCategory === "Beauty" ? styles.selected : ""
              }`}
              onClick={() => handleCategoryClick("Beauty")}
            >
              BEAUTY
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default browsethelatestin;

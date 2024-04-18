import React from "react";
//importing styles
import styles from "../stylesheets/getintouch.module.css";
import image from "../assets/one.webp";

function getintouch() {
  return (
    <div className={styles.maincontainer}>
      <div className={styles.wrapper}>
        <div className={styles.rightcontainer}>
          <div className={styles.textform}>
            <span className={styles.text}>Stay in the know...</span>
            <span className={styles.secondtext}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              illum nesciunt natus!
            </span>
          </div>
          <div className={styles.form}>
            {/* <input
              type="text"
              placeholder="first name.."
              className={styles.name}
            /> */}
            <input
              type="email"
              placeholder="email address.."
              className={styles.email}
            />
            <button className={styles.button}>
              <span className={styles.buttontext}>Subscribe</span>
            </button>
          </div>
        </div>
        <div className={styles.leftcontainer}>
          <img className={styles.imagestyle} src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default getintouch;

import React from "react";
import styles from "../stylesheets/trending.module.css";

//importing images
import imagetwo from "../assets/2.webp";
import imagethree from "../assets/3.webp";
import imagefour from "../assets/4.webp";
function trending() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.text}>CURRENTLY TRENDING</span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.firstimage}>
            <img className={styles.images} src={imagetwo} alt="" />
            <span className={styles.imagetext}>
              Hi Kashish, this is your website
            </span>
          </div>
          <div className={styles.firstimage}>
            <img className={styles.images} src={imagethree} alt="" />
            <span className={styles.imagetext}>
              Hello, I am Suryansh Building this website
            </span>
          </div>
          <div className={styles.firstimage}>
            <img className={styles.images} src={imagefour} alt="" />
            <span className={styles.imagetext}>
              The language I am using is React JS
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default trending;

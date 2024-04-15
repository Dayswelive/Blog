import React from "react";
import styles from "../stylesheets/navbar.module.css";

//importing icons
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

function navbar() {
  return (
    <>
      <div className={styles.navbar_container}>
        <span className={styles.logo}>Kashish Networks</span>
        <span className={styles.line}></span>
        <div className={styles.categories}>
          <span className={styles.category_name}>HOME</span>
          <span className={styles.category_name}>STYLE</span>
          <span className={styles.category_name}>TRAVEL</span>
          <span className={styles.category_name}>TEMPLATES</span>
          <span className={styles.category_name}>FEATURES</span>
          <span className={styles.category_name}>SHOP</span>
        </div>
        <div className={styles.social_media}>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaPinterest />
          </span>
          <span>
            <CiFacebook />
          </span>
          <span>
            <MdOutlineMail />
          </span>
        </div>
      </div>
    </>
  );
}

export default navbar;

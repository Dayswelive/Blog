import React from "react";
import styles from "../stylesheets/herosection.module.css";

//importing images
import image from "../assets/coverphoto.webp";

function heroSection() {
  return (
    <>
      <div className={styles.herosection_container}>
        <div className={styles.center}>
          <div className={styles.image_container}>
            <img
              className={styles.image}
              src={image}
              alt="Hero section image"
            />
          </div>
          <div className={styles.box_container}>
            <span className={styles.first}>LIVING . STYLE</span>
            <span className={styles.second}>
              Style meets comfort in this NYC Apartment tour
            </span>
            <span className={styles.third}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
              repudiandae tenetur hic odit provident commodi quis explicabo
              cumque nesciunt quibusdam, inventore non voluptate perspiciatis
              reiciendis? Corporis, iure non exercitationem a ipsa vero.
            </span>
            <button className={styles.button}>Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default heroSection;

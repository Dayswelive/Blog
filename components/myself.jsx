import React from "react";
import styles from "../stylesheets/myself.module.css";
//importing images
import imagefive from "../assets/5.webp";
import imagesix from "../assets/6.webp";
function myself() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rightcontainer}>
        <div className={styles.imagecontainer}>
          <img src={imagefive} alt="my photo" className={styles.imagefive} />
        </div>
      </div>
      <div className={styles.leftcontainer}>
        <span className={styles.text}>Behind The Blog</span>
        <span className={styles.hello}>
          Hello, <span className={styles.kashish}>I'm Kashish</span>
        </span>
        <span className={styles.textcontent}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam odio
          est nisi sequi tempore, quasi iure at neque consequuntur eaque quae
          corporis praesentium optio reprehenderit voluptatem quisquam aliquam
          voluptates similique!
        </span>
        <span className={styles.textcontent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nislorum modi
          voluptatem laudantium saepe delectus ea unde ullam rem aliquid.
        </span>
      </div>
    </div>
  );
}

export default myself;

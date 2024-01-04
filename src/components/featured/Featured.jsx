import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import CardList from "../cardList/CardList";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <b>HEY, Bahaeeddine27 HERE !</b><br/>Discover my stories and creative ideas.
      </h2>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h3>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

import React, { FC } from "react";
import styles from "./hero.module.sass";
import clx from "classnames";

export const Hero = () => {
  return (
    <section className={styles.root}>
      <div className={styles.text_container}>
        <h1 className={styles.heading}>Dollar investments that help you grow</h1>
        <p className={styles.description}>
          We put your money in high quality assets that help you build wealth and achieve your
          financial goals.
        </p>
        <div className={styles.button_container}>
          <PlayStoreButton />
          <AppStoreButton />
        </div>
      </div>
      <div className={styles.hero_image_container}>
        <img src={"/Phone.png"} />
      </div>
    </section>
  );
};

export const PlayStoreButton = ({ className }: { className?: string }) => (
  <button className={clx(styles.button, className)}>
    <img src={"/playstore.png"} />
  </button>
);

export const AppStoreButton = ({ className }: { className?: string }) => (
  <button className={clx(styles.button, className)}>
    <img src={"/appstore.png"} />
  </button>
);

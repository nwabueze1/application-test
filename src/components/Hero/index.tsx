import React, { FC } from "react";
import styles from "./hero.module.sass";
import clx from "classnames";
import { gsap, Power3 } from "gsap";
import { useGSAP } from "@gsap/react";

export const Hero = () => {
  const root = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const genericAnimation1 = {
        duration: 8,
        repeat: -1,
        yoyo: true,
        yoyoEase: Power3.easeInOut,
        xPercent: 200,
      };
      gsap.to("#dot1", {
        yPercent: -40,
        ...genericAnimation1,
      });

      gsap.to("#dot2", {
        yPercent: 40,
        ...genericAnimation1,
      });

      const genericAnimation2 = {
        repeat: -1,
        duration: 3,
        yoyo: true,
        yoyoEase: Power3.easeInOut,
      };

      gsap.to("#dot3", {
        yPercent: 30,
        ...genericAnimation2,
      });
      gsap.to("#dot4", {
        yPercent: -30,
        ...genericAnimation2,
      });

      gsap.to("#dot5", {
        ...genericAnimation2,
        scale: 1.2,
        yPercent: 20,
        xPercent: 20,
      });
    },
    {
      scope: root,
      dependencies: [],
    },
  );

  return (
    <div className={styles.base} ref={root}>
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
      <div className={styles.dot_bg} id="dot1" />
      <div className={styles.dot_sm} id="dot2" />
      <div
        className={styles.dot_bg}
        id="dot3"
        style={{ bottom: "unset", top: "2%", left: "50%" }}
      />
      <div
        className={clx(styles.dot_bg, styles.dot_scaler)}
        id="dot5"
        style={{ left: "unset", right: 0, bottom: "2%" }}
      />
      <div
        className={styles.dot_sm}
        id="dot4"
        style={{ top: "unset", bottom: "4%", left: "50%" }}
      />
    </div>
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

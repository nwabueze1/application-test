import React from "react";
import styles from "./saveforthefuture.module.sass";
import Image from "next/image";
import clx from "classnames";
import { dmSans, tomatoFont } from "@/font/body";
import { ContainedButton } from "../JoinTheRiseCommunity";

export const SaveForTheFuture = () => {
  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <div className={styles.image_container}>
          <Image src={"/Phone.svg"} alt="phone image" height={501} width={249} />
          <div className={styles.inner_image_container}>
            <div className={clx(dmSans.className, styles.inner)}>
              <h6 className={clx(styles.image_title, tomatoFont.className)}>Build Wealth</h6>
              <p className={styles.image_description}>
                Invest for long-term goals like retirement with this plan. It’s your financial
                freedom partner.
              </p>
              <a className={styles.image_link}>
                <span>Start Investing</span>{" "}
                <Image src={"/white_arrow.svg"} alt="" height={12} width={12} />
              </a>
            </div>
            <Image
              src={"/currency_image.jpeg"}
              alt="current"
              height={269}
              width={316}
              className={styles.overlay_image}
            />
          </div>
        </div>
        <div className={clx(styles.text_container, dmSans.className)}>
          <p className={styles.overline}>The Rise App</p>
          <h4 className={clx(tomatoFont.className, styles.title)}>
            Save for your <span>future</span>
          </h4>
          <p className={styles.description}>
            With Rise, you achieve your financial goals faster. Save for school, your home,
            vacations, your children’s future and more.
          </p>
          <div>
            <ContainedButton className={clx(styles.button, dmSans.className)}>
              Start Saving
            </ContainedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

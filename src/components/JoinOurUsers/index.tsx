import styles from "./joinourusers.module.sass";
import { AppStoreButton, PlayStoreButton } from "@/components";
import { dmSans, tomatoFont } from "@/font/body";
import clx from "classnames";
import Image from "next/image";

export const JoinOurUsers = () => {
  return (
    <section className={styles.root}>
      <div className={styles.content}>
        <div className={clx(dmSans.className, styles.text_content)}>
          <p className={styles.overline}>Download The Rise App</p>
          <h3 className={clx(styles.heading, tomatoFont.className)}>
            Join our 100,000 users investing and setting long term goals!
          </h3>
          <p className={styles.description}>Dollar investments that help you grow.</p>
          <div className={styles.btn_container}>
            <AppStoreButton className={styles.button} />
            <PlayStoreButton className={styles.button} />
          </div>
        </div>
        <div className={styles.image_container}>
          <Image
            src={"/small_phone.png"}
            alt={"phone image"}
            width={208}
            height={425}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

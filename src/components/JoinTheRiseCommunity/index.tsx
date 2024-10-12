import classes from "./jointhelease.module.sass";
import clx from "classnames";
import { dmSans, tomatoFont } from "@/font/body";
import Image from "next/image";

export const JoinTheRiseCommunity = () => {

  return <section className={classes.root}>
    <div className={classes.section}>
      <div className={classes.text_container}>
        <h3 className={classes.heading}>
          Join The Rise Community
        </h3>
        <p className={clx(classes.description, dmSans.className)}>
          If you want to go far, go together. Our Telegram community surrounds you with others who can help you along
          your financial journey with tips, support, advice and learning. It's completely free and open to new and
          seasoned investors.
        </p>
        <ContainedButton>
          Join our Community
        </ContainedButton>
      </div>
      <div>
        <Image className={classes.image} src={"/communit.png"} alt={"users image"} height={368} width={432} />
      </div>
    </div>
  </section>;
};

export const ContainedButton = ({ children }) => {

  return <button className={clx(classes.button, tomatoFont.className)}>{children}</button>;
};
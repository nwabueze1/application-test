import classes from "./investment.module.sass";
import Image from "next/image";
import clx from "classnames";
import { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  image: number | string;
  reverse: boolean;
};
export const Investment = ({ reverse = false, image, description, title }: Props) => {
  return (
    <section
      className={clx(classes.root, {
        [classes.root_reverse]: reverse,
      })}
    >
      <div className={classes.text_container}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <Button>Start Investing Now</Button>
      </div>
      <div className={classes.image_container}>
        <Image src={`/investment/${image}.png`} height={460} width={488} alt="" />
      </div>
    </section>
  );
};

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className: string;
};

export const Button = ({ children, onClick, className }: Partial<ButtonProps>) => {
  return (
    <button className={clx(classes.invtest_btn, className)} onClick={onClick}>
      {children}{" "}
      <Image alt={"Arrow icon"} src={"/icons/chevron-right.png"} width={10} height={12} />
    </button>
  );
};

import classes from "./howWeRegulate.module.sass";
import clx from "classnames";
import { dmSans } from "@/font/body";
import { Container } from "@/components/Container";

export const HowWeRegulate = () => {

  return <section className={classes.root}>
    <Container>
      <div className={classes.content}>
        <h3 className={classes.title}>How we are Regulated</h3>
        <p className={clx(dmSans.className, classes.description)}>Rise is registered and regulated both in the US and in
          Nigeria. Our team is made up of US registered investment
          advisers, our Nigerian users are covered by our SEC licensed trustees, ARM Trustees and all our assets are
          held
          with regulated third parties, in all relevant jurisdictions</p>
      </div>
    </Container>
    <div className={classes.overlay} />
    <div className={clx(classes.overlay, classes.overlay_bottom_left)} />
    <div className={clx(classes.overlay, classes.overlay_bottom_right)} />
    <div className={clx(classes.overlay, classes.overlay_top_right)} />
  </section>;
};
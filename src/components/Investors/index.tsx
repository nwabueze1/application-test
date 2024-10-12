import classes from "./investors.module.sass";

export const Investors = () => {
  const images = [3, 4, 2, 1];
  return <section className={classes.root}>
    {
      images.map(image => <img key={image} src={`/investors/${image}.png`} />)
    }
  </section>;
};
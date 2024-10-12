import classes from "./assetsClasses.module.sass";
import clx from "classnames";
import { dmSans, tomatoFont } from "@/font/body";
import { Button } from "@/components/Investment";
import Image from "next/image";

export const AssetsClasses = () => {

  const renderCards = () => cardData.map((data, index) => <Card key={index} {...data} />);

  return <section className={classes.root}>
    <header className={classes.header}>
      <h3 className={classes.heading}>Asset Classes</h3>
      <p className={classes.description}>It’s your money, choose where you invest it</p>
    </header>
    <div className={classes.card_container}>
      {renderCards()}
    </div>
  </section>;
};


type CardProps = {
  imageKey: string | number
  title: string;
  description: string
  infos: { key: string; value: string }[]
  cta: { title: string },
  color: string

}
export const Card = (props: Partial<CardProps>) => {


  return <article className={classes.card} style={{ background: props.color }}>
    <header className={classes.card_header}></header>
    <div className={classes.card_body}>
      <div className={classes.card_image_container}>
        <Image src={`/assets/${props.imageKey}.png`} alt={"image"} height={80} width={80} />
      </div>
      <div className={classes.card_body_inner}>
        <h4 className={classes.card_body_title}>{props.title}</h4>
        <div className={dmSans.className}>
          <p className={clx(classes.card_body_description)}>
            {props.description}
          </p>
          {
            (props.infos ?? []).map((info, index) =>
              <p className={classes.card_body_misc} key={index}><span>{info.key}</span>: {info.value}</p>,
            )
          }
          <Button className={clx(tomatoFont.className, classes.card_body_button)}>
            {props.cta?.title}
          </Button>
        </div>
      </div>
    </div>
  </article>;
};

const cardData: CardProps[] = [
  {
    title: "Stocks",
    description: "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.\n",
    cta: {
      title: "Learn how Stocks work",
    },
    imageKey: "1",
    infos: [{
      key: "Historical returns",
      value: "14% per annum",
    },
      {
        key: "Risk Level",
        value: "Medium",
      },
    ],
    color: "#F6F2FF",
  },
  {
    title: "Real Estate",
    description: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
    cta: {
      title: "Learn how Real Estate work",
    },
    imageKey: "2",
    infos: [{
      key: "Historical returns",
      value: "14% per annum",
    },
      {
        key: "Risk Level",
        value: "Medium",
      },
    ],
    color: "#F6F2FF",
  },
  {
    color: "#ECFEFE",
    title: "Fixed Income",
    description: "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
    cta: {
      title: "Learn how Fixed Income work",
    },
    imageKey: "3",
    infos: [{
      key: "Historical returns",
      value: "14% per annum",
    },
      {
        key: "Risk Level",
        value: "Medium",
      },
    ],
  },
];
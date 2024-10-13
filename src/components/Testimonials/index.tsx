"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./testimonial.module.sass";
import clx from "classnames";
import { dmSans, tomatoFont } from "@/font/body";
import { FC } from "react";
import Image from "next/image";
import { testimonials } from "./data";

export const Testimonials = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1.8,
    speed: 500,
    gap: 30,
    responsive: [
      {
        breakpoint: 768, // Mobile screen width (adjust if needed)
        settings: {
          slidesToShow: 1, // Show only one item on mobile
          centerPadding: "0px", // Adjust padding as necessary for mobile
        },
      },
    ],
  };

  const renderTestimonials = () =>
    testimonials.map((testimonial, index) => <Card key={index} {...testimonial} />);

  return (
    <section className={clx(dmSans.className, styles.root)}>
      <header className={styles.header}>
        <h3 className={clx(styles.title, tomatoFont.className)}>Testimonial</h3>
        <p className={styles.description}>
          Our mission at Risevest is to empower more people just like you to achieve your personal
          financial goals.
        </p>
      </header>

      <div className={styles.card_container}>
        <Slider {...settings}>{renderTestimonials()}</Slider>
      </div>
    </section>
  );
};

type CardPropsType = {
  content: string;
  author: {
    image: string;
    name: string;
  };
};

export const Card: FC<Partial<CardPropsType>> = ({ author, content }) => {
  return (
    <div className={styles.card_base}>
      <article className={clx(styles.card, dmSans.className)}>
        <p className={clx(styles.card_description, dmSans.className)}>{content}</p>
        <div className={styles.card_author}>
          <div className={styles.card_image_container}>
            <Image
              className={styles.card_author_image}
              src={author?.image ?? ""}
              alt={author?.name ?? ""}
              height={32}
              width={32}
            />
          </div>
          <p className={styles.card_author_text}>{author?.name}</p>
        </div>
      </article>
    </div>
  );
};

import React from "react";
import Styles from "./navbar.module.sass";
import Link from "next/link";
import Image from "next/image";
import clx from "classnames";

export const Navbar = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const navLinks = ["Home", "Products", "Investment Club", "Blog", "About Us", "FAQs"];
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const renderNavLinks = () =>
    navLinks.map((link, index) => (
      <li
        key={index}
        className={clx(Styles.nav_list__item, {
          [Styles.nav_list__item_active]: activeIndex === index,
        })}
      >
        <Link href={"#"} className={Styles.nav_list__link}>
          {link}
        </Link>
      </li>
    ));

  return (
    <nav className={Styles.nav}>
      <div className={Styles.nav_logo__container}>
        <Image src={"/Logo.png"} height={17} width={60} alt={"logo"} />
      </div>
      <ul className={clx(Styles.nav_list, Styles.nav_list_web)}>{renderNavLinks()}</ul>
      <button className={Styles.menu_button} onClick={() => setOpenDrawer(!openDrawer)}>
        <Image src={"/menu-toggler.png"} height={24} width={24} alt="menu" />
      </button>
      {/*<div className={clx(Styles.drawer, {*/}
      {/*  [Styles.drawer_open]: openDrawer,*/}
      {/*})}>{renderNavLinks()}</div>*/}
    </nav>
  );
};

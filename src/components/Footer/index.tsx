import React, { FC, ReactNode } from "react";
import styles from "./footer.module.sass";
import Image from "next/image";
import Link from "next/link";
import clx from "classnames";
import { dmSans, tomatoFont } from "@/font/body";
import { navLinks } from "./data";

export const Footer = () => {
  const renderNavLinks = () =>
    navLinks.map((navLink, index) => (
      <div key={index}>
        {navLink?.is_logo ? (
          <Image src={"/rise_footer.svg"} alt="logo" height={16} width={56} />
        ) : (
          <h3 className={clx(tomatoFont.className, styles.footer_title)}>{navLink?.title}</h3>
        )}
        <div className={styles.footer_link_container}>
          {navLink.links?.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              hasAnchorIcon={Boolean(link && (link as any)?.["has_icon"])}
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    ));

  return (
    <div className={styles.footer}>
      <div className={styles.section}>{renderNavLinks()}</div>
    </div>
  );
};

type NavLinkPropsType = {
  children: ReactNode;
  href: string;
  hasAnchorIcon: boolean;
};

export const NavLink: FC<Partial<NavLinkPropsType>> = ({ children, href, hasAnchorIcon }) => {
  return (
    <Link href={href ?? "#"} className={clx(styles.navLink, dmSans.className)}>
      {children}{" "}
      {hasAnchorIcon && <Image src={"/down-arrow.png"} alt="down-arrow" height={16} width={16} />}
    </Link>
  );
};

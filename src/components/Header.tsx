import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import AboutMe from "@/public/images/about.svg";
import Project from "@/public/images/projects.svg";
import Contact from "@/public/images/contact.svg";
import type { AppProps } from "next/app";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.navi}>
        <li className={styles.menu}>
          <Link href="/">
            <Image src={AboutMe} alt="about" />
            <p>about</p>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link href="/projects/">
            <Image src={Project} alt="project" />
            <p>project</p>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link href="/contact/">
            <Image src={Contact} alt="contact" />
            <p>contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

Header.defaultProps = {};

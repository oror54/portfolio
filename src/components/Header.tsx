import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import AboutMe from "@/public/images/about.svg";
import Project from "@/public/images/projects.svg";
import Contact from "@/public/images/contact.svg";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <ul className={styles.navi}>
        <li className={styles.menu}>
          <Link
            href={"/"}
            className={router.pathname === "/" ? styles.active : ""}
          >
            <Image src={AboutMe} alt="about" />
            <p>about</p>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link
            href={"/projects"}
            className={
              router.pathname === "/projects"
                ? styles.active
                : "" && router.pathname === "/projects/view"
                ? styles.active
                : ""
            }
          >
            <Image src={Project} alt="project" />
            <p>project</p>
          </Link>
        </li>
        <li className={styles.menu}>
          <Link
            href={"/contact"}
            className={router.pathname === "/contact" ? styles.active : ""}
          >
            <Image src={Contact} alt="contact" />
            <p>contact</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

Header.defaultProps = {};

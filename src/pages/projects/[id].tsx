import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
type projectDetailProp = {
  image: any;
  title: string;
  text: any;
};
/* <projectDetail/> =========================================================== */
export default function projectDetail() {
  return (
    <div className={styles.pageBox}>
      <div className={styles.box}>
        <h3 className={styles.title}>
          <Link href="/projects">
            <button type="button">목록으로</button>
          </Link>
        </h3>
      </div>
    </div>
  );
}

projectDetail.defaultProps = {};

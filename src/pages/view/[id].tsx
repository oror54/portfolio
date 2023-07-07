import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";

export default function projectDetail() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.pageBox}>
      <div className={styles.box}>
        <h3 className={styles.title}>
          <button>이전페이지</button>
        </h3>
      </div>
    </div>
  );
}

projectDetail.defaultProps = {};

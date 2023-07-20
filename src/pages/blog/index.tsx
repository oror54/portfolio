import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/page.module.scss";

/* Prop =========================================================== */
type Prop = {};

export default function index() {
  return (
    <div className={styles.pageBox}>
      <div className={styles.box}>
        <h3 className={styles.title}>blog</h3>
        <div className={styles.bolg_content}>
          <b>준비중입니다</b>
        </div>
      </div>
    </div>
  );
}

index.defaultProps = {};

import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/page.module.scss";

export default function index() {
  return (
    <div className={styles.pageBox}>
      <div className={styles.box}>
        <h3 className={styles.title}>projects</h3>
      </div>
    </div>
  );
}

index.defaultProps = {};

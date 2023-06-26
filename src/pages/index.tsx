import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/page.module.scss";

export default function index() {
  return (
    <div className={styles.pageBox}>
      <h3 className={styles.title}>about me</h3>
    </div>
  );
}

index.defaultProps = {};

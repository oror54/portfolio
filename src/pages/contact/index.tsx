import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/page.module.scss";

/* Prop =========================================================== */
type Prop = {};

export default function index() {
  return <div className={styles.pageBox}></div>;
}

index.defaultProps = {};

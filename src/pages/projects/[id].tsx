import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail01 from "@/public/images/projectdetail01.jpg";
import { time } from "console";
/* Prop =========================================================== */
type Prop = {};
type projectDetailProps = {
  id: string | undefined;
  title: string;
  content: any;
  url: any;
};
/* <projectDetail/> =========================================================== */

const ProjectDetail: NextPage<projectDetailProps> = (props) => {
  const { id, title, content, url } = props;
  const router = useRouter();
  if (router.isFallback) {
    return <div>로딩중</div>;
  }
  return (
    <div className={styles.pageBox}>
      <div className={styles.box}>
        <h3 className={styles.title}>
          <button
            onClick={() => {
              router.back();
            }}
          >
            목록으로
          </button>
        </h3>
      </div>
      <>
        {id}
        {title}
        {content}
        {url}
      </>
    </div>
  );
};
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
    {
      params: {
        id: "4",
      },
    },
    {
      params: {
        id: "5",
      },
    },
    {
      params: {
        id: "6",
      },
    },
    {
      params: {
        id: "7",
      },
    },
    {
      params: {
        id: "8",
      },
    },
    {
      params: {
        id: "9",
      },
    },
    {
      params: {
        id: "10",
      },
    },
  ];
  return { paths, fallback: false };
};

interface projectParams extends ParsedUrlQuery {
  id: string;
  title: string;
}

export const getStaticProps: GetStaticProps<
  projectDetailProps,
  projectParams
> = async (context) => {
  return {
    props: { id: context.params!["id"], title: "", content: "", url: "" },
  };
};
export default ProjectDetail;

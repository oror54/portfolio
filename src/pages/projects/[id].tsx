import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { MongoClient } from "mongodb";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
type projectDetailProps = {
  id: string | undefined;
};
/* <projectDetail/> =========================================================== */
const ProjectDetail: NextPage<projectDetailProps> = (props) => {
  const { id } = props;
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
      <>{id}</>
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
}

export const getStaticProps: GetStaticProps<
  projectDetailProps,
  projectParams
> = async (context) => {
  return {
    props: {
      id: context.params!["id"],
    },
  };
};
export default ProjectDetail;

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/project.module.scss";
import { useRouter } from "next/router";
/* 프로젝트 이미지 =========================================================== */
import project01 from "@/public/images/project01.jpg";
import project02 from "@/public/images/project02.jpg";
import project03 from "@/public/images/project03.jpg";
import project04 from "@/public/images/project04.jpg";
import project05 from "@/public/images/project05.jpg";
import project06 from "@/public/images/project06.jpg";
import project07 from "@/public/images/project07.jpg";
import project08 from "@/public/images/project08.jpg";
import project09 from "@/public/images/project09.jpg";
import project10 from "@/public/images/project10.jpg";
import { Route, Routes } from "react-router-dom";
/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
type ProjectProp = {
  id: string | undefined;
  image: any;
  title: string;
  date: any;
  text: any;
  url: string;
};

/* <ProjectList/> =========================================================== */
export default function ProjectSlide({}) {
  const router = useRouter();
  console.log(router);
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const projectArray: ProjectProp[] = [
    {
      id: "1",
      image: (
        <Image
          src={project01}
          alt="오십견각도계"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "오십견각도계",
      date: <>2021. 11</>,
      text: <div>UX/UI 디자인 및 관리자 페이지 퍼블리싱</div>,
      url: "/projects/view/project01",
    },
    {
      id: "2",
      image: (
        <Image
          src={project02}
          alt="솔루션페이지"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "솔루션페이지",
      date: <>2021. 12</>,
      text: <div>회사 솔루션 페이지 퍼블리싱</div>,
      url: "/projects/view/project02",
    },
    {
      id: "3",
      image: (
        <Image
          src={project03}
          alt="기술장인"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "기술장인",
      date: <>2021. 01</>,
      text: <div>UX/UI 디자인 및 관리자 페이지 퍼블리싱</div>,
      url: "/projects/view/project03",
    },
    {
      id: "4",
      image: (
        <Image
          src={project04}
          alt="건물임대관리"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "건물임대관리",
      date: <>2021. 02</>,
      text: <div>UX/UI 디자인 및 웹앱, 관리자 페이지 퍼블리싱</div>,
      url: "/projects/view/project04",
    },
    {
      id: "5",
      image: (
        <Image
          src={project05}
          alt="장보고배송"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "장보고배송",
      date: <>2021. 03</>,
      text: <div>UX/UI 디자인 및 관리자 페이지 퍼블리싱</div>,
      url: "/projects/view/project05",
    },
    {
      id: "6",
      image: (
        <Image
          src={project06}
          alt="동네의영웅"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "동네의영웅",
      date: <>2021. 04</>,
      text: <div>웹앱, 관리자 페이지 퍼블리싱</div>,
      url: "/projects/view/project06",
    },
    {
      id: "7",
      image: (
        <Image
          src={project07}
          alt="홀리데이"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "홀리데이",
      date: <>2021. 05</>,
      text: <div>UX/UI 디자인, 관리자 페이지 퍼블리싱</div>,
      url: "/projects/view/project07",
    },
    {
      id: "8",
      image: (
        <Image
          src={project08}
          alt="씨플러스"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "씨플러스",
      date: <>2021. 08</>,
      text: (
        <div>
          UX/UI 디자인 및 관리자 페이지 퍼블리싱, 랜딩페이지 디자인 및 퍼블리싱
        </div>
      ),
      url: "/projects/view/project08",
    },
    {
      id: "9",
      image: (
        <Image
          src={project09}
          alt="체질의민족"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "체질의민족",
      date: <>2021. 10</>,
      text: <div>관리자 페이지 퍼블리싱</div>,
      url: "/projects/view/project09",
    },
    {
      id: "10",
      image: (
        <Image
          src={project10}
          alt="모델에이전시"
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
      ),
      title: "모델에이전시",
      date: <>2021. 11</>,
      text: <div>UX/UI 디자인, 관리자 페이지 퍼블리싱</div>,
      url: "/projects/view/project10",
    },
  ];
  const renderProjectAraay = (item: ProjectProp, index: number) => {
    return (
      <SwiperSlide key={index} className="swiper_slide">
        <div className={styles.projects_wrap}>
          <div className={styles.image} id={item.id}>
            <Link href={item.url}>{item.image}</Link>
          </div>
          <div className={styles.content}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.date}>{item.date}</div>
            <div className={styles.text}>{item.text}</div>
          </div>
        </div>
      </SwiperSlide>
    );
  };
  return (
    <div className={styles.Swiper_Wrap}>
      <Swiper
        className="ProjectSlide"
        spaceBetween={0}
        slidesPerView={"auto"}
        onSlideChange={() => console.log("slide change")}
        navigation
        // pagination={{ clickable: true }}
        autoplay={false}
      >
        {projectArray.map(renderProjectAraay)}
      </Swiper>
    </div>
  );
}

ProjectSlide.defaultProps = {};

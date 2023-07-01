import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // 추가
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Image from "next/image";
import styles from "@/styles/project.module.scss";

import project01 from "@/public/images/project01.jpg";

/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
type ProjectProp = {
  image: any;
  title: string;
  date: any;
  text: any;
};
/* <ProjectList/> =========================================================== */
export default function ProjectSlide({}) {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const projectArray: ProjectProp[] = [
    {
      image: (
        <>
          <Image src={project01} alt="오십견각도계" width={370} height={470} />
        </>
      ),
      title: "오십견각도계",
      date: <>2021. 11</>,
      text: (
        <>
          <div>UX/UI 디자인 및 관리자 페이지 퍼블리싱</div>
        </>
      ),
    },
    {
      image: (
        <>
          <Image src={project01} alt="오십견각도계" width={370} height={470} />
        </>
      ),
      title: "오십견각도계",
      date: <>2021. 11</>,
      text: (
        <>
          <div>UX/UI 디자인 및 관리자 페이지 퍼블리싱</div>
        </>
      ),
    },
  ];
  const renderProjectAraay = (item: ProjectProp, index: number) => {
    return (
      <SwiperSlide key={index} className="swiper_slide">
        <div className={styles.projects_wrap}>
          <div className={styles.image}>{item.image}</div>
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
    <div className="Swiper_Wrap">
      <Swiper
        className="ProjectSlide"
        spaceBetween={0}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        autoplay={false}
      >
        {projectArray.map(renderProjectAraay)}
      </Swiper>
    </div>
  );
}

ProjectSlide.defaultProps = {};

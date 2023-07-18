import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail02 from "@/public/images/projectdetail02.jpg";
/* Prop =========================================================== */
type Prop = {};
type projectDetailProps = {
  id: string | undefined;
  title: string;
  content: any;
  url: any;
};
/* <projectDetail/> */
export default function ProjectDetail() {
  const router = useRouter();
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
      <div className={styles.detail}>
        <div className={styles.title}>솔루션페이지</div>
        <Image
          src={projectDetail02}
          alt="솔루션페이지"
          className={styles.projectImage}
        />
        <div className={styles.content}>
          회사 소개 및 솔루션페이지 제작 프로젝트에 참여하였습니다. html, css,
          jQuery 및 swiper.js 등을 활용하여 제작 하였습니다.
        </div>
        <Link
          href="https://www.bandeuthan.com/solution/"
          className={styles.link}
          target="_blank"
        >
          솔루션 페이지 보러가기
        </Link>
      </div>
      <></>
    </div>
  );
}

ProjectDetail.defaultProps = {};

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail01 from "@/public/images/projectdetail01.jpg";
/* Prop =========================================================== */
type Prop = {};
type projectDetailProps = {
  id: string | undefined;
  title: string;
  content: any;
  url: any;
};
/* <projectDetail/> */
export default function ProjectDetail01() {
  const router = useRouter();
  return (
    <div className={styles.pageBox}>
      <div className={styles.box_detail}>
        <h3 className={styles.title}>
          <button
            className={styles.back_btn}
            onClick={() => {
              router.back();
            }}
          >
            프로젝트 목록으로
          </button>
        </h3>
      </div>
      <div className={styles.detail}>
        <div className={styles.title}>오십견각도계</div>
        <Image
          src={projectDetail01}
          alt="오십견각도계"
          className={styles.projectImage}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
        <div className={styles.content}>
          핸드폰으로 간편하게 어깨 관절 각도를 측정하여 오십견 진단을 해볼 수
          있는 서비스로 전체적인 UX/UI 디자인과 관리자 페이지 퍼블리싱을 맡아
          프로젝트를 진행하였습니다.
        </div>
        <Link
          href="https://bandeuthan.com/portfolio/view.html?goPage=2&refType=&idx=1361&keyword="
          className={`${styles.link} ${styles.btn1}`}
          target="_blank"
        >
          보러가기
        </Link>
      </div>
    </div>
  );
}

ProjectDetail01.defaultProps = {};

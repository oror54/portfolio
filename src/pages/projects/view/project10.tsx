import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail10 from "@/public/images/projectdetail10.png";
/* Prop =========================================================== */
type Prop = {};
type projectDetailProps = {
  id: string | undefined;
  title: string;
  content: any;
  url: any;
};
/* <projectDetail/> */
export default function ProjectDetail10() {
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
        <div className={styles.title}>모델에이전시</div>
        <Image
          src={projectDetail10}
          alt="모델에이전시"
          className={styles.projectImage}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
        <div className={styles.content}>
          모델 에이전시 업무관리 프로그램의 전체적인 UX/UI 디자인과 관리자
          페이지 퍼블리싱을 맡아 프로젝트를 진행하였습니다.
        </div>
        <Link
          href="http://leaders.design.pm5.kr/admin/login/"
          className={`${styles.link} ${styles.btn1}`}
          target="_blank"
        >
          관리자페이지 보러가기
        </Link>
      </div>
    </div>
  );
}

ProjectDetail10.defaultProps = {};

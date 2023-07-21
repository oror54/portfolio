import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail08 from "@/public/images/projectdetail08.png";
/* Prop =========================================================== */
type Prop = {};
type projectDetailProps = {
  id: string | undefined;
  title: string;
  content: any;
  url: any;
};
/* <projectDetail/> */
export default function ProjectDetail08() {
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
        <div className={styles.title}>케어플러스</div>
        <Image
          src={projectDetail08}
          alt="케어플러스"
          className={styles.projectImage}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
        <div className={styles.content}>
          간병인을 찾는 보호자와 일감을 찾는 간병인을 매칭시켜주는 플랫폼으로
          보호자가 올린 간병정보를 바탕으로 간병인들이 견적을 발행하여 보호자가
          결제를 하면 매칭이 이루어 지는 서비스로 전체적인 UX/UI 디자인과 관리자
          랜딩페이지 퍼블리싱을 맡아 프로젝트를 진행하였습니다.
        </div>
        <Link
          href="http://careplus.design.pm5.kr/admin/login/"
          className={`${styles.link} ${styles.btn1}`}
          target="_blank"
        >
          관리자페이지 보러가기
        </Link>
        <Link
          href="http://careplus.design.pm5.kr/landing/"
          className={`${styles.link} ${styles.btn2}`}
          target="_blank"
        >
          랜딩페이지 보러가기
        </Link>
      </div>
    </div>
  );
}

ProjectDetail08.defaultProps = {};

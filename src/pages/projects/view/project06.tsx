import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail06 from "@/public/images/projectdetail06.jpg";
/* Prop =========================================================== */
type Prop = {};
type projectDetailProps = {
  id: string | undefined;
  title: string;
  content: any;
  url: any;
};
/* <projectDetail/> */
export default function ProjectDetail06() {
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
        <div className={styles.title}>동네시대</div>
        <Image
          src={projectDetail06}
          alt="동네시대"
          className={styles.projectImage}
        />
        <div className={styles.content}>
          위치기반 상품 판매 플랫폼 서비스로 회원가입 및 매거진 앱 화면
          퍼블리싱과 관리자페이지 유지보수 퍼블리싱을 맡아 작업하였습니다.
        </div>
        <Link
          href="http://townage.design.pm5.kr/admin/login/"
          className={`${styles.link} ${styles.btn1}`}
          target="_blank"
        >
          관리자페이지 보러가기
        </Link>
        <Link
          href="https://www.townage.co.kr/"
          className={`${styles.link} ${styles.btn2}`}
          target="_blank"
        >
          앱 페이지 보러가기
        </Link>
      </div>
    </div>
  );
}

ProjectDetail06.defaultProps = {};

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail03 from "@/public/images/projectdetail03.jpeg";
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
        <div className={styles.title}>기술장인</div>
        <Image
          src={projectDetail03}
          alt="기술장인"
          className={styles.projectImage}
        />
        <div className={styles.content}>
          제조사/임가공사 매칭 O2O 플랫폼 앱으로 전체적인 UX/UI 디자인과 관리자
          페이지 퍼블리싱을 맡아 프로젝트를 진행하였습니다.
        </div>
        <Link
          href="http://techmaster.design.pm5.kr/admin/login/"
          className={styles.link}
          target="_blank"
        >
          관리자페이지 보러가기
        </Link>
      </div>
      <></>
    </div>
  );
}

ProjectDetail.defaultProps = {};
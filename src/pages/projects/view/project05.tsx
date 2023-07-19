import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail05 from "@/public/images/projectdetail05.jpeg";
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
        <div className={styles.title}>장보고배송</div>
        <Image
          src={projectDetail05}
          alt="장보고배송"
          className={styles.projectImage}
        />
        <div className={styles.content}>
          온/오프라인 쇼핑몰에서 받은 주문 배달을 위한 배달 기사 전용 Android /
          iOS 네이티브 어플리케이션 서비스로 전체적인 UX/UI 디자인과 관리자
          페이지 퍼블리싱을 맡아 프로젝트를 진행하였습니다.
        </div>
        <Link
          href="http://jangbogo.design.pm5.kr/admin/login/login.html"
          className={styles.link}
          target="_blank"
        >
          관리자페이지 보러가기
        </Link>
      </div>
    </div>
  );
}

ProjectDetail.defaultProps = {};

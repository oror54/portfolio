import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail09 from "@/public/images/projectdetail09.png";
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
        <div className={styles.title}>체질의민족</div>
        <Image
          src={projectDetail09}
          alt="체질의민족"
          className={styles.projectImage}
        />
        <div className={styles.content}>
          카메라를 통한 안면인식과 설문을 통해 체질을 진단하고 콘텐츠를
          추천해주는 모바일 플랫폼으로 관리자 페이지 퍼블리싱을 맡아 프로젝트를
          진행하였습니다.
        </div>
        <Link
          href="http://kcare.design.pm5.kr/admin/login/"
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

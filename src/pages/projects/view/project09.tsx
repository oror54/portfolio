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
export default function ProjectDetail09() {
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
        <div className={styles.title}>체질의민족</div>
        <Image
          src={projectDetail09}
          alt="체질의민족"
          className={styles.projectImage}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
        <div className={styles.content}>
          카메라를 통한 안면인식과 설문을 통해 체질을 진단하고 콘텐츠를
          추천해주는 모바일 플랫폼으로 관리자 페이지 퍼블리싱을 맡아 프로젝트를
          진행하였습니다.
        </div>
        <Link
          href=""
          className={`${styles.link} ${styles.btn1}`}
          target="_blank"
        >
          보러가기
        </Link>
      </div>
    </div>
  );
}

ProjectDetail09.defaultProps = {};

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
import projectDetail04 from "@/public/images/projectdetail04.jpeg";
/* Prop =========================================================== */
type Prop = {};
type projectDetailProps = {
  id: string | undefined;
  title: string;
  content: any;
  url: any;
};
/* <projectDetail/> */
export default function ProjectDetail04() {
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
        <div className={styles.title}>건물임대관리</div>
        <Image
          src={projectDetail04}
          alt="건물임대관리"
          className={styles.projectImage}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcUQ8AAdUBKRs/oNkAAAAASUVORK5CYII="
        />
        <div className={styles.content}>
          임차인 전용 어플리케이션으로 임대정보를 제공하고 이대료 결제 및
          커뮤니티 기능을 제공하는 서비스로 전체적인 UX/UI 디자인과 함께 앱 화면
          퍼블리싱 및 관리자 페이지 퍼블리싱을 맡아 프로젝트를 진행하였습니다.
        </div>
        <Link
          href="https://bandeuthan.com/portfolio/view.html?goPage=2&refType=&idx=1392&keyword="
          className={`${styles.link} ${styles.btn1}`}
          target="_blank"
        >
          {" "}
          보러가기
        </Link>
      </div>
    </div>
  );
}

ProjectDetail04.defaultProps = {};

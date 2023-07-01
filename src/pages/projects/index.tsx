import ProjectSlide from "./Swiper";
import styles from "@/styles/page.module.scss";
/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};

export default function index() {
  return (
    <div className={styles.pageBox}>
      <div className={styles.box}>
        <h3 className={styles.title}>projects</h3>
        <div>
          <ProjectSlide />
        </div>
      </div>
    </div>
  );
}

index.defaultProps = {};

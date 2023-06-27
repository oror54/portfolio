import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/page.module.scss";
import phtoshop from "@/public/images/Photoshop.png";
import illustrator from "@/public/images/Illustrator.png";
import dreamweaver from "@/public/images/Dreamweaver.png";
import premier from "@/public/images/PremierPro.png";
import figma from "@/public/images/Figma.png";
import zeplin from "@/public/images/Zeplin.png";
import html from "@/public/images/html.png";
import css from "@/public/images/css.png";
import jQuery from "@/public/images/jQuery.png";
import javaScript from "@/public/images/JavaScript.png";
import bootstrap from "@/public/images/Bootstrap.png";
import sass from "@/public/images/Sass.png";
import react from "@/public/images/React.png";
import next from "@/public/images/Nextjs.png";
import typeScript from "@/public/images/TypeScript.png";
import git from "@/public/images/Git.png";
/* Constants =========================================================== */
/* Prop =========================================================== */
type Prop = {};
type SkillProp = {
  title: React.ReactNode;
  icon: any;
};
export default function index() {
  //디자인스킬
  const designArray: SkillProp[] = [
    { title: <p>phtoshop</p>, icon: phtoshop },
    { title: <p>illustrator</p>, icon: illustrator },
    { title: <p>dreamweaver</p>, icon: dreamweaver },
    { title: <p>PremierPro</p>, icon: premier },
    { title: <p>figma</p>, icon: figma },
    { title: <p>zeplin</p>, icon: zeplin },
  ];
  const renderDesignArray = (item: SkillProp, index: number) => {
    return (
      <div className={styles.skl} key={index}>
        <Image src={item.icon} alt="skill" width={100} height={100} />
        <div className={styles.skl_txt}>{item.title}</div>
      </div>
    );
  };
  //퍼블리싱스킬
  const PublishingArray: SkillProp[] = [
    { title: <p>html</p>, icon: html },
    { title: <p>css</p>, icon: css },
    { title: <p>jQuery</p>, icon: jQuery },
    { title: <p>javaScript</p>, icon: javaScript },
    { title: <p>bootstrap</p>, icon: bootstrap },
    { title: <p>sass</p>, icon: sass },
    { title: <p>react</p>, icon: react },
    { title: <p>next</p>, icon: next },
    { title: <p>typeScript</p>, icon: typeScript },
    { title: <p>git</p>, icon: git },
  ];
  const renderPublishingArray = (item: SkillProp, index: number) => {
    return (
      <div className={styles.skl} key={index}>
        <Image src={item.icon} alt="skill" width={100} height={100} />
        <div className={styles.skl_txt}>{item.title}</div>
      </div>
    );
  };
  return (
    <div className={styles.pageBox}>
      <div className={styles.box}>
        <h3 className={styles.title}>about me</h3>
        <div className={styles.txt}>
          안녕하세요. 저는 현재 웹디자이너, 웹퍼블리셔 직무를 수행하고있습니다.
          현재 React. Next.js 를 공부하고 있으며 보시는 페이지 역시 공부하는
          언어로 제작했습니다. 제 역량을 성장 시키고자 하는 의지가 큰 만큼 저는
          항상 배우려는 자세로 최선을 다하여 업무에 임하고 있습니다. 잘
          부탁드립니다.
        </div>
      </div>
      <div className={styles.box}>
        <h3 className={styles.title}>design</h3>
        <div className={styles.skl_box}>
          {designArray.map(renderDesignArray)}
        </div>
      </div>
      <div className={styles.box}>
        <h3 className={styles.title}>publishing</h3>
        <div className={styles.skl_box}>
          {designArray.map(renderPublishingArray)}
        </div>
      </div>
    </div>
  );
}

index.defaultProps = {};

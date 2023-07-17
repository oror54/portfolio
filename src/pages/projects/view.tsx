import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/project.module.scss";
/* Constants =========================================================== */
import projectview01 from "@/public/images/projectdetail01.jpg";
/* Prop =========================================================== */
type Prop = {};
type ProjectViewProp = {
  id: string;
  image: any;
  title: string;
  date: any;
  text: any;
  url: string;
};
export default function ProjectView() {
  const ProjectViewArray: ProjectViewProp[] = [
    {
      id: "1",
      image: { projectview01 },
      title: "오십견각도계",
      date: <>2021. 11</>,
      text: <>설명</>,
      url: "주소",
    },
  ];
  const renderProjectViewArray = (item: ProjectViewProp, index: number) => {
    return (
      <div key={index}>
        {item.image}
        {item.title}
        {item.date}
        {item.url}
      </div>
    );
  };
  return <div>{ProjectViewArray.map(renderProjectViewArray)}</div>;
}

ProjectView.defaultProps = {};

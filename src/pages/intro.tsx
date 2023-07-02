import Head from "next/head";
import Image from "next/image";
import profilePic from "@/public/images/jihyeon.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="box">
        <Image
          className="profilePic"
          src={profilePic}
          alt="profilepicture"
        ></Image>
        <div className="tit"> Hong Jihyeon</div>
        <div className="sub_tit">Web designer & Web publisher</div>
      </div>
      <div className="txt_box">
        <div className="tit">안녕하세요:-&#41;</div>
        <div className="text">
          프론트엔드 개발자를 꿈꾸는 웹디자이너, 웹 퍼블리셔 홍지현입니다.
        </div>
        <div className="text">
          최적의 사용자 경험을 고려한 트랜디한 디자인으로 상상을 실현해 낼 수
          있도록 항상 최선을 다하고 있습니다.
        </div>
        <div className="text">
          저는 언제나 배움의 자세를 가지고 새로운 것을 배우려는 의지를 가지고
          있습니다. 저에 대해서 궁금하시다면 아래의 메일 주소로 언제든 연락
          주시기 바랍니다.
          <br />
          <h4>jihyeon33@gmail.com</h4>
        </div>
      </div>
    </div>
  );
}

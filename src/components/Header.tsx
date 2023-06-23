import Link from "next/link";
import Image from "next/image";
import AboutMe from "@/public/images/about.svg";
import Project from "@/public/images/projects.svg";
import Contact from "@/public/images/contact.svg";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <Image src={AboutMe} alt="about" />
            <p>about</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={Project} alt="project" />
            <p>project</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={Contact} alt="contact" />
            <p>contact</p>
          </Link>
        </li>
      </ul>
    </>
  );
}

Header.defaultProps = {};

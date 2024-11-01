import { IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import HoverRed from "./Hover";


export default function SocialsMenu() {
  return (
    <div className="invisible md:visible fixed bottom-0 left-1">
      <a className="" href="https://www.linkedin.com/in/nicolasadelramos/" target="_blank">
        <div className="group relative">
          <HoverRed />
          <IoLogoLinkedin color="white" size="40" className="blur-none" />
        </div>
      </a>
      <a href="mailto:naramos@gmail.com">
        <div className="group relative">
          <HoverRed />
          <MdEmail color="white" size="40" className="blur-none" />
        </div>
      </a>
      <a href="https://github.com/Radin6">
        <div className="group relative">
          <HoverRed />
          <FaGithub color="white" size="40" className="blur-none" />
        </div>
      </a>
      <div className="border-2 h-8 w-0 mx-auto mt-1" />
    </div>
  );
}

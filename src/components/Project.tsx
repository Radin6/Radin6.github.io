import { IoLogoYoutube } from "react-icons/io";
import { FaPager } from "react-icons/fa6";

import YoutubeVideo from "./YoutubeVideo";
import { useState } from "react";
import HoverRed from "./Hover";

interface ProjectProps {
  children?: React.ReactNode,
  position: 'left' | 'right',
  src: string,
  title: string,
  href: string,
  link?: string,
  targetBlank?: boolean,
  onClick?: React.MouseEventHandler<HTMLAnchorElement>,
  className?: string,
  key?: string
}

export function Project({ children, position, src, title, href, targetBlank, onClick, className = "", key, link }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleYoutube = (e: any) => {
    e.stopPropagation();
    setIsOpen(!isOpen)
  }

  return (
    <article key={key} className="p-3 my-3 border-[1px] border-red-800 rounded-lg">
      <h4 className="text-white font-bold text-xl text-center p-3">{title}</h4>
      <div className={`flex flex-col md:flex-row ${position == "left" ? "" : "flex-col md:flex-row-reverse"}`}>
        <div className="max-h-[250px] mx-auto">
          <img src={src} alt="project image" className="h-[150px] md:h-full object-contain" />
        </div>
        <div className="mx-3">
          <p className="text-white text-lg">{children}</p>
        </div>
      </div>
      <div className="flex w-full justify-center gap-5">
        {link &&
          <button onClick={handleYoutube} className="group relative">
            <HoverRed />
            <IoLogoYoutube className="text-[50px] text-gray-300 blur-none" />
          </button>
        }
        <a href={href} target={targetBlank ? "_blank" : ""} className={className} onClick={onClick}>
          <div className="group relative">
            <HoverRed />
            <FaPager className="text-[50px] text-gray-300 blur-none" />
          </div>
        </a>
      </div>
      <YoutubeVideo isOpen={isOpen} setIsOpen={setIsOpen} link={link} />
    </article>
  );
}

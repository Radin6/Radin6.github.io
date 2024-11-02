import { useIsVisible } from "../hooks/useIsVisible";
import { useRef } from "react";

function Skills() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <section className="my-20 px-4 py-10 bg-gradient-to-t from-transparent via-[#171616] via-[percentage:10%_90%] to-transparent">
      <h2 className="text-3xl text-white text-center mt-3">Languages</h2>
      <div ref={ref1} className={`flex gap-3 justify-center my-3 flex-wrap transition-opacity ease-in duration-[2000ms] ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        {/* JS */}
        <img className="w-[90px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
        {/* TS */}
        <img className="w-[90px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
      </div>
      <div className="w-full h-[50px]" />
      <h2 className="text-3xl text-white text-center mt-3">Technologies</h2>
      <div className={`flex gap-3 justify-center my-3 flex-wrap transition-opacity ease-in duration-[2000ms] ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        {/* Node JS */}
        <img className="w-[100px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
        {/* React */}
        <img className="w-[100px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
        {/* HTML */}
        <i className="devicon-html5-plain-wordmark colored text-[90px] text-[#E34F26]"></i>
        {/* CSS */}
        <i className="devicon-css3-plain-wordmark text-[90px] text-[#1572B6]"></i>
        {/* Tailwind */}
        <img className="w-[100px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
        {/* Github */}
        <i className="devicon-github-original-wordmark text-[90px] text-white"></i>
        {/* MySQL */}
        <img className="w-[100px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />
        {/* MongoDb */}
        <img className="w-[100px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
          
      </div>
    </section>
  );
}

export default Skills;
import { ReactNode, useRef } from "react";
import profilePicture from "./assets/profile-pic.png";
//import { Solidity, Python, JS, TS, HTML, CSS, Next, React, Tailwind, Github, NodeJS } from "./components/Badge/Badge";
import SocialsMenu from "./components/SocialsMenu";
import { BadgeClear } from "./components/Badge/BadgeClear";
import { Project } from "./components/Project";
import { useIsVisible } from "./hooks/useIsVisible";
import { projectsData } from "./data/projectsData";

interface ArticleProps {
  children?: ReactNode;
  title: string;
}

const Article = ({ children, title }: ArticleProps) => {
  return (
    <article className="mt-4">
      <h3 className="text-red-800 font-bold text-xl">{title}</h3>
      <p className="text-white">{children}</p>
    </article>
  );
};

function Main() {
  return (
    <section
      id="first-page"
      className="flex min-h-screen justify-center items-center"
    >
      <div className="max-w-[600px] flex flex-col mx-4 md:flex-row md:w-[60%]">
        <div className="">
          <h1 className="text-4xl text-white">Hi, I am Nicolás</h1>
          <h1 className="text-4xl text-red-800 font-bold">
            Front End Developer
          </h1>
          <p className="text-white text-lg mt-2">
            I'm a junior Front End Developer based in Italy. I'm currently
            working as Front End at Servi and studying a long-term Full Stack
            Development course taught by university professors.
          </p>
          <a href="cv-en.pdf" download>
            <button className="border-[1px] border-red-800 rounded-md p-1 my-3 text-red-800 hover:bg-white hover:bg-opacity-5 transition ease-in-out delay-100">
              Get my resumee
            </button>
          </a>
        </div>
        <div className="w-full">
          <div className="group relative w-[150px] md:w-[180px] m-auto">
            <div className="bg-red-500 rounded-full absolute top-0 bottom-0 right-0 left-0 blur-md duration-300 animate-pulse" />
            <img
              src={profilePicture}
              alt="profile picture"
              className="rounded-full bg-black blur-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="about-me" className="flex flex-col items-center">
      <div className="flex max-w-[600px] flex-col mx-4 md:w-[60%]">
        <hr className="border-[1px] border-white w-full" />
        <h2 className="text-3xl my-5 text-white text-center">About Me</h2>
        <Article title="Past">
          I have always liked exact sciences, that's why I became a Chemistry
          Technician and then, a Food Industry Technician. Although I like them,
          I felt there was not so much to innovate in this area, so I decided to
          transition to Web Development, as it is governed by rules like the
          exact sciences. This field/industry is open to innovation and
          creativity. Above all, it is a changing world and there is so much to
          discover.
        </Article>
        <Article title="Present">
          I am currently working on a project called Servi, which is a
          marketplace for freelance jobs. At the same time, I am studying Full
          Stack Development specializing in blockchain. I’m also working on a
          course. I teach individual and group lessons about blockchain
          technology and how to interact with it.
        </Article>
        <Article title="Future">
          In the future, I find myself specializing in branches of development
          that interest me since I enjoy continuous learning. Especially, I see
          myself bringing that knowledge into projects I am part of.
        </Article>
      </div>
    </section>
  );
}

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

      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center">
      <div className="flex max-w-[600px] flex-col mx-4 md:w-[60%]">
        <hr className="border-[1px] border-white w-full" />
        <h2 className="text-3xl my-5 text-white text-center">Projects</h2>
        {projectsData.map((project, index) =>
          <Project key={project.title} position={index % 2 ? "left" : "right"} title={project.title} src={project.src} href={project.href} onClick={project.onClick}>
            <p>{project.description}</p>
            {project.madeWith?.backend.length !== 0 &&
              <p className="text-slate-400 text-sm m-2">
                Made on the Back-End with:
                <div className="flex flex-wrap gap-2">
                  {
                    project.madeWith?.backend.map(element => <BadgeClear key={element}>{element}</BadgeClear>)
                  }
                </div>
              </p>
            }
            {project.madeWith?.frontend.length !== 0 &&
              <p className="text-slate-400 text-sm m-2">
                Made on the Fron-End with:
                <div className="flex flex-wrap gap-2">
                {
                  project.madeWith?.frontend.map(element => <BadgeClear key={element}>{element}</BadgeClear>)
                }
                </div>
              </p>
            }
          </Project>
        )}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-r from-[#171717] to-[#2E0202]">
      <SocialsMenu />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

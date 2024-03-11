import { ReactNode } from 'react'

import profilePicture from "./assets/profile-pic.png";
import web3BankPic from "./assets/web3-bank.png";
import serviPic from "./assets/servi.png";
import newsApp from "./assets/news-app.jpg";
import {
  Solidity,
  Python,
  JS,
  TS,
  HTML,
  CSS,
  Next,
  React,
  Chakra,
  Tailwind,
} from "./components/Badge";
import { Project } from "./components/Project";

interface ArticleProps {
  children?: ReactNode,
  title: string,
}

const Article = ({ children, title } : ArticleProps) => {
  return (
    <article className="mt-4">
      <h3 className="text-white text-xl">{title}</h3>
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
      <div className="flex flex-col mx-4 md:flex-row md:w-[60%]">
        <div className="">
          <h1 className="text-4xl text-white">Hi, I am Nicolás</h1>
          <h1 className="text-4xl text-red-800 font-bold">Front End Developer</h1>
          <p className="text-white text-lg mt-2">
            I'm a junior Front End Developer based in Italy. I'm currently
            working as Front End at Servi and studying a long-term Full Stack
            Development course taught by university professors.
          </p>
          <button className="border-[1px] border-red-800 rounded-md p-1 my-3 text-red-800 hover:bg-white hover:bg-opacity-5 ">
            Get my resumee
          </button>
        </div>
        <div className="grow w-full">
          <img
            src={profilePicture}
            alt="profile picture"
            className="w-[150px] md:w-[180px] rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center min-h-screen mb-20"
    >
      <div className="flex flex-col mx-4 md:w-[60%]">
        <hr className="border-[1px] border-white w-full" />
        <h2 className="text-3xl text-white text-center">About Me</h2>
        <Article title="Past">
          I always liked exact sciences that's why I became chemistry technician
          and then food industry technician. While I like there is nothing to
          innovate in this area so I decided to transition to web development as
          it is governed by rules like the exact sciences but is open to
          innovation and creativity. Above all it is a changing world and there
          is much to discover.
        </Article>
        <Article title="Present">
          I am currently working on a project called Servi that is a marketplace
          for freelance job and at the same time I am studying full stack
          development specialized in blockchain. I’m also working on a course
          teaching individually and in groups about blockchain technology and
          how to interact with it.
        </Article>
        <Article title="Future">
          In the future I find myself specializing in branches of development
          that interest me since I like continuous learning. Especially by
          bringing that knowledge into projects you’re working on.
        </Article>
        <h2 className="text-3xl text-white text-center mt-3">Languages</h2>
        <div className="flex gap-1 justify-center my-3 flex-wrap">
          <Python />
          <JS />
          <TS />
          <Solidity />
        </div>
        <h2 className="text-3xl text-white text-center mt-3">Technologies</h2>
        <div className="flex gap-1 justify-center my-3 flex-wrap">
          <React />
          <Next />
          <HTML />
          <CSS />
          <Chakra />
          <Tailwind />
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center">
      <div className="flex flex-col mx-4 md:w-[60%]">
        <hr className="border-[1px] border-white w-full" />
        <h2 className="text-3xl text-white text-center">Projects</h2>
        <Project position="left" title="Servi" src={serviPic} href="">
          I am actually working in this project as Front End Dev. Servi connects
          freelancers to people or businesses looking to hire, with a wide range
          of services.
          <p className="text-slate-400 text-sm m-2">
            Made with:
            <div className="flex flex-wrap gap-2">
            <JS /><React /><Next /><Chakra />
            </div>
          </p>
        </Project>
        <Project
          position="right"
          title="News App"
          src={newsApp}
          href="https://radin6.github.io/news-app/"
        >
          It is a web where you search for news by text input, category,
          language, country and even sorting them. This use the API of gnews.io
          <p className="text-slate-400 text-sm m-2">
            Made with:
            <div className="flex flex-wrap gap-2">
            <React /><JS />
            </div>
          </p>
        </Project>
        <Project
          position="left"
          title="Web3 Bank"
          src={web3BankPic}
          href="https://radin6.github.io/portfolio-projects/bank-project/bank-project.html"
        >
          This is a simple Smart contract and Webpage that simulate a Bank.
          Back-End: Solidity, Javascript, Front-End: Javascript, HTML and CSS
          <p className="text-slate-400 text-sm m-2">
            Made with:
            <div className="flex flex-wrap gap-2">
            <JS /><Solidity />
            </div>
          </p>
        </Project>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-r from-[#171717] to-[#2E0202]">
      <Main />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;

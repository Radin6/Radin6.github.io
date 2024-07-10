import { ReactNode, useRef } from "react";
import profilePicture from "./assets/profile-pic.png";
import web3BankPic from "./assets/web3-bank.png";
import serviPic from "./assets/servi.png";
import newsApp from "./assets/news-app.jpg";
import onlineChat from "./assets/online-chat.png"
import ticketingSystem from "./assets/ticketing-system.png"
import { Solidity, Python, JS, TS, HTML, CSS, Next, React, Tailwind, Github } from "./components/Badge/Badge";
import SocialsMenu from "./components/SocialsMenu";
import { BadgeClear } from "./components/Badge/BadgeClear";
import { Project } from "./components/Project";
import toast from 'react-hot-toast';
import { useIsVisible } from "./hooks/useIsVisible";

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
        <h2 className="text-3xl text-white text-center">About Me</h2>
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
  const ref1 = useRef(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <section className="my-20 px-4 py-10 bg-[#171616]">
      <h2 className="text-3xl text-white text-center mt-3">Languages</h2>
      <div ref={ref1} className={`flex gap-3 justify-center my-3 flex-wrap transition-opacity ease-in duration-[2000ms] ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <JS />
        <TS />
        <Solidity />
        <Python />
      </div>
      <div className="w-full h-[50px]" />
      <h2 className="text-3xl text-white text-center mt-3">Technologies</h2>
      <div className={`flex gap-3 justify-center my-3 flex-wrap transition-opacity ease-in duration-[2000ms] ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
        <React />
        <Next />
        <HTML />
        <CSS />
        <Tailwind />
        <Github />
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center">
      <div className="flex max-w-[600px] flex-col mx-4 md:w-[60%]">
        <hr className="border-[1px] border-white w-full" />
        <h2 className="text-3xl text-white text-center">Projects</h2>
        <Project position="left" title="Servi" src={serviPic} href="#projects" onClick={() => { toast.error("not available to show because is a private project at the moment") }}>
          I am actually working in this project as Front End Developer. Servi
          connects freelancers to people or businesses looking to hire, with a
          wide range of services.
          <p className="text-slate-400 text-sm m-2">
            Made with:
            <div className="flex flex-wrap gap-2">
              <BadgeClear>JavaScript</BadgeClear>
              <BadgeClear>React JS</BadgeClear>
              <BadgeClear>Next JS</BadgeClear>
              <BadgeClear>Tailwind CSS</BadgeClear>
              <BadgeClear>Zustand</BadgeClear>
            </div>
          </p>
        </Project>
        <Project
          position="right"
          title="News App"
          src={newsApp}
          href="https://radin6.github.io/news-app/"
          targetBlank
        >
          It is a web where you search for news by text input, category,
          language, country and even sorting them. This use the API of gnews.io
          <p className="text-slate-400 text-sm m-2">
            Made with:
            <div className="flex flex-wrap gap-2">
              <BadgeClear>JavaScript</BadgeClear>
              <BadgeClear>React JS</BadgeClear>
            </div>
          </p>
        </Project>
        <Project
          position="left"
          title="Ticketing System (Under develop)"
          src={ticketingSystem}
          href="https://radin6.github.io/ticketing-system-front/"
          targetBlank
        >
          This is Ticketing system app where you can generate a user,
          Log in and create tickets. It uses JWT to sign and save the user info on the cookies.
          It is a Full Stack project with MongoDB as database and deployed in Railway.
          <p className="text-slate-400 text-sm m-2">
            Made on the Back-End with:
            <div className="flex flex-wrap gap-2">
              <BadgeClear>Node JS</BadgeClear>
              <BadgeClear>Express</BadgeClear>
            </div>
          </p>
          <p className="text-slate-400 text-sm m-2">
            Made on the Fron-End with:
            <div className="flex flex-wrap gap-2">
              <BadgeClear>React JS</BadgeClear>
              <BadgeClear>TypeScript</BadgeClear>
              <BadgeClear>Tailwind CSS</BadgeClear>
            </div>
          </p>
        </Project>
        <Project position="right" title="Real Time Chat" src={onlineChat} href="https://real-time-chat-app-vhjf.onrender.com/" targetBlank>
          This is a simple online chat application using HTML, CSS, and JavaScript with Socket.IO for real-time communication.
          You get an username and is stored in localStorage. You can open 2 browser and give a try to the chat.
          <p className="text-slate-400 text-sm m-2">
            Made with:
            <div className="flex flex-wrap gap-2">
              <BadgeClear>Node JS</BadgeClear>
              <BadgeClear>Sockets.IO</BadgeClear>
              <BadgeClear>Express</BadgeClear>
              <BadgeClear>HTML</BadgeClear>
              <BadgeClear>CSS</BadgeClear>
            </div>
          </p>
        </Project>
        <Project
          position="left"
          title="Web3 Bank"
          src={web3BankPic}
          href="https://radin6.github.io/portfolio-projects/bank-project/bank-project.html"
          targetBlank
        >
          This is a simple Smart contract and Webpage that simulate a Bank.
          Back-End: Solidity, Javascript, Front-End: Javascript, HTML and CSS
          <p className="text-slate-400 text-sm m-2">
            Made with:
            <div className="flex flex-wrap gap-2">
              <BadgeClear>JavaScript</BadgeClear>
              <BadgeClear>Solidity</BadgeClear>
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
      <SocialsMenu />
      <Main />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

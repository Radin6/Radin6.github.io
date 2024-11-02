//import { Solidity, Python, JS, TS, HTML, CSS, Next, React, Tailwind, Github, NodeJS } from "./components/Badge/Badge";
import SocialsMenu from "./components/SocialsMenu";
import { motion, Variants } from "framer-motion";

// import sections
import Main from "./sections/Main";
import Projects from "./sections/Projects";
import AboutMe from "./sections/AboutMe";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#171717] to-[#2E0202]">
      <SocialsMenu />
      <Main />
      <Projects />
      <Skills />
      <AboutMe />
    </div>
  );
}

export default App;

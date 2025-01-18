import { motion } from "framer-motion";

function Skills() {

  return (
    <section
      className="my-20 px-4 py-10 bg-gradient-to-t from-transparent via-[#171616] via-[percentage:10%_90%] to-transparent">
      <div className="w-full h-[30px]" />
      <h2 className="text-3xl text-white text-center my-5">Languages</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1,
        }}
      >
        <div className="flex gap-3 justify-center my-3 flex-wrap">
          {/* JS */}
          <img
            className="w-[90px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />


          {/* TS */}
          <img
            className="w-[90px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="TypeScript"
          />

          {/* Java */}
          <img
            className="w-[90px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
            alt="TypeScript"
          />
        </div>
      </motion.div>
      <div className="w-full h-[30px]" />

      <h2 className="text-3xl text-white text-center my-5">Technologies</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1,
        }}
      >
        <div className="flex gap-3 justify-center my-3 flex-wrap">
          {/* Node JS */}
          <img
            className="w-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
            alt="Node.js"
          />
          {/* React */}
          <img
            className="w-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
            alt="React"
          />
          {/* HTML */}
          <i
            className="devicon-html5-plain-wordmark colored text-[90px] text-[#E34F26]"
            aria-label="HTML5"
          ></i>
          {/* CSS */}
          <i
            className="devicon-css3-plain-wordmark text-[90px] text-[#1572B6]"
            aria-label="CSS3"
          ></i>
          {/* Tailwind */}
          <img
            className="w-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
          />
          {/* Spring */}
          <img
            className="w-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
            alt="Tailwind CSS"
          />
          {/* Github */}
          <i
            className="devicon-github-original-wordmark text-[90px] text-white"
            aria-label="GitHub"
          ></i>
        </div>
      </motion.div>

      <div className="w-full h-[30px]" />

      <h2 className="text-3xl text-white text-center my-5">Database</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          duration: 1,
        }}
      >
        <div className="flex gap-3 justify-center my-3 flex-wrap">
          {/* MySQL */}
          <img
            className="w-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
            alt="MySQL"
          />
          {/* MongoDb */}
          <img
            className="w-[100px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
            alt="MongoDB"
          />
        </div>
      </motion.div>
      <div className="w-full h-[30px]" />
    </section>
  );
}

export default Skills;
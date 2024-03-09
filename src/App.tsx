import profilePicture from "./assets/profile-pic.png";

const Article = ({ children, title }) => {
  return (
    <article className="mt-4">
      <h3 className="text-white text-xl">{title}</h3>
      <p className="text-white">{children}</p>
    </article>
  );
};

function App() {
  return (
    <div className="bg-gradient-to-r from-[#171717] to-[#2E0202]">
      <section
        id="first-page"
        className="flex h-screen justify-center items-center"
      >
        <div className="flex flex-row w-[60%]">
          <div className="">
            <h1 className="text-4xl text-white">Hi, I am Nicolás</h1>
            <h1 className="text-4xl text-red-800">Front End Developer</h1>
            <p className="text-white">
              I'm a junior Front End Developer based in Italy. I'm currently
              working as Front End at Servi and studying a long-term Full Stack
              Development course taught by university professors.
            </p>
            <button className="border-[1px] border-red-800 rounded-md p-1 m-1 text-red-800 hover:bg-white hover:bg-opacity-5 ">
              Get my resumee
            </button>
          </div>
          <div className="grow w-[100%]">
            <img
              src={profilePicture}
              alt="profile picture"
              className="w-[200px] rounded-full"
            />
          </div>
        </div>
      </section>
      <section
        id="about-me"
        className="flex flex-col items-center min-h-screen"
      >
        <div className="flex flex-col w-[60%]">
          <hr className="border-[1px] border-white w-full" />
          <h2 className="text-3xl text-white text-center">About Me</h2>
          <Article title="Past">
            I always liked exact sciences that's why I became chemistry
            technician and then food industry technician. While I like there is
            nothing to innovate in this area so I decided to transition to web
            development as it is governed by rules like the exact sciences but
            is open to innovation and creativity. Above all it is a changing
            world and there is much to discover.
          </Article>
          <Article title="Present">
            I am currently working on a project called Servi that is a
            marketplace for freelance job and at the same time I am studying
            full stack development specialized in blockchain. I’m also working
            on a course teaching individually and in groups about blockchain
            technology and how to interact with it.
          </Article>
          <Article title="Future">
            In the future I find myself specializing in branches of development
            that interest me since I like continuous learning. Especially by
            bringing that knowledge into projects you’re working on.
          </Article>
          <h2 className="text-3xl text-white text-center">Languages</h2>
          <h2 className="text-3xl text-white text-center">Technologies</h2>
        </div>
      </section>
      <section id="projects" className="flex flex-col items-center">
        <div className="flex flex-col w-[60%]">
        </div>
      </section>
    </div>
  );
}

export default App;

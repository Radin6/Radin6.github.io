import profilePicture from "../assets/profile-pic.png";

function Main() {
  return (
    <section
      id="first-page"
      className="flex min-h-screen justify-center items-center"
    >
      <div className="max-w-[600px] flex flex-col mx-4 md:flex-row md:w-[60%]">
        <div className="">
          <h1 className="text-4xl text-white">I'm Nicolás</h1>
          <h1 className="text-4xl text-red-800 font-bold">
            Software Engineer
          </h1>
          <p className="text-white text-lg mt-2">
            I'm based in Italy and currently
            working as Front End at Servi. I'm studying a Bachelor's degree 
            in Computer Engineering at the University Unimarconi.
          </p>
          <a href="cv-nicolas-ramos.docx" download>
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

export default Main;
interface ArticleProps {
  children?: React.ReactNode;
  title: string;
}

function AboutMe() {
  return (
    <section id="about-me" className="flex flex-col items-center pb-10">
      <div className="flex max-w-[600px] flex-col mx-4 md:w-[60%]">
        <hr className="border-[1px] border-white w-full" />
        <h2 className="text-3xl my-5 text-white text-center">About Me</h2>
        <Article title="Past">
          I am originally from Argentina and currently living in Italy.
          My background has always been around exact sciences.
          In Argentina, I got a degree in Chemistry and then I became a Food Industry Technician.
          However, my passion for innovation and creativity led me to transition into Full Stack development.
          This field follows structured rules as exact sciences, but offers opportunities for innovation.
        </Article>
        <Article title="Present">
          I am currently working on a project called QRTonic, in which we are developing a
          smart menu app. At the same time,
          I am studying studying a Bachelor's Degree in Computer engineering to perfect my skills.
          I am also working on a course. I teach individual and group lessons about blockchain
          technology and how to interact with it.
        </Article>
        <Article title="Future">
          I see myself as a professional in computer engineering.
          I see myself taking on more responsibilities,
          where I can mentor junior developers and enhance innovative projects.
          I am committed to continuous learning and want to be part of a company 
          that values growth and development, contributing to its success through my technical expertise and collaborative approach.
        </Article>
      </div>
    </section>
  );
}

const Article = ({ children, title }: ArticleProps) => {
  return (
    <article className="mt-4">
      <h3 className="text-red-800 font-bold text-xl">{title}</h3>
      <p className="text-white">{children}</p>
    </article>
  );
};

export default AboutMe;
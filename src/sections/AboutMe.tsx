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

const Article = ({ children, title }: ArticleProps) => {
  return (
    <article className="mt-4">
      <h3 className="text-red-800 font-bold text-xl">{title}</h3>
      <p className="text-white">{children}</p>
    </article>
  );
};

export default AboutMe;
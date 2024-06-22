interface ProjectProps {
  children?: React.ReactNode,
  position: 'left' | 'right',
  src: string,
  title: string,
  href: string,
}

export function Project({ children, position, src, title, href } : ProjectProps) {
  return (
    <a href={href} target="_blank" className="">
      <article className="p-3 my-3 border-[1px] border-red-800 rounded-lg hover:bg-white hover:bg-opacity-5 transition ease-in-out delay-100">
        <h4 className="text-white font-bold text-xl text-center">{title}</h4>
        <div
          className={`flex flex-col md:flex-row ${
            position == "left" ? "" : "flex-col md:flex-row-reverse"
          }`}
        >
          <div className="max-h-[250px] mx-auto">
            <img src={src} alt="project image" className="h-[150px] md:h-full aspect-auto"/>
          </div>
          <div className="mx-3">
            <p className="text-white text-lg">{children}</p>
          </div>
        </div>
      </article>
    </a>
  );
}

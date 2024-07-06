interface ProjectProps {
  children?: React.ReactNode,
  position: 'left' | 'right',
  src: string,
  title: string,
  href: string,
  targetBlank?: boolean,
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string
}

export function Project({ children, position, src, title, href, targetBlank, onClick, className = "" } : ProjectProps) {
  return (
    <a href={href} target={targetBlank ? "_blank" : ""} className={className} onClick={onClick}>
      <article className="p-3 my-3 border-[1px] border-red-800 rounded-lg hover:bg-white hover:bg-opacity-5 hover:scale-105 transition ease-in-out delay-100">
        <h4 className="text-white font-bold text-xl text-center p-3">{title}</h4>
        <div
          className={`flex flex-col md:flex-row ${
            position == "left" ? "" : "flex-col md:flex-row-reverse"
          }`}
        >
          <div className="max-h-[250px] mx-auto">
            <img src={src} alt="project image" className="h-[150px] md:h-full object-contain"/>
          </div>
          <div className="mx-3">
            <p className="text-white text-lg">{children}</p>
          </div>
        </div>
      </article>
    </a>
  );
}

import { IoMdCloseCircle } from "react-icons/io";

interface YoutubeVideoProps {
  link?: string,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function YoutubeVideo({ link, isOpen, setIsOpen }: YoutubeVideoProps) {

  return (
    <div className={`flex justify-center items-center fixed backdrop-blur-sm w-screen h-screen top-0 left-0 ${isOpen ? "" : "hidden"}`}>
      <div className={` flex flex-col items-center max-w-[90%] min-h-[200px] max-h-[90%]`}>
        {isOpen && <iframe
          className="w-[280px] h-[157px] md:w-[560px] md:h-[315px]"
          width="560"
          height="315"
          src={link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen></iframe>}
        <button onClick={() => setIsOpen(false)}>
          <IoMdCloseCircle className="text-[50px] text-gray-300" />
        </button>
      </div>
    </div>
  )
}

export default YoutubeVideo;
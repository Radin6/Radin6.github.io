import web3BankPic from "../assets/web3-bank.png";
import serviPic from "../assets/servi.png";
import newsApp from "../assets/news-app.jpg";
import twotter from "../assets/twotter2.png";
// import onlineChat from "../assets/online-chat.png";
import ticketingSystem from "../assets/ticketing-system.png";

type projectsDataProps = {
  title: string,
  description: string,
  src: string,
  href: string,
  link?: string,
  targetBlank: boolean,
  onClick: () => void,
  madeWith?: {
    frontend: string[],
    backend: string[]
  }
}

export const projectsData : Array<projectsDataProps> = [
  {
    title: "Servi",
    description: `I am actually working in this project as Front End Developer. Servi
          connects freelancers to people or businesses looking to hire, with a
          wide range of services.`,
    src: serviPic,
    href: "https://servi-portfolio.vercel.app/",
    link: "https://www.youtube.com/embed/QBxsYLTKmu0?si=faHgPNAdA7U0NvFJ",
    targetBlank: true,
    onClick:  ()=>{} ,
    madeWith: {
      frontend: ["JavaScript", "React JS", "Next JS", "Tailwind CSS", "Zustand",],
      backend: [],
    }
  },
  {
    title: "Twotter",
    description: `Twotter is a social media app inspired by Twitter, 
        designed to enable users to share short posts, 
        interact with others through likes and comments, and engage in discussions.`,
    src: twotter,
    href: "https://twotter-dun.vercel.app/",
    targetBlank: true,
    onClick:  ()=>{} ,
    madeWith: {
      frontend: ["TypeScript", "React JS", "Tailwind CSS", "Zustand"],
      backend: ["Node Js", "Express JS", "MySQL", "Cloudinary"],
    }
  },
  {
    title: "Ticketing System",
    description: `This is Ticketing system app where you can generate a user,
          Log in and create tickets. It uses JWT to sign and save the user info on the cookies.
          It is a Full Stack project with MongoDB as database and deployed in Railway.`,
    src: ticketingSystem,
    href: "https://radin6.github.io/ticketing-system-front/",
    link: "https://www.youtube.com/embed/8Kc4eP0i5QE?si=Pq0-Hq5ZfIo5d7_u",
    targetBlank: true,
    onClick: () => {},
    madeWith: {
      frontend: ["TypeScript", "React JS", "Tailwind CSS", "Zustand"],
      backend: ["Node JS", "Express", "MongoDB"],
    }
  },
  {
    title: "News App",
    description: `It is a web where you search for news by text input, category,
          language, country and even sorting them. This use the API of gnews.io`,
    src: newsApp,
    href: "https://radin6.github.io/news-app/",
    targetBlank: true,
    onClick: () => {},
    madeWith: {
      frontend: ["JavaScript", "React JS", "CSS"],
      backend: [],
    }
  },
  // {
  //   title: "Real Time Chat",
  //   description: `This is a simple online chat application using HTML, CSS, and JavaScript with Socket.IO for real-time communication.
  //         You get an username and is stored in localStorage. You can open 2 browser and give a try to the chat.`,
  //   src: onlineChat,
  //   href: "https://real-time-chat-app-vhjf.onrender.com/",
  //   targetBlank: true,
  //   onClick: () => {},
  //   madeWith: {
  //     frontend: ["HTML", "CSS"],
  //     backend: ["Node JS", "Sockets.IO", "Express"],
  //   }
  // },
  {
    title: "Web3 Bank",
    description: `This is a simple Smart contract and Webpage that simulate a Bank.
          Back-End: Solidity, Javascript, Front-End: Javascript, HTML and CSS`,
    src: web3BankPic,
    href: "https://radin6.github.io/portfolio-projects/bank-project/bank-project.html",
    targetBlank: true,
    onClick: () => {},
    madeWith: {
      frontend: ["JavaScript"],
      backend: ["Solidity"],
    }
  },
]
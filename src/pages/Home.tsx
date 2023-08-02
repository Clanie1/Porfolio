import { AiOutlineArrowRight } from "react-icons/ai";
import me from "../assets/img/me.png";
import DownloadResume from "../components/btns/DownloadResumeBtn";

const Home = () => {
  return (
    <div className="py-6 flex flex-col md:flex-row m-auto items-center h-full w-[90%] md:w-full md:justify-around gap-8 md:gap-3 md:px-4 border- ">
      <div className="flex flex-col md:w-1/4 md:mt-0 border-">
        <label className="text-4xl text-center md:text-start">
          Hi! I'm Daniel BAROCIO
        </label>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <label className="text-md flex-grow whitespace-nowrap">
            And I am a fullstack developer
          </label>
          <div className="w-full h-[2px] bg-white" />
        </div>
      </div>
      <img src={me} className="object-cover md:w-1/3 " />
      <div className="md:hidden flex">
        <DownloadResume />
      </div>
      <div className="flex flex-col  md:w-1/4 text-right font-montserrat gap-4">
        <div className="md:text-start text-center flex flex-col gap-3 items-center md:items-start">
          <label className="text-2xl font-bold">About me</label>
          <p className="text-sm font-light tracking-wider">
            I'm a passionate software developer with a keen interest in creating
            innocative solutions. I'm always excited to take on new challenges
            and expeand my knowledge.
          </p>
          <a
            href="/about-me"
            className="uppercase text-sm flex items-center gap-1 border-b-[1px] w-fit py-1 hover:gap-2 duration-100"
          >
            Learn more
            <AiOutlineArrowRight />
          </a>
        </div>
        <div className="w-full h-[1px] bg-[#ffffff22]" />
        <div className="md:text-start text-center flex flex-col gap-3 items-center md:items-start">
          <label className="text-2xl font-bold">My work</label>
          <p className="text-sm font-light tracking-wider">
            Experienced web developer passionate about creating stunning
            websites with clean, maintainable code.
          </p>
          <a
            href="/projects"
            className="uppercase text-sm flex items-center gap-1 border-b-[1px] w-fit py-1 hover:gap-2 duration-100"
          >
            Browse projects
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;

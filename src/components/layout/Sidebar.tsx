import { BsGithub } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";

const SideBar = () => {
  return (
    <div className="border-r-[0.5px] px-4 py-4 border-[#ffffff22] max-w-lg">
      <div className="flex flex-col gap-20 border-[#ffffff22] max-w-lg mt-10">
        <a href="https://github.com/Clanie1">
          <BsGithub className="w-[30px] h-[30px] hover:scale-110 duration-75" />
        </a>

        <a href="https://www.linkedin.com/in/daniel-barocio-2746981a0/">
          <BiLogoLinkedin className="w-[30px] h-[30px] hover:scale-110 duration-75" />
        </a>

        <a href="https://www.instagram.com/danibarocio/">
          <AiOutlineInstagram className="w-[30px] h-[30px] hover:scale-110 duration-75" />
        </a>
        <a href="#">
          <BiLogoGmail className="w-[30px] h-[30px] hover:scale-110 duration-75" />
        </a>
      </div>
    </div>
  );
};

export default SideBar;

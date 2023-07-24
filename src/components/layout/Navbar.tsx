import { AiOutlineDownload } from "react-icons/ai";
import ResumeDaniel from "../../assets/resume/Resume Daniel.pdf";
import { useState } from "react";

const Navbar = () => {
  const NAVBAR_OPTIONS = ["Home", "Projects", "About-me", "Contact"];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex border-2 h-fit w-full md:border-b-[0.1px] border-[#ffffff22] justify-end relative font-montserrat p-4 md:p-0">
      <BurgerMenu
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
        ClassName="absolute"
      />
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex gap-10 w-full justify-center grow`}
      >
        {NAVBAR_OPTIONS.map((option, index) => (
          <NavbarOption option={option} key={index} />
        ))}
      </div>
      <div className="hidden md:flex absolute right-0 h-full justify-center items-center">
        <DownloadResume />
      </div>
    </div>
  );
};

type NavbarOptionProps = {
  option: string;
};

const DownloadResume = () => {
  return (
    <a
      href={ResumeDaniel}
      download="DanielResume"
      target="_blank"
      rel="noreferrer"
    >
      <button className=" flex justify-center items-center  gap-[.3em] bg-white text-sm px-4 py-2 font-light rounded-[30px] text-black h-fit min-w-[200px] hover:bg-slate-200 duration-75">
        Download Resume
        <AiOutlineDownload style={{ width: "20px", height: "20px" }} />
        <span className="absolute top-2 right-2 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
        </span>
      </button>
    </a>
  );
};

const NavbarOption = ({ option }: NavbarOptionProps) => {
  return (
    <div className="relative">
      <a
        href={option}
        className="text-md  py-4 hover:cursor-pointer flex justify-center items-center before:absolute before:bottom-0 before:w-full before:h-[.5px] hover:before:bg-white before:duration-100 hover:scale-[1.02] duration-100"
      >
        {option}
      </a>
    </div>
  );
};

const BurgerMenu = ({
  ClassName,
  onClick,
}: {
  ClassName?: string;
  onClick: () => void;
}) => {
  return (
    <div
      className={`w-[35px] md:hidden h-[40px] flex flex-col gap-2 ` + ClassName}
      onClick={onClick}
    >
      <div className="w-full h-[2px] bg-white rounded-full"></div>
      <div className="w-full h-[2px] bg-white rounded-full"></div>
      <div className="w-full h-[2px] bg-white rounded-full"></div>
    </div>
  );
};

export default Navbar;

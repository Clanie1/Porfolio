import { AiOutlineDownload } from "react-icons/ai";

const Navbar = () => {
  const NAVBAR_OPTIONS = ["Home", "Projects", "About-me", "Contact"];

  return (
    <div className="w-full border-b-[0.1px] border-[#ffffff22] flex justify-center relative font-montserrat">
      <div className="flex gap-10 w-full justify-center grow">
        {NAVBAR_OPTIONS.map((option, index) => (
          <NavbarOption option={option} key={index} />
        ))}
      </div>
      <div className="absolute right-0 flex h-full justify-center items-center">
        <DownloadResume />l
      </div>
    </div>
  );
};

type NavbarOptionProps = {
  option: string;
};

const DownloadResume = () => {
  return (
    <button className=" flex justify-center items-center  gap-[.3em] bg-white text-sm px-4 py-2 font-light rounded-[30px] text-black h-fit min-w-[200px] hover:bg-slate-200 duration-75">
      Download Resume
      <AiOutlineDownload style={{ width: "20px", height: "20px" }} />
      <span className="absolute top-2 right-2 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
      </span>
    </button>
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

export default Navbar;

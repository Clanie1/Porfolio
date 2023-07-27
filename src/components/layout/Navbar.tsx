import DownloadResumeBtn from "../btns/DownloadResumeBtn";

const Navbar = () => {
  const NAVBAR_OPTIONS = ["Home", "Projects", "About-me", "Contact"];

  return (
    <div className="flex gap-6 h-fit w-full border-b-[0.1px] border-[#ffffff22] justify-between md:justify-end relative font-montserrat ">
      <div className="flex md:flex gap-4 md:gap-10 w-full justify-center grow">
        {NAVBAR_OPTIONS.map((option, index) => (
          <NavbarOption option={option} key={index} />
        ))}
      </div>
      <div className="hidden md:flex absolute right-3 h-full justify-center items-center">
        <DownloadResumeBtn />
      </div>
    </div>
  );
};

type NavbarOptionProps = {
  option: string;
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

import { ReactNode } from "react";
import TransparentBtn from "../components/btns/TransparentBtn";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { BsGearFill } from "react-icons/bs";
import meBlackWhite from "../assets/img/meBlack&White.jpeg";

// import {meBlack&White} from "./"

const AboutMe = () => {
  const ExpertiseAreas = [
    {
      title: "LeaderShip",
      icon: <BsFillPeopleFill className="text-3xl text-teal-400/80" />,
      description:
        "Inspiring others to achieve goals through vision and guidance",
    },
    {
      title: "Web developement",
      icon: <RiComputerLine className="text-3xl text-teal-400/80" />,
      description:
        "Creating interactive and user-friendly websites with modern technologies",
    },
    {
      title: "Problem solver",
      icon: <BsGearFill className="text-3xl text-teal-400/80" />,
      description:
        "Analyzing challenges and devising effective solutions through critical thinking",
    },
  ];

  return (
    <div className="w-[80%] mx-auto flex flex-col py-10">
      <div className="flex gap-5 flex-col md:flex-row ">
        <img
          src={meBlackWhite}
          className="md:w-1/2 h-[350px] border-2 object-cover object-top"
        ></img>
        <div className="border-red-200 md:w-1/2 md:max-w-[600px] p-2 px-4">
          <div className=" flex md:flex-row flex-col-reverse items-center gap-4">
            <div className="w-full h-[1px]  hidden md:flex md:max-w-[100px] bg-white" />
            <h1 className="uppercase text-3xl font-bold tracking-wider">
              About me
            </h1>
          </div>
          <div className="font-light text-center md:text-start text-sm mt-2 flex flex-col gap-2">
            <p>
              Hello, I'm Daniel Barocio, a passionate software developer with a
              special interest in creating innovative solutions. I've had the
              opportunity to work on various projects, ranging from web and
              mobile applications to complex software systems and data filtering
              🧑‍💻
            </p>
            <p>
              When I'm not coding, you can find me playing sports, exploring new
              technologies, attending tech conferences, or participating on
              local hackathons. I'm always excited to take on new challenges and
              expand my knowledge in the ever-evolving world of software
              development 🏆
            </p>
          </div>
          <div className="flex mt-10 gap-10">
            <TransparentBtn href="/contact">Contact me</TransparentBtn>
            <TransparentBtn href="/projects">My projects</TransparentBtn>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#FFFFFF88] mt-10" />
      <div className="mt-5">
        <div className="text-center md:w-[340px] m-auto flex flex-col gap-2 items-center">
          <h1 className="text-xl font-bold tracking-wider">Expertise Areas</h1>
          <label className="text-sm font-light text-[#FFFFFFCC]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            cupiditate
          </label>
        </div>
        <div className="flex flex-col md:flex-row w-full justify-between mt-10 gap-10 items-center">
          {ExpertiseAreas.map((area) => {
            return (
              <ExpertiseArea
                title={area.title}
                icon={area.icon}
                description={area.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ExpertiseArea = ({
  title,
  description,
  icon,
}: {
  title: string;
  icon: ReactNode;
  description: string;
}) => {
  return (
    <div className="flex flex-col rounded-sm border-[2px] border-[#FFFFFF22] p-6 w-full max-w-[250px] h-[200px] md:max-w-[350px] text-center items-center justify-center gap-2">
      {icon}
      <label className="uppercase tracking-wider">{title}</label>
      <p className="text-sm font-light text-[#FFFFFFBB]">{description}</p>
    </div>
  );
};

export default AboutMe;

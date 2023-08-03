import PROJECTS from "../data/projects";
import { ReactNode, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import WhiteBtn from "../components/btns/WhiteBtn";
import TransparentBtn from "../components/btns/TransparentBtn";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <div className="w-full h-full m-auto flex flex-col">
      {/* content */}
      <div className="w-full max-w-[1300px] h-full m-auto">
        <ProjectDisplay project={PROJECTS[selectedProjectIndex]} />
      </div>
      {/* low bar */}
      <div className="border-y-[1px] border-[#ffffff22] w-full h-[100px] flex overflow-scroll">
        {PROJECTS.map((project, index) => {
          return (
            <DownBarBtn
              project={project}
              key={index}
              onClick={() => setSelectedProjectIndex(index)}
              selected={index == selectedProjectIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

const DownBarBtn = ({ project, selected, onClick }: any) => {
  return (
    <div
      className={`border-r-[0.1px] bg-background text-md border-[#ffffff22] p-4 flex items-center justify-center md:aspect-[20/9] h-full  hover:cursor-pointer duration-100 text-center ${
        selected
          ? "bg-white text-black font-bold md:aspect-[30/9] aspect-[10/5]"
          : " hover:bg-slate-800"
      }`}
      onClick={onClick}
    >
      {project.title}
    </div>
  );
};

const ProjectDisplay = ({ project }: any) => {
  return (
    <div className="md:p-6 py-6 flex flex-col md:h-full border-">
      <div className="flex flex-col-reverse md:flex-row w-full px-10 h-1/2 md:max-h-[400px] gap-5">
        <div className="h-full flex flex-col py-6 text-center md:text-start">
          <div className="flex flex-col gap-2">
            <div className="flex md:items-end items-center gap-2 flex-col md:flex-row">
              <label className="text-5xl font-bold">{project.title}</label>
              <div className="rounded-full px-4 py-[3px] animate-fade-left font-light h-fit bg-[#343941] flex justify-center items-center whitespace-nowrap w-fit">
                {project.date}
              </div>
            </div>
            <label className="text-md text-slate-200">{project.subtitle}</label>
          </div>

          <div className="mt-3">
            <p className="text-sm font-light">{project.text}</p>
          </div>
        </div>
        <img
          src={project.img}
          className="rounded-lg w-full md:w-1/2 object-cover"
          alt=""
        />
        {/* technologies */}
      </div>

      <div className="w-full h-[1px] bg-[#ffffff22] md:my-10 my-4" />
      <div className="flex flex-col md:flex-row px-6 items-center text-center">
        <div className="md:w-1/2">
          <label className="text-lg text-slate-200">Technologies Used</label>
          <div className="flex gap-2 mt-2 flex-wrap justify-center md:justify-start">
            {project.technologies.map((tech: string, index: number) => {
              return <Badge key={index}>{tech}</Badge>;
            })}
          </div>
        </div>
        <div className="md:w-1/2 w-full mt-10 md:m-0">
          <div className="flex md:gap-5 gap-2 justify-center ">
            <TransparentBtn href="#">
              FindMe.com
              <IoIosArrowForward className="w-5 h-5" />
            </TransparentBtn>
            <WhiteBtn href={project.github}>
              Github Repository
              <IoIosArrowForward className="w-5 h-5" />
            </WhiteBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 w-fit">
      {children}
    </div>
  );
};

export default Projects;

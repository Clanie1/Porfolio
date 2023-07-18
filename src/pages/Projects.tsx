import PROJECTS from "../data/projects";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <div className="w-full h-full m-auto flex flex-col">
      {/* content */}
      <div className="w-full h-full">
        <ProjectDisplay project={PROJECTS[selectedProjectIndex]} />
      </div>
      {/* low bar */}
      <div className="border-y-[1px] border-[#ffffff22] w-full h-[100px] flex">
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
      className={`border-r-[0.1px] text-md border-[#ffffff22] p-4 flex items-center justify-center aspect-[20/9] h-full  hover:cursor-pointer duration-100 ${
        selected
          ? "bg-white text-black font-bold aspect-[30/9]"
          : " hover:bg-slate-800"
      }`}
      onClick={onClick}
    >
      {project.title}
    </div>
  );
};

const ProjectDisplay = ({ project }: any) => (
  <div className="border- h-full p-6 flex">
    <div className="flex flex-col w-1/2 px-10 ">
      <div className="flex flex-col gap-2">
        <div className="flex items-end gap-2">
          <label className="text-5xl font-bold">{project.title}</label>
          <div className="rounded-full px-4 py-[3px] animate-fade-left font-light h-fit bg-[#343941] flex justify-center items-center whitespace-nowrap">
            {project.date}
          </div>
        </div>
        <label className="text-md text-slate-200">{project.subtitle}</label>
      </div>

      <div className="mt-3">
        <p className="text-sm font-light">{project.text}</p>
      </div>
      <div className="w-full h-[1px] bg-[#ffffff22] my-10" />
      {/* technologies */}
      <div>
        <label className="text-lg text-slate-200">Technologies Used</label>
      </div>
    </div>
    <div className="w-1/2 px-10 flex flex-col">
      <img src={project.img} className="rounded-lg" alt="" />
      <div className="w-5/6 mt-10 mx-auto flex justify-around">
        <button className="border-[1px] border-white w-[200px] py-4 flex justify-center items-center">
          FindMe.com
          <IoIosArrowForward className="w-5 h-5" />
        </button>
        <button className="bg-white w-[200px] py-4 text-black flex justify-center items-center">
          Github Repository
          <IoIosArrowForward className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

export default Projects;

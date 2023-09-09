import { AiOutlineDownload } from "react-icons/ai";
import ResumeDaniel from "../../assets/resume/Resume Daniel 2023.pdf";

const DownloadResumeBtn = () => {
  return (
    <a
      href={ResumeDaniel}
      download="DanielResume"
      target="_blank"
      rel="noreferrer"
    >
      <button className="relative flex justify-center items-center  gap-[.3em] bg-white text-sm px-4 py-2 font-light rounded-[30px] text-black h-fit min-w-[200px] hover:bg-slate-200 duration-75">
        Download Resume
        <AiOutlineDownload style={{ width: "20px", height: "20px" }} />
        <span className="absolute top-0 right-0 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
        </span>
      </button>
    </a>
  );
};

export default DownloadResumeBtn;

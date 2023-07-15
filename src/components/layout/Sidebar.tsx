import { CiFacebook } from "react-icons/ci";

const SideBar = () => {
  return (
    <div className="border-r-[0.5px] px-4 py-4 flex flex-col gap-10 border-[#ffffff22]">
      <a href="#">
        <CiFacebook style={{ width: "30px", height: "30px" }} />
      </a>
      <a href="#">
        <CiFacebook style={{ width: "30px", height: "30px" }} />
      </a>
      <a href="#">
        <CiFacebook style={{ width: "30px", height: "30px" }} />
      </a>
      <a href="#">
        <CiFacebook style={{ width: "30px", height: "30px" }} />
      </a>
    </div>
  );
};

export default SideBar;

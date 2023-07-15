import Navbar from "./Navbar";
import SideBar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-background text-white h-screen w-screen flex flex-col">
      <Navbar />
      <div className="h-full flex">
        <SideBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

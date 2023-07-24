import Navbar from "./Navbar";
import SideBar from "./Sidebar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-background text-white h-screen w-screen flex flex-col">
      <Navbar />
      <div className="md:h-full flex w-full font-montserrat">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;

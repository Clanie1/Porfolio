import me from "../assets/img/me1.png";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row w-5/6 m-auto items-center h-full md: md:justify-center gap-8 md:gap-2 md:p-2">
      <div className="flex flex-col md:w-1/4 mt-8 md:mt-0 border-">
        <label className="text-4xl text-center">Hi! I'm Daniel BAROCIO</label>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <label className="text-md flex-grow whitespace-nowrap">
            And I am a fullstack developer
          </label>
          <div className="w-full h-[2px] bg-white" />
        </div>
      </div>
      <img src={me} className="object-cover md:w-1/2 border-" />
      <div className="flex md:flex-col w-1/4 border- text-right font-montserrat gap-4">
        <h1>first thing</h1>
        <h1>second thing</h1>
      </div>
    </div>
  );
};

export default Home;

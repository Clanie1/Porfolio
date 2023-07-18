import me from "../assets/img/me2.png";

const Home = () => {
  return (
    <div className="flex w-5/6 m-auto items-center justify-center border- p-4">
      <div className="flex flex-col w-1/4 border-">
        <label className="text-4xl">Hi! I'm Daniel BAROCIO</label>
        <div className="flex items-center gap-2">
          <label className="text-md flex-grow whitespace-nowrap">
            And I am a fullstack developer
          </label>
          <div className="w-full h-[2px] bg-white" />
        </div>
      </div>
      <img src={me} className="object-cover w-1/2  border-" />
      <div className="flex flex-col w-1/4 border- text-right font-montserrat">
        <h1>first thing</h1>
        <h1>second thing</h1>
      </div>
    </div>
  );
};

export default Home;

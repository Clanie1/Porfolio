import { ReactNode } from "react";

const WhiteBtn = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a href={href}>
      <button className="bg-white md:w-[200px] py-4 px-4 text-black flex justify-center items-center">
        {children}
      </button>
    </a>
  );
};

export default WhiteBtn;

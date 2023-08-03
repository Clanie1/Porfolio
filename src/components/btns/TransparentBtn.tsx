import { ReactNode } from "react";

const TransparentBtn = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a href={href}>
      <button className="border-[1px] border-white md:w-[200px] px-4 py-4 flex justify-center items-center hover:bg-slate-800 duration-75">
        {children}
      </button>
    </a>
  );
};

export default TransparentBtn;

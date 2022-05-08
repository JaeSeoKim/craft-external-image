import React from "react";

const Card: React.FC<
  React.PropsWithChildren<{
    title: string;
  }>
> = ({ title, children }) => {
  return (
    <div
      className="group transition-transform ease-in-out duration-300 flex flex-col gap-4 rounded-lg shadow-md dark:shadow-zinc-100/10  p-4 hover:scale-[101%]"
      onClick={() => {
        console.log("test");
        console.warn("test");
        console.error("test");
      }}
    >
      <h1 className="flex justify-between text-craftBody font-semibold">
        <p>{title}</p>
        <p className="transition-opacity ease-in-out duration-300 opacity-50 group-hover:opacity-100 select-none">
          →
        </p>
      </h1>
      <div className="text-craftSmall">{children}</div>
    </div>
  );
};

export default Card;
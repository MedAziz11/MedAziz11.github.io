import React from "react";

const Navitem = ({ title, id, cuurent }) => {
  return (
    <div className="ml-6 pb-5">
      <div className="flex items-center justify-end">
        <div className="sm:w-10 border-b-4 border-solid border-white w-5 "></div>
        <h1 className="sm:ml-3 sm:text-xs font-bold ml-1">{id}</h1>
      </div>
      <div className="text-right text-xs">{title}</div>
    </div>
  );
};

export default Navitem;

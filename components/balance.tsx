import type { NextPage } from "next";
import ConvertButton from "./convert-button";

const Balance: NextPage = () => {
  return (
    <div className="absolute h-[24.61%] w-[83.31%] top-[67.58%] right-[6.93%] bottom-[7.81%] left-[9.76%] text-left text-base text-gray-100 font-inter">
      <div className="absolute h-[78.14%] w-[99.88%] top-[21.86%] right-[0.06%] bottom-[0%] left-[0.06%] rounded-[12px] bg-gray-300 shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)]">
        <ConvertButton />
      </div>

      <div className="absolute top-[-0.5px] left-[-0.5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] border-t-[1px_solid_#2b303b] box-border w-[530px] h-[1px]" />
    </div>
  );
};

export default Balance;

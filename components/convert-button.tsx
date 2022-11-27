import type { NextPage } from "next";

const ConvertButton: NextPage = () => {
  return (
    <button
      className="cursor-pointer [border:none] p-[0] bg-gray-400 absolute top-[413px] left-[380px] rounded-[18px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[144px] h-[38px]"
      autoFocus
    >
      <label className="absolute top-[7px] left-[18px] text-sm font-inter text-gray-100 text-center flex items-center justify-center w-[108px] h-[24px]">
        Convert to Eth
      </label>
    </button>
  );
};

export default ConvertButton;

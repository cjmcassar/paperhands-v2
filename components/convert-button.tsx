import type { NextPage } from "next";

const ConvertButton: NextPage = () => {
  return (
    <button
      className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[413px] left-[380px] rounded-[10px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[144px] h-[38px]"
      autoFocus
    >
      <button
        className="cursor-pointer [border:none] p-[0] bg-gray-400 absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[18px]"
        autoFocus
      />
      <label className="absolute top-[7px] left-[18px] text-sm font-inter text-gray-100 text-center flex items-center justify-center w-[108px] h-[24px]">
        Convert to Eth
      </label>
    </button>
  );
};

export default ConvertButton;

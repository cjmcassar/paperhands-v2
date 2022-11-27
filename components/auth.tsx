import type { NextPage } from "next";

const Auth: NextPage = () => {
  return (
    <button
      className="cursor-pointer [border:none] p-[0] bg-gray-400 rounded-[18px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[144px] h-[38px] active:animate-[1s_ease_0s_1_normal_none_jello-horizontal] active:opacity-[1] flex justify-around "
      autoFocus
    >
      <p className="text-sm font-inter text-gray-100 py-[3px]">
        0x664.....5de473bc
      </p>
      <img
        className="w-[33px] h-[33px] object-cover py-[6px]"
        alt=""
        src="../ellipse-1@2x.png"
      />
    </button>
  );
};

export default Auth;

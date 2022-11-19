import type { NextPage } from "next";

const Auth: NextPage = () => {
  return (
    <button
      className="cursor-pointer [border:none] p-[0] bg-gray-400 absolute top-[35px] left-[877px] rounded-[18px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[144px] h-[38px] active:animate-[1s_ease_0s_1_normal_none_jello-horizontal] active:opacity-[1]"
      autoFocus
    >
      <p className="m-[0] absolute top-[7px] left-[0px] text-sm font-inter text-gray-100 text-center flex items-center justify-center w-[108px] h-[24px]">
        0x664.....5de473bc
      </p>
      <img
        className="absolute top-[6px] left-[106px] w-[33px] h-[33px] object-cover"
        alt=""
        src="../ellipse-1@2x.png"
      />
    </button>
  );
};

export default Auth;

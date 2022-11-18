import type { NextPage } from "next";

const DarkModeButton: NextPage = () => {
  return (
    <button
      className="cursor-pointer [border:none] p-[0] bg-[transparent] absolute top-[39px] left-[1032px] w-[28px] h-[28px] lg:active:animate-[1s_ease_0s_1_normal_none_jello-horizontal] lg:active:opacity-[1]"
      autoFocus
    >
      <img
        className="absolute top-[1px] left-[1px] w-[26px] h-[26px] overflow-hidden"
        alt=""
        src="../akariconssunfill.svg"
      />
      <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../ellipse-2.svg"
      />
    </button>
  );
};

export default DarkModeButton;

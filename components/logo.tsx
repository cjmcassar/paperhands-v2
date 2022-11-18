import type { NextPage } from "next";

const Logo: NextPage = () => {
  return (
    <a
      className="[text-decoration:none] absolute top-[39px] left-[40px] w-[227px] h-[48px] text-left text-lg text-gray-100 font-inter"
      href="https://paperhands.vercel.app/"
    >
      <div className="absolute top-[62.5%] left-[0%] inline-block">
        Powered by 0x
      </div>
      <div className="absolute top-[0%] left-[0%] text-2xl inline-block">
        PaperHands 🤲📃🤲
      </div>
    </a>
  );
};

export default Logo;

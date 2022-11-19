import type { NextPage } from "next";
import Logo from "../components/logo";
import Auth from "../components/auth";
import DarkModeButton from "../components/dark-mode-button";
import App from "../components/app";

const Desktop1: NextPage = () => {
  return (
    <div className="relative [background:linear-gradient(180deg,_#2b303b,_rgba(43,_48,_59,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[820px] overflow-hidden">
      <div>
        <Logo />
        <Auth />
        <DarkModeButton />
      </div>
      <div className="flex items-center justify-center h-screen">
        <App />
      </div>
    </div>
  );
};

export default Desktop1;

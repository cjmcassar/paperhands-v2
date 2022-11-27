import type { NextPage } from "next";
import Logo from "../components/logo";
import Auth from "../components/auth";
import DarkModeButton from "../components/dark-mode-button";
import App from "../components/app";
import React from "react";
import useSWR from "swr";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const url =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

const Desktop1: NextPage = () => {
  // use SWR to fetch data from coingecko API
  const { data, error } = useSWR(url, fetcher);

  return (
    <nav className="relative [background:linear-gradient(180deg,_#2b303b,_rgba(43,_48,_59,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full overflow-hidden  lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="flex items-center">
          <Auth />
        </div>
      </div>

      <div className="flex items-center justify-center h-screen">
        <App />
      </div>
    </nav>
  );
};

export default Desktop1;

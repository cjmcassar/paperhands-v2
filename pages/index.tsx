import type { NextPage } from "next";
import React from "react";
import Logo from "../components/logo";
import Auth from "../components/auth";
import App from "../components/app";
import initializeFirebaseClient from "../lib/initFirebase";
import useSWR from "swr";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { signInWithCustomToken } from "firebase/auth";
import { ConnectWallet, useAddress, useSDK } from "@thirdweb-dev/react";

const fetcher = (url: RequestInfo | URL) =>
  fetch(url).then((res) => res.json());

const url =
  "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";

const Desktop1: NextPage = () => {
  const address = useAddress();
  const sdk = useSDK();

  // use SWR to fetch data from coingecko API

  const { data, error } = useSWR(url, fetcher);
  if (data) {
    console.log(data);
  } else {
    console.log(error);
  }

  const { db, auth } = initializeFirebaseClient();

  async function signIn() {
    const payload = await sdk?.auth.login("paperhands.app");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ payload }),
    });

    const { token } = await res.json();

    signInWithCustomToken(auth, token).then((userCredential) => {
      const user = userCredential.user;

      const usersRef = doc(db, "users", user.uid!);

      //bug happens here
      if (!usersRef) {
        // user now exists in Firestore database
        setDoc(
          usersRef,
          {
            address: address,
            createdAt: serverTimestamp(),
          },
          { merge: true }
        );
      }
      //consolelog error
    });
  }

  return (
    <div className=" [background:linear-gradient(180deg,_#2b303b,_rgba(43,_48,_59,_0))] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full overflow-hidden  lg:px-6 py-2.5">
      <nav>
        <div className="flex flex-wrap justify-around items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex items-center">
            {/* <Auth /> */}
            <ConnectWallet />
          </div>
        </div>
      </nav>

      <div>
        {address ? (
          <button onClick={() => signIn()}>Sign in</button>
        ) : (
          <ConnectWallet />
        )}
      </div>
      <div className="flex items-center justify-center h-screen">
        <App />
      </div>
    </div>
  );
};

export default Desktop1;

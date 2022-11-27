import type { NextPage } from "next";
import AppContainer from "../components/app-container";
import Balance from "../components/balance";
import ConvertButton from "../components/convert-button";
import LiquidateAllButton from "../components/liquidate-all-button";
import AddressInfo from "../components/address-info";
import LineChart from "../components/line-chart";

const App: NextPage = () => {
  return (
    <div className="absolute rounded-[14px] w-[635px] h-[712px] text-left text-base text-gray-100 font-inter">
      <AppContainer />
      <Balance />
      <p className="m-[0] absolute h-[4.75%] w-[22.22%] top-[59.47%] left-[14.26%] text-xl text-center flex items-center justify-center">
        Your Assets
      </p>
      <ConvertButton />
      <LiquidateAllButton />
      <AddressInfo />
      <LineChart />
    </div>
  );
};

export default App;

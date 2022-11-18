import type { NextPage } from "next";

const AddressInfo: NextPage = () => {
  return (
    <div className="absolute h-[15.63%] w-[63.62%] top-[35.94%] right-[17.48%] bottom-[48.44%] left-[18.9%] text-left text-base text-gray-100 font-inter">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[12px] bg-gray-300 shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)]" />
      <p className="m-[0] absolute h-[22.35%] w-[56.68%] top-[18.82%] left-[9.5%] text-xl flex items-center">
        0xf7602a8c....8f8000cea
      </p>
      <p className="m-[0] absolute h-[17.65%] w-[31.75%] top-[48.24%] left-[9.5%] flex items-center">
        ens: gigachad.club
      </p>
      <p className="m-[0] absolute h-[17.65%] w-[27.89%] top-[72.94%] left-[9.5%] flex items-center">
        eth balance: 100
      </p>
    </div>
  );
};

export default AddressInfo;

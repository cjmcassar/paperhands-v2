import type { NextPage } from "next";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Your Assets",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 100 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 100 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const LineChart: NextPage = () => {
  return (
    <div className="absolute h-[24.22%] w-[83.31%] top-[7.81%] right-[6.93%] bottom-[67.97%] left-[9.76%] text-center text-xs text-gray-200 font-roboto">
      <div className="absolute h-full w-full rounded-[12px] bg-gray-300 shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)]">
        <Line options={options} data={data} />;
      </div>
    </div>
  );
};

export default LineChart;

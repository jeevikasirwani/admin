import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Chart,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarChartProps {
  horizontal?: boolean;
  data1: number[];
  data2: number[];
  title1: string;
  title2: string;
  bgcolor1: string;
  bgcolor2: string;
  labels?: string[];
}
export const BarChart = ({
  data1 = [],
  data2 = [],
  title1,
  title2,
  bgcolor1,
  bgcolor2,
  horizontal = false,
  labels = months,
}: BarChartProps) => {
    
  const options:ChartOptions<"bar"> = {
    responsive: true,
    indexAxis:horizontal?"y":"x",
    plugins: {
      legend: {
        display:false,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data:ChartData<"bar",number[],string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor: bgcolor1,
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bgcolor2,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

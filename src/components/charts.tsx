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
import { Bar, Doughnut } from "react-chartjs-2";
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
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title1,
        data: data1,
        backgroundColor: bgcolor1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title2,
        data: data2,
        backgroundColor: bgcolor2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

interface doughnutProps {
  labels: string[];
  data: number[];
  bgcolor: string[];
cutout?:number|string;
legends?:boolean;
offset?:number[];

}
export const DoughnutChart = ({labels,data,bgcolor,cutout,legends=true,offset}: doughnutProps) => {
  const doughnutData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets:[{}]  };
  const doughnutOption: ChartOptions<"doughnut"> = {};

  return <DoughnutChart data={doughnutData} options={doughnutOption} />;
};

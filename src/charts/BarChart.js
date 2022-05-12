import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({ repository }) {
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {},
    title: {
      display: true,
      text: "Bar Chart",
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  const labels = [
    "forks count",
    "open issues count",
    "stargazers count",
    "watchers count",
  ];

  const displayData = {
    fc: repository && repository.items[0].forks_count,
    oic: repository && repository.items[0].open_issues_count,
    sc: repository && repository.items[0].stargazers_count,
    wc: repository && repository.items[0].watchers_count,
  };

  const valuesArray = Object.values(displayData);

  const data = {
    labels,
    datasets: [
      {
        label: "Repository Counts",
        data: valuesArray.map((x) => x),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className='chart-wrapper margin-top-2rem'>
      {" "}
      <Bar data={data} height={400} options={options} />
    </div>
  );
}

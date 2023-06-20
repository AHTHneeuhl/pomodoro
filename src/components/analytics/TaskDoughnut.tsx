"use client";

import { ArcElement, Chart, ChartData, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["In Progress", "Pending", "Completed"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 7, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function TaskDoughnut() {
  return <Doughnut data={data} />;
}

export default TaskDoughnut;

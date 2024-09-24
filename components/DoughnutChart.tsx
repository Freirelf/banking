"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
      datasets: [
        {
          label: "Bancos",
          data: [1250, 2500, 3750],
          backgroundColor: ["#fa660a", "#e65a09", "#ff9745"],
        }
      ],
      labels: ["Banco 1", "Banco 2", "Banco 3"],
    };

   return <Doughnut 
    data={data}
    options={{
      cutout: "60%",
      plugins: {
        legend: {
          display: false
        }
      }
    }}
   />
}

export default DoughnutChart
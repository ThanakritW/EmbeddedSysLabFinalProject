import { useEffect, useState } from "react";
import { Chart } from "./chart";

const lineOptions = {
  scales: {
    y: {
      min: 0,
      max: 100,
    },
  },
};

const data = {
  labels: [
    "0",
    "5",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
    "60",
  ],
  datasets: [
    {
      label: "PM2.5",
      data: [50, 60, 10.1, 30],
      fill: true,
      backgroundColor: "rgb(113, 204, 0, 0.3)",
      borderColor: "rgb(113, 204, 0)",
      pointBackgroundColor: "#71cc00",
      pointBorderColor: "#71cc00",
    },
  ],
};

export function LightChart() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setData();
  //   };
  //   fetchData();
  // }, []);
  return (
    <Chart title={"Light (60 sec)"} lineOptions={lineOptions} data={data} />
  );
}

import { useEffect, useState } from "react";
import { Chart } from "./chart";
import { getLight } from "../services/lights";

const lineOptions = {
  scales: {
    y: {
      min: 0,
      max: 100,
      title: {
        display: true,
        text: "Light%"
      }
    },
    x: {
      title: {
        display: true,
        text: "Time Passed (sec)"
      }
    }
  },
};

const rawData = {
  labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60"],
  datasets: [
    {
      label: "Light",
      data: [5, 10, 15, 20, 25, 30, 35, 40],
      fill: true,
      backgroundColor: "rgb(113, 204, 0, 0.3)",
      borderColor: "rgb(113, 204, 0)",
      pointBackgroundColor: "#71cc00",
      pointBorderColor: "#71cc00",
    },
  ],
};

const FETCH_INTERVAL = 3000;

// TODO: fix chart not update on fetch new data
export function LightChart() {
  const [data, setData] = useState(rawData);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getLight();
      setData((prev) => {
        const newData = JSON.parse(JSON.stringify(prev));
        newData.datasets[0].data = res.map((item) => item.value);
        return newData;
      });
      setCount((count) => count + 1);
    };
    fetchData();
    const interval = setInterval(fetchData, FETCH_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Chart title={`Light (60 sec)/ ${count}`} lineOptions={lineOptions} data={data} />
  );
}

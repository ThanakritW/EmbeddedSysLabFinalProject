import { useEffect, useState } from "react";
import { Chart } from "./chart";
import { getPassage } from "../services/passage";

const lineOptions = {
  scales: {
    y: {
      min: 0,
      max: 60,
      title: {
        display: true,
        text: "Person Count"
      }
    },
    x: {
      title: {
        display: true,
        text: "Time Passed (min)"
      }
    }
  },
};

const rawData = {
  labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",],
  datasets: [
    {
      label: "Count",
      data: [],
      fill: true,
      backgroundColor: "rgb(113, 204, 0, 0.3)",
      borderColor: "rgb(113, 204, 0)",
      pointBackgroundColor: "#71cc00",
      pointBorderColor: "#71cc00",
    },
  ],
};

const FETCH_INTERVAL = 3000;

export function PassageChart() {
  const [data, setData] = useState(rawData);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getPassage();
      setData((prev) => {
        const newData = JSON.parse(JSON.stringify(prev));
        newData.datasets[0].data = res.map((item) => item.value);
        return newData;
      });
    };
    fetchData();
    const interval = setInterval(fetchData, FETCH_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Chart title={"Count (60 minutes)"} lineOptions={lineOptions} data={data} />
  );
}

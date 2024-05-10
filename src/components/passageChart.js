import { useEffect, useState } from "react";
import { Chart } from "./chart";

const lineOptions = {
  scales: {
    y: {
      min: 0,
      max: 60,
    },
  },
};

const data = {
  labels: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
  ],
  datasets: [
    {
      label: "PM2.5",
      data: [
        20.9, 18, 17, 17.5, 20.1, 24.8, 29.7, 31.3, 26.6, 19, 15, 14, 14, 16,
        20, 24.9, 21.9, 13, 10, 11, 11.9, 14, 14, 14,
      ],
      fill: true,
      backgroundColor: "rgb(113, 204, 0, 0.3)",
      borderColor: "rgb(113, 204, 0)",
      pointBackgroundColor: "#71cc00",
      pointBorderColor: "#71cc00",
    },
  ],
};

const title = "Count (60 minutes)";

export function PassageChart() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setData();
  //   };
  //   fetchData();
  // }, []);
  return <Chart title={title} lineOptions={lineOptions} data={data} />;
}

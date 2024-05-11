import { Line } from "react-chartjs-2";
import "chart.js/auto";

/**
 * @typedef ChartProps
 * @property {string} title
 * @property {object[]} data
 * @property {object} lineOptions
 * @property {boolean} enable
 */

/**
 *
 * @param {ChartProps} param0
 * @returns
 */
export function Chart({ title, data, lineOptions, enable, toggleHandler }) {
  console.log(`Chart ${title} rerender with data`);
  console.log(data);
  return (
    <div className="chart-area">
      <div className="chart-header">
        <h2 className="chart-title">{title}</h2>
        <button className="chart-toggler" onClick={toggleHandler}>{enable ? "เปิด" : "ปิด"}</button>
      </div>
      <hr className="chart-title-line" />
      <Line options={lineOptions} data={data} />
    </div>
  );
}

import { Line } from "react-chartjs-2";

/**
 * @typedef ChartProps
 * @property {string} title
 * @property {object[]} data
 * @property {object} lineOptions
 */

/**
 *
 * @param {ChartProps} param0
 * @returns
 */
export function Chart({ title, data, lineOptions }) {
  return (
    <div className="chart-area">
      <h2 className="chart-title">{title}</h2>
      <hr className="chart-title-line" />
      <Line options={lineOptions} data={data} />
    </div>
  );
}

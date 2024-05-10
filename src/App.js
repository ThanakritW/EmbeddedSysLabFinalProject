import logo from "./logo.svg";
import { Chart as ChartJS, Ticks } from "chart.js/auto";
import { Line, labels, datasets } from "react-chartjs-2";
import "./App.css";
import { LightChart } from "./components/lightChart";
import { PassageChart } from "./components/passageChart";

function App() {
  const now = new Date();
  return (
    <div>
      <div className="navbar">
        <h1 className="navbar-title">Embedded System Laboratory</h1>
        <div className="navbar-items">
          <h1 className="navbar-item">
            {now.toLocaleDateString()} {now.toLocaleTimeString()}
          </h1>
        </div>
      </div>
      <div className="banner">
        <h1 className="banner-title">กรุงเทพฯ ต้องสว่าง</h1>
        <div>
          <h1 className="badge">ปลอดภัยดี</h1>
        </div>
      </div>
      <div className="canvas">
        <LightChart />

        <PassageChart />
      </div>
    </div>
  );
}

export default App;

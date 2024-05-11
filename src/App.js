import "./App.css";
import { LightChart } from "./components/lightChart";
import { Navbar } from "./components/navbar";
import { PassageChart } from "./components/passageChart";

function App() {
  return (
    <div>
      <Navbar />
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

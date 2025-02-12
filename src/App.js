import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GenderChart from "./page/data";
import BloodPieChart from "./page/blood";
import GenderPieChart from "./page/blood2";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenderChart />} />
        <Route path="/blood" element={<BloodPieChart />} />
        <Route path="/blood2" element={<GenderPieChart />} />
      </Routes>
    </Router>
  );
}

export default App;

import TopNav from "./TopNav";
import { Route, Routes, Link } from "react-router-dom";
// #efd9b4, #d6a692, #a39081, #4d6160, #292522
import Home from "./Home";
import Progress from "./Progress";
import Analytics from "./Analytics";
import Schedule from "./Schedule";
export default function App() {
  return (
    <div>
      <TopNav></TopNav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/progress" element={<Progress />} />
        <Route exact path="/schedule" element={<Schedule />} />
        <Route exact path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

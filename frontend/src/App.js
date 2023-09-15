import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Landing, QRGenerator } from "./pages";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/QRGenerator" element={<QRGenerator />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Home,
  Landing,
  QRGenerator,
  Track,
  ManageInventory,
  Login,
} from "./pages";

function App() {
  const hexImage = [
    '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'
  ];

  return (
    <>
      <div className="App bg-background">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard/Login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/QRGenerator" element={<QRGenerator hexImages={hexImage} />} />
              <Route path="/dashboard/Track" element={<Track />} />
              <Route path="/dashboard/Home" element={<Home />} />
              <Route
                path="/dashboard/ManageInventory"
                element={<ManageInventory />}
              />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

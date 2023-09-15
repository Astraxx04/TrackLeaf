import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Home,
  Landing,
  QRGenerator,
  Track,
  ManageInventory,
} from "./pages";

function App() {
  return (
    <>
      <div className="App bg-background">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/QRGenerator" element={<QRGenerator />} />
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

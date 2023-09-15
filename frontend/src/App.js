import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Home,
  Landing,
  QRGenerator,
  TrackDashboard,
  ManageInventory,
  Login,
  AddItem,
  UpdateItem,
  Register,
  DeleteItem,
  Tracker,
  Chart
} from "./pages";

function App() {
  return (
    <>
      <div className="App bg-background">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/chart" element={<Chart />} />
            <Route path="/dashboard/Login" element={<Login />} />
            <Route path="/dashboard/Register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="/dashboard/QRGenerator" element={<QRGenerator />} />
              <Route path="/dashboard/Track" element={<TrackDashboard />} />
              <Route path="/dashboard/Home" element={<Home />} />
              <Route
                path="/dashboard/ManageInventory"
                element={<ManageInventory />}
              />
            </Route>
          </Routes>
          <Routes>
            <Route path="/item/add" element={<AddItem />} />
            <Route path="/item/update" element={<UpdateItem />} />
            <Route path="/item/delete" element={<DeleteItem />} />
          </Routes>
          <Routes>
            <Route path="/tracker" element={<Tracker />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

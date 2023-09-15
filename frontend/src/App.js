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
  AddItem,
  UpdateItem,
  DeleteItem,
} from "./pages";

function App() {
  return (
    <>
      <div className="App bg-background">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard/Login" element={<Login />} />
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
          <Routes>
            <Route path="/item/add" element={<AddItem />} />
            <Route path="/item/update" element={<UpdateItem />} />
            <Route path="/item/delete" element={<DeleteItem />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import ViewStudent from "./pages/ViewStudent";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="app-wrapper">
        <div className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/edit/:id" element={<EditStudent />} />
            <Route path="/view/:id" element={<ViewStudent />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
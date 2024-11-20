import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/" exact element={<Reports />} />
          <Route path="/" exact element={<About />} />
          <Route path="/" exact element={<Contact />} />
        </Routes>
      </Router>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Box>
  );
}

export default App;

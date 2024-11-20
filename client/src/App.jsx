import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/register" exact element={<Signup />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/reports" exact element={<Reports />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";



const Routers =()=> {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        {/* Navigation Links */}
        {/* <nav>
          <Link to="/">Login</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link> |{" "}
        </nav> */}
        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;

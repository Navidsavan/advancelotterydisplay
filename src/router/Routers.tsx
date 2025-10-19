import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "../lotteryApp/pages/LoginPage";
import Dashboard from "../lotteryApp/pages/Dashboard";
import HomePage from "../web/pages/HomePage";



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
          <Route path="/" element={<Dashboard />} />
          <Route path="home/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;

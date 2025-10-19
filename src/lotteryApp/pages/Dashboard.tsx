// src/App.tsx
import React, { useState } from "react";
import UserDashboard from "../userDashboard/pages/UserDashboard";
import AdminDashboard from "../adminDashboard/pages/AdminDashboard";
import { ThemeProvider } from "../theme/ThemeContext";

const Dashboard: React.FC = () => {
  const [view, setView] = useState<"user" | "admin">("user");

  return (
    <div>
      {/* <nav style={{ padding: "10px", display: "flex", gap: "10px" }}>
        <button onClick={() => setView("user")}>User Dashboard</button>
        <button onClick={() => setView("admin")}>Admin Dashboard</button>
      </nav> */}

      {view === "user" ? (
        <ThemeProvider >
          <UserDashboard />
        </ThemeProvider>
      ) : (
        <ThemeProvider>
          <AdminDashboard />
        </ThemeProvider>
      )}
    </div>
  );
};

export default Dashboard;

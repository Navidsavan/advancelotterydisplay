import React from "react";
import { useTheme } from "../../theme/ThemeContext";
import { type Theme } from "../../theme/theme";

const AdminDashboard: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const currentTheme: Theme = theme; // theme is already the object

  return (
    <div
      style={{
        background: currentTheme.background,
        color: currentTheme.text,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Admin Dashboard</h1>
      <button
        onClick={toggleTheme}
        style={{
          background: currentTheme.background,
          color: currentTheme.text,
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default AdminDashboard;

import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import TicketInventory from "../components/ticketInventory/TicketInventory";
import ShowTickets from "../components/showTickets/ShowTickets";
import Card from "../components/card/Card";
import { ThemeProvider } from "../../theme/ThemeContext";
import HomePage from "./sidebarPages/HomePage";


const UserDashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activePage, setActivePage] = useState("home"); // ✅ Track current tab

  // ✅ Render content based on active tab
  const renderContent = () => {
    switch (activePage) {
      case "home":
        return <HomePage />;
      case "dashboard":
        return <TicketInventory />;
      case "lottery":
        return <ShowTickets />;
      case "sales":
        return <div>Sales Content</div>;
      case "reports":
        return <div>Reports Content</div>;
      case "users":
        return <div>Users Content</div>;
      default:
        return <div>Welcome to Lottery Display</div>;
    }
  };

  return (
    <ThemeProvider storageKey="userTheme">
      <div className="app-layout">
        {/* ✅ Sidebar on left */}
        <Sidebar
          collapsed={collapsed}
          onSelect={setActivePage}
          active={activePage}
        />

        {/* ✅ Main content on right */}
        <main className="content">
          <Topbar />
          <div className="page-content">{renderContent()}</div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default UserDashboard;

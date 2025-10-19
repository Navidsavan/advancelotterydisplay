import React, { useState, useEffect } from "react";
import { useTheme } from "../../../theme/ThemeContext";
import {
  FaRegSun,
  FaMoon,
  FaUserCircle,
  FaExpand,
  FaCompress,
  FaWifi,
} from "react-icons/fa";
import { MdWifiOff } from "react-icons/md"; // ✅ use Material Design's Wi-Fi off icon
import "../../styles/Topbar.css";

export const Topbar: React.FC<{ title?: string }> = ({ title = "Dashboard" }) => {
  const { themeName, theme, toggleTheme } = useTheme();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <header
      className="topbar"
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* Left Section */}
      <div className="topbar-left">
        <h2 className="topbar-title">{title}</h2>
      </div>

      {/* Right Section */}
      <div className="topbar-right">
        {/* Internet Connectivity */}
        <div
          className="icon-btn"
          title={isOnline ? "Online" : "Offline"}
          style={{ color: isOnline ? "limegreen" : "red" }}
        >
          {isOnline ? <FaWifi /> : <MdWifiOff />}
        </div>

        {/* Theme toggle */}
        <button
          className="icon-btn"
          onClick={toggleTheme}
          title="Toggle Theme"
          style={{ color: theme.iconColor }}
        >
          {themeName === "light" ? <FaMoon /> : <FaRegSun />}
        </button>

        {/* Fullscreen toggle */}
        <button
          className="icon-btn"
          onClick={handleFullscreen}
          title="Toggle Fullscreen"
          style={{ color: theme.iconColor }}
        >
          {isFullscreen ? <FaCompress /> : <FaExpand />}
        </button>

        {/* User icon */}
        <div className="user-avatar" title="Profile" style={{ color: theme.iconColor }}>
          <FaUserCircle />
        </div>
      </div>
    </header>
  );
};

export default Topbar;

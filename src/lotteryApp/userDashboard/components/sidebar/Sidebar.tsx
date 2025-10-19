import React from "react";
import clsx from "clsx";
import {
  FaHome,
  FaChartBar,
  FaTicketAlt,
  FaMoneyBill,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";
import { useTheme } from "../../../theme/ThemeContext"; 
import "../../styles/Sidebar.css";

interface Item {
  key: string;
  label: string;
  icon: React.ReactNode;
}

const items: Item[] = [
  { key: "home", label: "Home", icon: <FaHome /> },
  { key: "dashboard", label: "Dashboard", icon: <FaChartBar /> },
  { key: "lottery", label: "Lottery", icon: <FaTicketAlt /> },
  { key: "sales", label: "Sales", icon: <FaMoneyBill /> },
  { key: "reports", label: "Reports", icon: <FaClipboardList /> },
  { key: "users", label: "Users", icon: <FaUsers /> },
];

export const Sidebar: React.FC<{
  collapsed?: boolean;
  onSelect?: (k: string) => void;
  active?: string;
}> = ({ collapsed = false, onSelect, active = "home" }) => {
  const { theme } = useTheme();

  return (
    <aside
      className={clsx("sidebar", { collapsed })}
      style={{
        backgroundColor: theme.background,
        color: theme.text,
      }}
    >
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-icon" style={{ color: theme.iconColor }} />
        {!collapsed && (
          <div className="sidebar-title" style={{ color: theme.text }}>
            Lottery Display
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="sidebar-menu">
        {items.map((i) => {
          const isActive = active === i.key;

          return (
            <div
              key={i.key}
              className={clsx("sidebar-item", { active: isActive })}
              onClick={() => onSelect?.(i.key)}
              style={{
                color: isActive ? theme.activeText : theme.text,
              }}
            >
              <div
                className="sidebar-item-icon"
                style={{
                  color: isActive ? theme.activeIcon : theme.iconColor,
                }}
              >
                {i.icon}
              </div>
              {!collapsed && (
                <div
                  className="sidebar-item-label"
                  style={{ color: isActive ? theme.activeText : theme.text }}
                >
                  {i.label}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="sidebar-footer">
          <p className="help-text" style={{ color: theme.text }}>
            Need some help?
          </p>
          <button
            className="help-button"
            style={{
              backgroundColor: theme.buttonBackground,
              color: theme.buttonText,
            }}
          >
            Help Desk
          </button>
          <p className="version" style={{ color: theme.text }}>
            Lottery Display v1.0.0
          </p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;

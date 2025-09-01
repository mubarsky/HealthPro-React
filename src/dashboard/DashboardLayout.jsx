// src/dashboard/DashboardLayout.jsx
import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import TopNav from "./components/topnav/TopNav";
import { Outlet } from "react-router-dom";
 // optional global styling for layout

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      {/* Top Navbar */}
      <TopNav />

      <div className="dashboard-body">
        {/* Sidebar */}
        <Sidebar />

        {/* Page content */}
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

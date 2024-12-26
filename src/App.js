import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Reports from "./components/Pages/Reports/ReportsPage";
import SettingsPage from "./components/Pages/Settings/SettingsPage";
import Profile from "./components/Pages/Settings/Profile/Profile";
import Logout from "./components/Pages/Settings/Logout/Logout";
import Footer from "./components/Footer/footer";
import "./App.css";

const App = () => {
  const sampleExpenses = [
    { date: "2024-01-01", category: "Food", amount: 50 },
    { date: "2024-02-15", category: "Travel", amount: 120 },
    { date: "2024-03-10", category: "Food", amount: 30 },
    { date: "2024-03-25", category: "Shopping", amount: 200 },
  ];

  // Apply theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light-mode";
    document.body.className = savedTheme;
  }, []);

  return (
    <div className="app">
      <Router  future={{
          v7_startTransition: true, // Opt into startTransition wrapping
          v7_relativeSplatPath: true, // Opt into the new splat path resolution
        }}
      >
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="reports" element={<Reports expenses={sampleExpenses} />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />
            </Route>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;


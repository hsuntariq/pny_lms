import React from "react";
import "./globals.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/teacher/dashboard/Dashboard";
import StudentDashboard from "./pages/student/dashboard/Dashboard";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

          {/* teacher routes */}

          <Route path="/teacher">
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          {/* student routes */}
          <Route path="/student">
            <Route path="dashboard" element={<StudentDashboard />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;

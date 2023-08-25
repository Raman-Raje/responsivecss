import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";

import NotFound from "./components/common/NotFound/NotFound";

// themContainer Toastify
import ToastContainerNotify from "./components/common/Toast/ToastContainerNotify";
import AboutPage from "./pages/about/AboutPage";

const App = () => {
  return (
    <>
      <ToastContainerNotify />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* not found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;

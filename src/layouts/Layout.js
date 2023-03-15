import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home/Home";
import Header from "./header/Header";

function Layout() {
  // On créé nos routes pour afficher nos pages
  return (
    <div>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/home/Home";
import Projects from "./Pages/projects/Projects";
import Contact from "./Pages/contact/Contact";
import NotFound from "./Pages/not found/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <main className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

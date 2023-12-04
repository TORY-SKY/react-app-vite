import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/ReactRouter/landingPage.tsx";
import ABOUT from "./components/ReactRouter/ABOUT.tsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/about" element={<ABOUT />}></Route>
      </Routes>
    </>
  );
}
export default App;

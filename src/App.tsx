import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/ReactRouter/landingPage.tsx";
import ABOUT from "./components/ReactRouter/ABOUT.tsx";
import HOMEPAGE from "./components/ReactRouter/HOMEPAGE.tsx";
import SignUP from "./components/ReactRouter/LoginForm.tsx";
import Context from "./components/ContextFile/Context.tsx";
import AppliPrograI from "./components/AppliPrograI.tsx";
function App() {
  return (
    <>
      <Context>
        <LandingPage />

        <Routes>
          <Route path="/" element={<HOMEPAGE />}></Route>
          <Route path="/about" element={<ABOUT />}></Route>
          <Route path="/signup" element={<SignUP />}></Route>
          <Route path="/api" element={<AppliPrograI />}></Route>
        </Routes>
      </Context>
    </>
  );
}
export default App;

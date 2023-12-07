import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/ReactRouter/landingPage.tsx";
import ABOUT from "./components/ReactRouter/ABOUT.tsx";
import HOMEPAGE from "./components/ReactRouter/HOMEPAGE.tsx";
import LoginForm from "./components/ReactRouter/LoginForm.tsx";
function App() {
  return (
    <>
      <LandingPage />
      <LoginForm />
      <Routes>
        <Route path="/" element={<HOMEPAGE />}></Route>
        <Route path="/about" element={<ABOUT />}></Route>
      </Routes>
    </>
  );
}
export default App;

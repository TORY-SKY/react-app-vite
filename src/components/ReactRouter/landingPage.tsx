import { useContext } from "react";
import { NavLink } from "react-router-dom";
import ContextAPII from "../ContextFile/THECONTEXT";
const LandingPage = () => {
  const {
    addNo,
    setaddNo,
    closeBTN,
    setCloseBTN,
    displayForm,
    setDisplayForm,
  } = useContext(ContextAPII);
  const SignupBTN = () => {
    if (displayForm == false) {
      setDisplayForm(true);
    }
  };
  return (
    <nav className=" container nav text-decoration-none mx-5 d-flex justify-content-between align-items-center">
      <NavLink to="/" className="text-decoration-none m-4">
        <h2>#VANLIFE</h2>
      </NavLink>
      <span className="">
        <NavLink to="/about" className="text-decoration-none m-4">
          About
        </NavLink>
        <NavLink to="/" className="text-decoration-none">
          VAN
        </NavLink>
        <NavLink
          to="/signup"
          className="text-decoration-none mx-3"
          onClick={SignupBTN}
        >
          Sign Up
        </NavLink>
      </span>
      <NavLink to="/api">API</NavLink>
      <NavLink to="/weather">Weather</NavLink>
    </nav>
  );
};

export default LandingPage;

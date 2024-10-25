import "../styles/App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
/** import components */
import Main from "./Main";
import Quiz from "./Quiz";
import Result from "./Result";
import { CheckUserExist } from "../helper/helper";
import PerformanceDashboard from "./PerformanceDashboard";

/** react routes */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <CheckUserExist>
        <PerformanceDashboard />
      </CheckUserExist>
    ),
  },
]);

function App() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "5px 20px", // Reduced padding
    height: "50px",
  };

  const logoStyle = {
    color: "#fff",
    fontSize: "20px", // Reduced font size
  };

  const navLinksStyle = {
    listStyle: "none",
    display: "flex",
  };

  const navLinkStyle = {
    marginLeft: "5px", // Adjusted margin
    top: "40px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    padding: "5px 10px", // Reduced padding for links
    transition: "background 0.3s",
  };
  return (
    <>
      <nav style={navbarStyle}>
        <div style={logoStyle}>PrepSaathi</div>
        <ul style={navLinksStyle}>
          <li style={navLinkStyle}>
            <a style={linkStyle} href="#home">
              Home
            </a>
          </li>
          <li style={navLinkStyle}>
            <a style={linkStyle} href="#about">
              Problems
            </a>
          </li>
          <li style={navLinkStyle}>
            <a style={linkStyle} href="#services">
              Discuss
            </a>
          </li>
          <li style={navLinkStyle}>
            <a style={linkStyle} href="#contact">
              Profile
            </a>
          </li>
        </ul>
      </nav>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

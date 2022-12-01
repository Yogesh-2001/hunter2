import React, { useContext } from "react";
import Admin from "./pages/Admin";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.js";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllDrives from "./pages/AllDrives";
import UpComingSlider from "./components/UpComingSlider";
import PersonalDetails from "./pages/PersonalDetails";
import { UserContext } from "./context/LoginContext";
import Forum from "./comment-section/Forum";
import Profile from "./pages/Profile";

const App = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/admin/*" element={<Admin />} />
          <Route
            path="/discussion"
            element={loggedInUser ? <Forum /> : <Login />}
          />
          <Route
            exact
            path="/student/login"
            element={loggedInUser ? <PersonalDetails /> : <Login />}
          />
          <Route
            path="/alldrives"
            element={loggedInUser ? <AllDrives /> : <Login />}
          />
          <Route
            path="/create-profile"
            element={loggedInUser ? <PersonalDetails /> : <Login />}
          />
          <Route path="/myprofile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

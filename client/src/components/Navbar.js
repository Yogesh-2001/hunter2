import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import "../styles/navbar.css";
import DrawerComp from "./DrawerComp";

//navbar page array
import NavList from "./NavList";
import { useContext } from "react";
import { UserContext } from "../context/LoginContext";
import { auth } from "../firebase";
const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  //Indicator control
  const [currIndicator, setIndicator] = useState();

  //responsive control
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="static" className="NavSection">
        <Toolbar className="d-flex justify-content-between">
          <Link to="/">
            <img src="/images/output-onlinepngtools.png" height={50} />
          </Link>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <div className="navbar-link">
                {loggedInUser ? (
                  ""
                ) : (
                  <Link to={"/student/login"}>Student Login</Link>
                )}
                <Link to={"/alldrives"}>All Drives</Link>
                <Link to={"/create-profile"}>create profile</Link>
                <Link to={"/discussion"}>Discussion Forum</Link>
                {loggedInUser ? (
                  <Link onClick={() => signOut(auth)}>LogOut</Link>
                ) : (
                  ""
                )}
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

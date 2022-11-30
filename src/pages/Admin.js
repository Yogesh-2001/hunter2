import { React, useState } from "react";
import SideBar from "../components/SideBar";
import "../styles/admin.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./DashBoard";
import ListOfUsers from "./ListOfUsers";
import Editor from "./Editor";
import AddNotice from './AddNotice'

const Admin = () => {
  const [barOpen, setBarOpen] = useState(false);

  return (
    <>
      <div className="main_div">
        <SideBar
          onCollapse={(barOpen) => {
            setBarOpen(barOpen);
          }}
        />
        <div className={`content ${barOpen ? "barOpen" : ""}`}>
          <Routes>
            <Route exact path="/DashBoard/" element={<DashBoard />} />
            <Route exact path="/ListOfUsers/" element={<ListOfUsers />} />
            <Route exact path="/CreateDrive/" element={<Editor />} />
            <Route exact path="/notice/" element={<AddNotice />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Admin;

import { React, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../styles/sidebar.css";
import SideBarPageList from "./SideBarPageList";

const SideBar = (props) => {
  const [barOpen, setBarOpen] = useState(false);
  const toggle = () => setBarOpen(!barOpen);

  useEffect(() => {
    props.onCollapse(barOpen);
  }, [barOpen, props]);

  return (
    <>
      <div className="sidebar" style={{ width: barOpen ? "250px" : "53px" }} >
        <div className="top_section">
          {barOpen && <h1 className="Admin-logo">Admin</h1>}
          <div className="bars">
            <FaBars className='sidebar-bar' onClick={toggle} />
          </div>
        </div>
        <section className="routes">
          {SideBarPageList.map((route) => (
            <NavLink
              activeclassname="active"
              to={route.path}
              key={route.name}
              className="sidebar-link"
            >
              <div className="icon">{route.icon}</div>
              <div className="link_text">{route.name}</div>
            </NavLink>
          ))}
        </section>
      </div>
    </>
  );
};

export default SideBar;

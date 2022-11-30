import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";
import { FaBars } from 'react-icons/fa'
import "../styles/navbar.css";
import NavList from "./NavList";

const DrawerComp = () => {
  const [drawOpen, setDrawer] = useState();
  return (
    <>
      <Drawer
        open={drawOpen}
        anchor='top'
        onClose={() => setDrawer(false)}
        sx={{ marginTop: "30px" }}
      >
        <List className="d-flex flex-column justify-content-center align-items-center">
          {NavList.map((page, index) => (
            <ListItemButton onClick={() => setDrawer(!drawOpen)} key={index}>
              <ListItemIcon>
                <ListItemText>{page.name}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>

        <Button className="NavBtn"  variant="contained">
          Login
        </Button>
      </Drawer>

      <IconButton
        onClick={() => setDrawer(!drawOpen)}
        sx={{ color: "white", marginLeft: "auto" }}
      >
        <FaBars />
      </IconButton>
    </>
  );
};

export default DrawerComp;

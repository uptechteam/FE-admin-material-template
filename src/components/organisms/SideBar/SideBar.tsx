import React, { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

import { SIDEBAR_LINKS } from "@core/constants";

import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

interface Props extends HTMLAttributes<HTMLElement> {}

const Sidebar: React.FC<Props> = () => {
  const logOut = () => {
    console.log("logOut");
  };

  return (
    <Drawer
      sx={{
        width: 200,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 200,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box component="nav">
        <List>
          {SIDEBAR_LINKS.map((link) => (
            <ListItem key={link.label} disablePadding>
              <ListItemButton>
                <Link
                  component={NavLink}
                  to={link.href}
                  color="secondary.main"
                  underline="none"
                >
                  {link.label}
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton onClick={logOut}>Log out</ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

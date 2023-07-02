import React, { useState } from "react";
import List from "@mui/material/List";

import pages from "../../../pagesConfig";
import { NavColapse } from "../NavColapse/NavColapse";
import { NavNoColapse } from "../NavNoColapse/NavNoColapse";
import { Divider } from "@mui/material";

export const NavList = ({ open, setOpen, navRoutes }) => {
  const [currentNav, setCurrentNav] = useState("");
  const { page, sub, group } = navRoutes;

  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "flex-start",
        paddingTop: "16px",
      }}
    >
      {pages.map(({ id, title, menuTitle, type, icon, children }) =>
        type === "collapse" ? (
          <NavColapse
            key={id}
            id={id}
            title={menuTitle}
            icon={icon}
            navRoutes={{ page, sub, group }}
            sidebarOpen={open}
            setSidebarOpen={setOpen}
            children={children}
            currentNav={currentNav}
            setCurrentNav={setCurrentNav}
          />
        ) : (
          <NavNoColapse
            key={id}
            id={id}
            title={menuTitle}
            icon={icon}
            open={open}
            setOpen={setOpen}
            navRoutes={{ page, sub, group }}
            url={children[0].url}
            setCurrentNav={setCurrentNav}
          />
        )
      )}
      <Divider />
    </List>
  );
};

import * as React from "react";
import { useParams } from "react-router-dom";
import { NavList } from "./NavList/NavList";

import * as SC from "./SideBar.styled";

export default function MiniDrawer({ open, setOpen }) {
  const { page, sub, group } = useParams();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <SC.Drawer
      variant="permanent"
      open={open}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <NavList open={open} setOpen={setOpen} navRoutes={{ page, sub, group }} />
    </SC.Drawer>
  );
}

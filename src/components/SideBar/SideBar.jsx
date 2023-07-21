import * as React from "react";
import { useParams } from "react-router-dom";
import { NavList } from "./NavList/NavList";
import { useSearchParams } from "react-router-dom";

import * as SC from "./SideBar.styled";

export default function MiniDrawer({ open, setOpen }) {
  const { page, sub, group } = useParams();

  return (
    <SC.Drawer
      variant="permanent"
      open={open}
      sx={{ paddingTop: { sm: "86px", lg: "0px" } }}
    >
      <NavList open={open} setOpen={setOpen} navRoutes={{ page, sub, group }} />
    </SC.Drawer>
  );
}

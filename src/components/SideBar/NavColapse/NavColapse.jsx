import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export const NavColapse = ({
  id,
  title,
  icon,
  children,
  sidebarOpen,
  setSidebarOpen,
  navRoutes,
  currentNav,
  setCurrentNav,
}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id === currentNav) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [currentNav, id]);

  const handleClick = () => {
    setOpen(!open);
    setCurrentNav(id);
  };

  return (
    <>
      <Divider />
      <ListItem key={id} disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={handleClick}
          sx={
            navRoutes.page === id
              ? {
                  backgroundColor: "#eef2f6",
                  color: "rgb(94, 53, 177)",
                  minHeight: 48,
                  justifyContent: sidebarOpen ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "12px",
                  m: 1,

                  "& .MuiTypography-root": {
                    fontWeight: "600",
                  },

                  "&& .MuiListItemIcon-root": {
                    color: "rgb(94, 53, 177)",
                  },
                }
              : {
                  minHeight: 48,
                  justifyContent: sidebarOpen ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "12px",
                  m: 1,
                }
          }
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: sidebarOpen ? 2 : "auto",
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{ opacity: sidebarOpen ? 1 : 0 }} />
          {sidebarOpen &&
            (open ? (
              <ExpandLess sx={{ fontSize: "1.4rem" }} />
            ) : (
              <ExpandMore sx={{ fontSize: "1.4rem" }} />
            ))}
        </ListItemButton>
        {sidebarOpen && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List
              sx={{ backgroundColor: "#eef2f6" }}
              component="div"
              disablePadding
            >
              {children.map(({ id: subId, title, icon, url }) => (
                <ListItemButton
                  key={subId}
                  sx={
                    navRoutes.sub === subId && navRoutes.page === id
                      ? { color: "rgb(94, 53, 177)", pl: 4 }
                      : { pl: 4 }
                  }
                  onClick={() => {
                    navigate(`${url}`);
                    setSidebarOpen(!sidebarOpen);
                  }}
                >
                  <ListItemText primary={title} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        )}
      </ListItem>
    </>
  );
};

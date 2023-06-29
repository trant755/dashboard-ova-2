import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export const NavNoColapse = ({
  id,
  icon,
  title,
  open,
  setOpen,
  url,
  navRoutes,
  setCurrentNav,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Divider />
      <ListItem key={id} disablePadding sx={{ display: "block", pt: 1, pb: 1 }}>
        <ListItemButton
          onClick={() => {
            setCurrentNav(id);
            setOpen(!open);
            navigate(`${url}`);
          }}
          sx={
            navRoutes.page === id
              ? {
                  backgroundColor: "#eef2f6",
                  color: "rgb(94, 53, 177)",
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "12px",
                  mr: 1,
                  ml: 1,

                  "& .MuiTypography-root": {
                    fontWeight: "600",
                  },
                  "&& .MuiListItemIcon-root": {
                    color: "rgb(94, 53, 177)",
                  },
                }
              : {
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: "12px",
                  mr: 1,
                  ml: 1,
                }
          }
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 2 : "auto",
              justifyContent: "center",
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
    </>
  );
};

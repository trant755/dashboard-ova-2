import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";

import * as SC from "./Header.styled";

import Fade from "@mui/material/Fade";
import { CurrentPageTitle } from "./CurrentPageTitle/CurrentPageTitle";
import { UserProfile } from "./UserProfile/UserProfile";

export default function PrimarySearchAppBar({ open, setOpen }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box
      sx={{ flexGrow: 1, height: "86px", position: "relative", zIndex: 1201 }}
    >
      <AppBar
        position="static"
        sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
      >
        <Toolbar sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row-reverse", lg: "row" },
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
              noWrap
              edge="start"
              component="div"
              sx={{
                display: { sm: `${open ? "flex" : "none"}`, lg: "flex" },
                cursor: "pointer",
                alignItems: "flex-end",
                mr: 0,
                letterSpacing: "0.4em",
                fontSize: "1.3rem",
              }}
              onClick={() => navigate("/")}
            >
              METRICA
            </Typography>
            <SC.MenuButton
              size="medium"
              aria-label="open drawer"
              sx={{ mr: 1 }}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <Fade in={open}>
                  <SC.MenuCloseIcon />
                </Fade>
              ) : (
                <Fade in={!open}>
                  <SC.MenuOpenIcon />
                </Fade>
              )}
            </SC.MenuButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <CurrentPageTitle open={open} />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              aria-describedby={"user-profile-button"}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              // onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <UserProfile
            id={"user-profile-button"}
            anchorEl={anchorEl}
            openUserProfile={handleProfileMenuOpen}
            closeUserProfile={handleMobileMenuClose}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Fade } from "@mui/material";

import * as SC from "./Header.styled";

import { CurrentPageTitle } from "./CurrentPageTitle/CurrentPageTitle";

import { ProfileNav } from "./ProfileNav/ProfileNav";

export default function PrimarySearchAppBar({ open, setOpen }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setAnchorEl(null);
  };

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
          <ProfileNav
            menuId={menuId}
            handleProfileMenuOpen={handleProfileMenuOpen}
            mobileMenuId={mobileMenuId}
            anchorEl={anchorEl}
            handleMobileMenuClose={handleMobileMenuClose}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { useState } from "react";
import { Suspense } from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Header from "../MainLayout/Header";
import SideBar from "../SideBar/SideBar";

const SharedLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header open={open} setOpen={setOpen} />
      <Box
        sx={{
          display: "flex",
          position: "relative",
          height: "calc(100% - 86px)",
        }}
      >
        <SideBar open={open} setOpen={setOpen} />
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            overflow: "scroll",
          }}
        >
          <Box
            component="main"
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              backgroundColor: "#eef2f6",
              boxShadow: "inset 0 0 10px 0px rgba(0,0,0,0.3)",
              height: "max-content",
              minHeight: "100%",
              padding: { sm: "8px", lg: "20px" },
              // marginTop: "4px",
              marginRight: { lg: "20px" },
              borderRadius: { lg: "12px" },
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
              overflow: "hidden",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SharedLayout;

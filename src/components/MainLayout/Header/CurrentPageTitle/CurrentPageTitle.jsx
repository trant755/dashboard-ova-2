import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export const CurrentPageTitle = ({ open, subMenu }) => {
  const [currentPage, setCurrentPage] = useState("");
  const { page, sub, group } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let title = "";
    let prevPage = {};
    if (page) {
      prevPage = subMenu?.find((elem) => elem.id === page);
      if (!prevPage) {
        title = "404";
        navigate("/404");
        return;
      } else {
        title = prevPage.title;
      }
    }
    if (sub) {
      prevPage = prevPage.children.find((elem) => elem.id === sub);
      if (!prevPage) {
        title = "404";
        navigate("/404");
        return;
      } else {
        title = prevPage.title;
      }
    }
    if (group) {
      prevPage = prevPage.children.find((elem) => elem.id === group);
      if (!prevPage) {
        title = "404";
        navigate("/404");
        return;
      } else {
        title = prevPage.title;
      }
    }

    setCurrentPage(title);
  }, [group, navigate, page, sub, subMenu]);

  return (
    <Box sx={{ display: { sm: `${open ? "none" : "block"}`, lg: "block" } }}>
      <Typography
        sx={{
          fontFamily: "e-Ukraine",
          fontWeight: "700",
          fontSize: { sm: "16px", lg: "20px" },
          textAlign: "center",
          color: "#000",
        }}
      >
        {currentPage}
      </Typography>
    </Box>
  );
};

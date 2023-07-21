import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { metricaPages } from "pagesConfig";

export const CurrentPageTitle = ({ open }) => {
  const [currentPage, setCurrentPage] = useState("");
  const { page, sub, group } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let title = "";
    let prevPage = {};
    if (page) {
      prevPage = metricaPages.find((elem) => elem.id === page);
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
  }, [currentPage, group, navigate, page, sub]);

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

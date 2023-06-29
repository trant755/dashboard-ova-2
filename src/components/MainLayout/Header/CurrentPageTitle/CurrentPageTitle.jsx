import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pages from "pagesConfig";

export const CurrentPageTitle = ({ open }) => {
  const [currentPage, setCurrentPage] = useState("");
  const { page, sub, group } = useParams();
  const navigate = useNavigate();

  console.log("currentPage", currentPage);

  useEffect(() => {
    let title = "";
    let prevPage = {};
    if (page) {
      prevPage = pages.find((elem) => elem.id === page);
      title = prevPage.title;
      console.log("prevPage", prevPage);
    }
    if (sub) {
      prevPage = prevPage.children.find((elem) => elem.id === sub);
      title = prevPage.title;
      console.log("title", title);
    }
    if (group) {
      prevPage = prevPage.children.find((elem) => elem.id === group);
      title = prevPage.title;
      console.log("title", title);
    }
    if (!sub && !page && !group) {
      const homePage = pages.find((elem) => elem.id === "home");
      if (!homePage) {
        title = "404";
        navigate("/404");
        return;
      }
      title = homePage.children[0].title;
      console.log("title", title);
    }

    setCurrentPage(title);
  }, [currentPage, group, navigate, page, sub]);

  return (
    <Box sx={{ display: { sm: `${open ? "none" : "block"}`, lg: "block" } }}>
      <Typography
        sx={{
          fontSize: { sm: "18px", lg: "26px" },
          textAlign: "center",
          color: "#5e35b1",
        }}
      >
        {currentPage}
      </Typography>
    </Box>
  );
};

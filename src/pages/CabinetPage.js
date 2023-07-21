import React from "react";
import { Box } from "@mui/material";

import Messages from "components/Cabinet/Messages/Messages";
import Reports from "components/Cabinet/Reports/Reports";
import Petitions from "components/Cabinet/Petitions/Petitions";

import { useOutletContext, useParams } from "react-router-dom";
import { cabinetPages } from "../pagesConfig";
import { useEffect } from "react";

export const CabinetPage = () => {
  const { page } = useParams();
  const [setSubMenu] = useOutletContext();

  useEffect(() => {
    setSubMenu(cabinetPages);
  }, [setSubMenu]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {page === "messages" && <Messages />}
      {page === "reports" && <Reports />}
      {page === "petitions" && <Petitions />}
    </Box>
  );
};

export default CabinetPage;

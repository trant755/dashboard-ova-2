import React from "react";
import { Box } from "@mui/material";

import Messages from "components/Cabinet/Messages/Messages";
import Reports from "components/Cabinet/Reports/Reports";
import Petitions from "components/Cabinet/Petitions/Petitions";

import { useOutletContext, useParams } from "react-router-dom";
import { cabinetPages } from "../pagesConfig";
import { useEffect } from "react";

export const CabinetPage = () => {
  const { sub } = useParams();

  const [setSubMenu] = useOutletContext();
  console.log("setSubMenu", setSubMenu);

  useEffect(() => {
    setSubMenu(cabinetPages);
  }, [setSubMenu]);

  console.log("cabinet");
  console.log("sub:", sub);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Cabinet Page</h1>
      <Messages />

      {sub === "messages" && <Messages />}
      {sub === "reports" && <Reports />}
      {sub === "petitions" && <Petitions />}
    </Box>
  );
};

export default CabinetPage;

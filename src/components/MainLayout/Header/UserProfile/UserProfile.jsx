import React from "react";
import { Popover, Typography, Box } from "@mui/material";

export const UserProfile = ({
  openUserProfile,
  closeUserProfile,
  id,
  anchorEl,
}) => {
  const open = Boolean(anchorEl);

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={closeUserProfile}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Box sx={{ width: "320px", p: 2 }}>
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          Василь Петрович Мацко
        </Typography>
        <Typography>Шеф</Typography>
      </Box>
    </Popover>
  );
};

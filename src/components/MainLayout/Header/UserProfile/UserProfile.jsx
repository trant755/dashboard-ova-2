import React from "react";
import { Popover, Box } from "@mui/material";
import { useSelector } from "react-redux";
import * as SC from "./UserProfile.styled";
import { selectUser } from "redux/auth/authSlice";

export const UserProfile = ({
  openUserProfile,
  closeUserProfile,
  id,
  anchorEl,
}) => {
  const open = Boolean(anchorEl);
  const user = useSelector(selectUser);
  console.log("user", user);
  if (user)
    return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closeUserProfile}
        sx={{
          "& .MuiPopover-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <SC.ProfileWrapper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <SC.UserName>
              {`${user.lastName} ${user.firstName} ${
                user.surname && user.surname
              }`}
            </SC.UserName>
            <SC.UserPosition>{user.position}</SC.UserPosition>
          </Box>
          <Box component={"ul"} sx={{ width: "100%" }}>
            <SC.UserInfoWrapper>
              <SC.InfoLabel>Телефон:</SC.InfoLabel>
              <SC.InfoText>
                {user.phone ? user.phone : "Інформація відсутня"}
              </SC.InfoText>
            </SC.UserInfoWrapper>

            <SC.UserInfoWrapper>
              <SC.InfoLabel>Пошта:</SC.InfoLabel>
              <SC.InfoText>
                {user.email ? user.email : "Інформація відсутня"}
              </SC.InfoText>
            </SC.UserInfoWrapper>

            <SC.UserInfoWrapper>
              <SC.InfoLabel>Район:</SC.InfoLabel>
              <SC.InfoText>
                {user.district ? user.district : "Інформація відсутня"}
              </SC.InfoText>
            </SC.UserInfoWrapper>
            <SC.UserInfoWrapper>
              <SC.InfoLabel>Район:</SC.InfoLabel>
              <SC.InfoText>
                {user.hromada ? user.hromada : "Інформація відсутня"}
              </SC.InfoText>
            </SC.UserInfoWrapper>
          </Box>
          <SC.LogoutButton>Вихід</SC.LogoutButton>
        </SC.ProfileWrapper>
      </Popover>
    );
};

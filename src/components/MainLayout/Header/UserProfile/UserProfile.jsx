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
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <SC.ProfileWrapper>
          <SC.UserName>
            {`${user.lastName} ${user.firstName} ${
              user.surname && user.surname
            }`}
          </SC.UserName>
          <SC.UserPosition>{user.position}</SC.UserPosition>
          <Box component={"ul"}>
            <SC.UserInfoWrapper>
              <SC.InfoLabel>Телефон:</SC.InfoLabel>
              <SC.InfoText>{user.phone}</SC.InfoText>
            </SC.UserInfoWrapper>

            <SC.UserInfoWrapper>
              <SC.InfoLabel>Електронна пошта:</SC.InfoLabel>
              <SC.InfoText>{user.email}</SC.InfoText>
            </SC.UserInfoWrapper>

            <SC.UserInfoWrapper>
              <SC.InfoLabel>Район:</SC.InfoLabel>
              <SC.InfoText>{user.district}</SC.InfoText>
            </SC.UserInfoWrapper>
            <SC.UserInfoWrapper>
              <SC.InfoLabel>Район:</SC.InfoLabel>
              <SC.InfoText>{user.hromada}</SC.InfoText>
            </SC.UserInfoWrapper>
          </Box>
          <SC.LogoutButton>Вихід</SC.LogoutButton>
        </SC.ProfileWrapper>
      </Popover>
    );
};

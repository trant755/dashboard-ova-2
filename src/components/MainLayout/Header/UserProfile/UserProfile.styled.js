import styled from "@emotion/styled";

export const ProfileWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  padding: 26px 18px;
`;

export const UserName = styled.h2``;

export const UserPosition = styled.p``;

export const UserInfoWrapper = styled.div``;

export const InfoLabel = styled.p``;

export const InfoText = styled.p``;

export const LogoutButton = styled.button`
  height: 40px;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "e-Ukraine";
  font-weight: 400;
  font-size: 14px;
  line-height: normal;
  color: #000000;
  text-align: center;

  border: 3px solid #000000;
  border-radius: 20px;

  background-color: transparent;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

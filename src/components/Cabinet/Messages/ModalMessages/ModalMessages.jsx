import { dateTransformer } from "helpers/dateTranformer";
import { Box, useMediaQuery } from "@mui/material";
import * as SC from "./ModalMessages.styled";

const ModalMessages = ({ message, onClose }) => {
  const { title, senderName, senderEmail, createdAt } = message;

  const isSmallScreen = useMediaQuery("(max-width: 767px)");

  return (
    <SC.ModalMessagesWindow
      style={{
        width: isSmallScreen ? "300px" : "704px",
        padding: isSmallScreen ? "20px 20px" : "64px 32px",
      }}
    >
      <SC.MenuButton onClick={onClose}>
        <SC.MenuCloseIcon />
      </SC.MenuButton>

      <SC.ModalTitle>{title}</SC.ModalTitle>

      <SC.SenderInfoBox>
        <Box>
          <SC.SenderTitle>{senderName}</SC.SenderTitle>
          <SC.SenderLink href={`mailto:${senderEmail}`}>
            &#60;{senderEmail}&#62;
          </SC.SenderLink>
        </Box>

        <p style={{ color: "#000", fontFamily: "e-Ukraine" }}>
          {dateTransformer(createdAt)}
        </p>
      </SC.SenderInfoBox>

      <div>
        <SC.SenderText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          accusantium adipisci animi, quae fugiat eum, eveniet autem consectetur
          ipsa nobis labore corrupti molestiae explicabo, ad delectus veniam.
          Officia quasi non eos sit excepturi quam accusamus unde, vitae eaque
          quod, totam vel nemo itaque et omnis voluptatibus deleniti. Aliquam,
          cupiditate ut?
        </SC.SenderText>
      </div>
    </SC.ModalMessagesWindow>
  );
};

export default ModalMessages;

import React from "react";
import { Stack } from "@mui/material";
import Icon from "../images/gymIcon.png";

//displays the body-parts categories
export default function BodyPart({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="button"
      className="bodyPart-card"
      alignItems="center"
      justifyContent="center"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #2C3333",
              background: "#A5C9CA",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
          : {
              background: "#A5C9CA",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
      }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1500, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src={Icon}
        alt="gym-icon"
        style={{ width: "40px", height: "40px" }}
      />
      <h3 className="bodyPart-names"> {item}</h3>
    </Stack>
  );
}

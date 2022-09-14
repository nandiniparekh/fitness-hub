import React from "react";
import { Stack } from "@mui/material";

import BodyPartImage from "../images/body-part.png";
import TargetImage from "../images/target.png";
import EquipmentImage from "../images/equipment.png";

//displays the specific information for each exercise
export default function Detail({ exerciseDetail }) {
  window.scrollTo({ top: 0, behaviour: "smooth" });
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      sx={{ flexDirection: { lg: "row" }, p: "100px", alignItems: "center" }}
      gap="60px"
      className="details"
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <h3 className="sub-title capitalize">{name}</h3>
        <h3 className="body-text">
          Exercises keep you strong.{" "}
          <span className="add-color capitalize">
            <strong>{name}</strong>
          </span>{" "}
          is one of the best exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </h3>

        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <button>
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "30px", height: "30px" }}
              />
            </button>
            <h3 className="body-text capitalize">{item.name}</h3>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

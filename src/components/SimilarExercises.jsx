import React from "react";
import { Box, Stack } from "@mui/material";

import HorizontalScrollbar from "./HorizontalBar";

//displays exercises similar to the selected one
export default function SimilarExercises({
  targetMuscleExercises,
  equipmentExercises,
}) {
  return (
    <Box className="similar-exercises" id="exercises">
      <h3 className="sub-title spacing">
        Similar <span className="add-color capitalize">Target Muscle</span>{" "}
        Exercises
      </h3>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        <HorizontalScrollbar data={targetMuscleExercises} />
      </Stack>
      <h3 className="sub-title extra-spacing">
        Similar <span className="add-color capitalize">Equipment</span>{" "}
        Exercises
      </h3>
      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        <HorizontalScrollbar data={equipmentExercises} />
      </Stack>
    </Box>
  );
}

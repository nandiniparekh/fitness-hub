import React, { useState } from "react";

import { Box } from "@mui/material";

import Introduction from "../components/Introduction";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <Introduction />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
}

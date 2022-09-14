import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

//returns the a template to display exercises based on user's
//search query
export default function ExerciseCard({ exercise }) {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        className="exercise-gif"
      />
      <Stack direction="row">
        <button className="left buttons capitalize">{exercise.bodyPart}</button>
        <button className="right buttons capitalize">{exercise.target}</button>
      </Stack>
      <h3 className="exercise-title capitalize">{exercise.name}</h3>
    </Link>
  );
}

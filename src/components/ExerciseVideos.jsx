import React from "react";
import { Box, Stack } from "@mui/material";

import PlayButton from "../images/play-button.png";

//returns videos related to the specific eercise using an API
const ExerciseVideos = ({ exerciseVideos, name }) => {
  return (
    <Box className="exercise-videos">
      <h3 className="sub-title">
        Watch <span className="add-color capitalize">{name}</span> Exercise
        Videos
      </h3>
      <Stack
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0px" } }}
      >
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={PlayButton} alt="play-button" className="play-button" />
            <img
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              className="video-picture"
            />
            <Box>
              <h3 className="video-title body-text">{item.video.title}</h3>
              <h5>{item.video.channelName}</h5>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;

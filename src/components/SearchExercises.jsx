import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";

import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalBar from "./HorizontalBar";

//creates the search bar and handles api requests
export default function SearchExercises({
  setExercises,
  bodyPart,
  setBodyPart,
}) {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <>
      <Box className="search-exercises">
        <Stack>
          <h3 className="sub-title spacing">Find what moves you</h3>
          <Stack direction="row" px="220px" className="search-bar spacing">
            <input
              type="text"
              placeholder="Search"
              name="search"
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              value={search}
            />
            <button
              type="button"
              onClick={handleSearch}
              className="search-button"
            >
              <i className="fa fa-search"></i>
            </button>
          </Stack>
        </Stack>

        <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
          <HorizontalBar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
            bodyParts={bodyParts}
          />
        </Box>
      </Box>
    </>
  );
}

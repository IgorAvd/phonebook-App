import React from "react";
import { filteredValue } from "../../redux/filter/filterSlice";
import { TextField, useMediaQuery } from "@mui/material";
import { useAppDispatch } from "../../hooks";

export const Filter = () => {
  const dispatch = useAppDispatch();
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 960px)");
  const isDesktop = useMediaQuery("(min-width: 961px)");
  const adaptiveFilter = isDesktop ? "700px" : isTablet ? "500px" : "300px";

  const handleFilterSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterValue = e.target.value.trim();
    dispatch(filteredValue(filterValue));
  };

  return (
    <div>
      <TextField
        label="Find contacts by name"
        type="text"
        name="name"
        variant="outlined"
        sx={{
          display: "flex",
          margin: "25px auto",
          width: adaptiveFilter,
        }}
        onChange={handleFilterSubmit}
      />
    </div>
  );
};

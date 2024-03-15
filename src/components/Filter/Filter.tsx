import React from "react";
import { filteredValue } from "../../redux/filter/filterSlice";
import { TextField } from "@mui/material";
import { useAppDispatch } from "../../hooks";

export const Filter = () => {
  const dispatch = useAppDispatch();
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
        }}
        onChange={handleFilterSubmit}
      />
    </div>
  );
};

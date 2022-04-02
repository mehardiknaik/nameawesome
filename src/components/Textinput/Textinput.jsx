import { TextField } from "@mui/material";
import React from "react";
import { Bubble } from "../../styles/bubble";

const Textinput = ({name, setName}) => {
  return (
    <div style={{position:"relative"}}>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        InputProps={{
          sx: {
            color: 'var(--orange)',
            background: "#aeaeae33",
            border: "none",
            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover": {
              ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                border: "2px solid #aeaeae33",
              },
            },
          },
        }}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Bubble />
    </div>
  );
};

export default Textinput;

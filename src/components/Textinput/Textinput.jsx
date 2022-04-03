import { TextField, InputBase } from "@mui/material";
import React from "react";
import { Bubble } from "../../styles/bubble";

const Textinput = ({ name, setName }) => {
  return (
    <div style={{ position: "relative" }}>
      <InputBase
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="outlined"
        sx={{
          borderRadius: "16px",
          background: "#d3d3d34a",
          padding: "10px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          color: "var(--orange)",
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

import React from "react";
import Box from "@mui/material/Box";

export default function Layout(props) {
  return (
    <Box
      sx={{
        marginTop: "90px",
        marginLeft: {
          sm: "120px",
        },
      }}
    >
      {props.children}
    </Box>
  );
}

import React from "react";
import BrightnessLow from "@mui/icons-material/BrightnessLow";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ theme, handleMobileDrawer }) {
  return (
    <div>
      <AppBar position="fixed">
        <Box
          className="header"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: { sm: "150px" },
          }}
        >
          <IconButton
            sx={{
              display: { xs: "flex", sm: "none" },
            }}
            onClick={handleMobileDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">Hello World</Typography>
          <IconButton onClick={theme}>
            <BrightnessLow />
          </IconButton>
        </Box>
      </AppBar>
    </div>
  );
}

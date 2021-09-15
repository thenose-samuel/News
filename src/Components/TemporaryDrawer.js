import React from "react";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export default function TemporaryDrawer({ isOpen, handleMobileDrawer }) {
  return (
    <div>
      <Drawer width={200} open={isOpen} variant="temporary">
        <IconButton onClick={handleMobileDrawer}>
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <MenuItem onClick={handleMobileDrawer}>Hello World</MenuItem>
        <MenuItem onClick={handleMobileDrawer}>Hello World</MenuItem>
      </Drawer>
    </div>
  );
}

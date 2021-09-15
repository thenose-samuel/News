import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
export default function PermanentDrawer() {
  return (
    <Drawer
      sx={{ display: { xs: "none", sm: "block" } }}
      width={200}
      open
      variant="permanent"
    >
      <MenuItem>Hello World</MenuItem>
      <MenuItem>Hello World</MenuItem>
    </Drawer>
  );
}

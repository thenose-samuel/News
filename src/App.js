import "./App.css";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import Navbar from "./Components/navbar";
import PermanentDrawer from "./Components/PermanentDrawer";
import Box from "@mui/system/Box";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import Home from "./Home";
import Layout from "./Components/Layout";

function App() {
  const [dark, setTheme] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const changeTheme = () => setTheme(!dark);
  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });
  const handleMobileDrawer = () => setOpen(!isOpen);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{ display: "flex" }}>
          <Navbar theme={changeTheme} handleMobileDrawer={handleMobileDrawer} />
          <PermanentDrawer />
          <TemporaryDrawer
            isOpen={isOpen}
            handleMobileDrawer={handleMobileDrawer}
          />
          <Layout>
            <Home />
          </Layout>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;

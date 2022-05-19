import { ThemeProvider } from "@emotion/react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { createTheme } from "@mui/material";
import Link from "next/link";
import React from "react";

const theme = createTheme();

const Default = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* header */}
      <AppBar position="relative">
        <Toolbar>
          <Link href={`/`}>
            <Typography
              sx={{ cursor: "pointer" }}
              variant="h6"
              color="inherit"
              noWrap
            >
              STEM Conglomerate
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>

      {children}

      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default Default;

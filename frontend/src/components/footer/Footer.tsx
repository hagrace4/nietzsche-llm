// import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Box
        width="100%"
        minHeight="20vh"
        maxHeight="30vh"
        marginTop={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          variant="contained"
          sx={{ 
            backgroundColor: "#0066ff",
            width: "250px",
            height: "40px"
          }}
          component={Link}
          to="/login"
        >
          <Typography fontWeight="bold" fontSize="20px" sx={{ textTransform: "none" }}>
            Get started!
          </Typography>
        </Button>
      </Box>
    </footer>
  );
};

export default Footer;

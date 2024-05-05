import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <Box>
          <TypingAnim />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { md: "row"},
            gap: 5,
            my: 10,
          }}
        >
          <img
            src="nietzscheportrait.jpg"
            alt="Nietzche"
            style={{ width: "200px", margin: "auto", marginRight: 0 }}
          />
          <span style={{
            fontSize: "100px",
            minHeight: "100px",
            display: "inline-flex",
            alignItems: "center" }}>+</span>
          <img
            className="rotate"
            src="openai.png"
            alt="openai"
            style={{ width: "200px", margin: "auto", marginLeft: "0" }}
          />
        </Box>
        <Box>
        <span style={{
            fontSize: "100px",
            minHeight: "100px",
            display: "inline-flex",
            alignItems: "center" }}>=</span>
        </Box>
        <Box sx={{ display: "flex", mx: "auto" }}>
          <img
            src="chat.png"
            alt="chatbot"
            style={{
              display: "flex",
              margin: "auto",
              width: isBelowMd ? "80%" : "60%",
              borderRadius: 20,
              boxShadow: "0 0 10px #000",
              marginTop: 20,
              marginBottom: 20,
              padding: 10,
            }}
          />
        </Box>
        <Box sx={{ fontSize: "30px", mx: "200px" }}>
          <p>Welcome to NietzscheGPT, where philosophy meets artificial intelligence. Powered by OpenAI, NietzscheGPT offers users to engage with the profound ideas of Friedrich Nietzsche. Whether you're a seasoned philosopher or just beginning your journey into Nietzschean thought, NietzscheGPT is here to stimulate your intellect and spark meaningful discourse.</p>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;

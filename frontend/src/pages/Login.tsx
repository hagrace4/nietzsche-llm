import React, { useEffect, useState } from "react";
import { IoIosLogIn } from "react-icons/io";
import { Box, Typography, Button, Slide, Fade } from "@mui/material";
import CustomizedInput from "../components/shared/CustomizedInput";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const quotes = [
  "“That which does not kill us makes us stronger.”",
  "“He who has a why to live can bear almost any how.”",
  "“Without music, life would be a mistake.”",
];

const Login: React.FC = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (auth?.user) {
      navigate("/chat");
    }
  }, [auth, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing In", { id: "login" });
      await auth?.login(email, password);
      toast.success("Signed In Successfully", { id: "login" });
    } catch (error) {
      console.log(error);
      toast.error("Signing In Failed", { id: "login" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change interval duration as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display={{ xs: "none", md: "block" }}
        padding={8}
        mr={8}
      >
        <img
          src="nietzsche1882.webp"
          alt="Nietzsche in 1882"
          style={{ width: "400px", borderRadius: "50%" }}
        />
        <Fade key={index} in={true} timeout={1000}>
          <Typography
            variant="body1"
            textAlign="center"
            padding={2}
            fontWeight={600}
            color="black"
          >
            {quotes[index]}
          </Typography>
        </Fade>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flex={{ xs: 1, md: 0.5 }}
          justifyContent="center"
          alignItems="center"
          padding={2}
          mt={2}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              margin: "auto",
              padding: "30px",
              boxShadow: "0 0 5px #000",
              borderRadius: "10px",
              border: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                textAlign="center"
                padding={2}
                fontWeight={600}
                color="black"
              >
                Log in
              </Typography>
              <CustomizedInput type="email" name="email" label="Email" />
              <CustomizedInput type="password" name="password" label="Password" />
              <Button
                type="submit"
                sx={{
                  px: 2,
                  py: 1,
                  mt: 2,
                  width: "400px",
                  borderRadius: 2,
                  bgcolor: "#0066ff",
                  color: "white",
                  ":hover": {
                    bgcolor: "#0052cc",
                    color: "white",
                  },
                }}
                endIcon={<IoIosLogIn />}
              >
                Log in
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "black", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#0066ff"
                to="/chat"
                text="Go to chat"
                textColor="white"
              />
              <NavigationLink
                bg="#555"
                textColor="white"
                to="/"
                text="Log out"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#555"
                to="/login"
                text="Log in"
                textColor="white"
              />
              <NavigationLink
                bg="#0066ff"
                textColor="white"
                to="/signup"
                text="Sign up"
              />
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

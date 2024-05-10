// import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./shared/NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      position="static" elevation={0} sx={{ bgcolor: "#111b27" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div style={{ flexGrow: 1 }} /> {/* Added flexGrow to push items to the right */}
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NavigationLink
                bg="#FFC107"
                to="/chat"
                text="Go to chat"
                textColor="#111b27"
              />
              <NavigationLink
                bg="#F44336"
                textColor="white"
                to="/"
                text="Log out"
                onClick={auth.logout}
              />
            </>
          ) : (
            <>
              <NavigationLink
                bg="#00BCD4"
                to="/login"
                text="Log in"
                textColor="#111b27"
              />
              <NavigationLink
                bg="#FF5722"
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

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const Logo = () => {
  return (
    <div
      style={{
        display: "flex",
        marginRight: "auto",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Link to={"/"}>
        <img
          src="nietzsche.svg"
          alt="NietzscheGPT"
          width={"64px"}
          height={"100px"}
        />
      </Link>{" "}
      <Typography
        sx={{
          display: { md: "block", sm: "none", xs: "none" },
          mr: "auto",
          fontWeight: "800",
        }}
      >
        <span style={{ fontSize: "30px", fontVariant: "small-caps" }}>NietzscheGPT</span>
      </Typography>
    </div>
  );
};

export default Logo;

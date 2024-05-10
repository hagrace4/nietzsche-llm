import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        "Chat with Friedrich Nietzsche",
        1000,
        "Built with Open-source technologies",
        1500,
        "Explore philosophy",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "60px",
        color: "black",
        display: "inline-block",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;

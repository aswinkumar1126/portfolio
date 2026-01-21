import React from "react";
import AnimatedOnScroll from "@/frontend/components/scroll/AnimatedScroll";

const MyPage: React.FC = () => {
  return (
    <div>
      <AnimatedOnScroll>
        <div style={{ height: "100vh", background: "#f8b500" }}>
          <h1>Section 1</h1>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationClass="fade-in-up">
        <div style={{ height: "100vh", background: "#00bcd4" }}>
          <h1>Section 2</h1>
        </div>
      </AnimatedOnScroll>

      <AnimatedOnScroll animationClass="fade-in-up">
        <div style={{ height: "100vh", background: "#ff5722" }}>
          <h1>Section 3</h1>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default MyPage;

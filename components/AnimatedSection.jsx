import React, { useEffect, useRef, useState } from "react";

const AnimatedSection = ({
  children,
  animation = "slide-in-bottom",
  threshold = 0.1,
  delay = 0,
  className = "",
  id = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: threshold,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [threshold]);

  // Define animation styles directly
  let animationStyle = {
    touchAction: "auto", // Ensure touch events pass through
    WebkitOverflowScrolling: "touch", // Improve mobile scrolling
    position: "relative", // Ensure it doesn't break the document flow
    zIndex: 1, // Ensure proper stacking
  };

  if (isVisible) {
    animationStyle = {
      ...animationStyle,
      opacity: 1,
      transform: "translateX(0) translateY(0)",
      transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
    };

    if (animation === "slide-in-left") {
      animationStyle.transform = "translateX(0)";
    } else if (animation === "slide-in-right") {
      animationStyle.transform = "translateX(0)";
    } else if (animation === "slide-in-bottom") {
      animationStyle.transform = "translateY(0)";
    }
  } else {
    if (animation === "slide-in-left") {
      animationStyle = {
        ...animationStyle,
        opacity: 0,
        transform: "translateX(-100px)", // Reduced from -200px
      };
    } else if (animation === "slide-in-right") {
      animationStyle = {
        ...animationStyle,
        opacity: 0,
        transform: "translateX(100px)", // Reduced from 200px
      };
    } else if (animation === "slide-in-bottom") {
      animationStyle = {
        ...animationStyle,
        opacity: 0,
        transform: "translateY(100px)", // Reduced from 200px
      };
    } else if (animation === "fade-in") {
      animationStyle = {
        ...animationStyle,
        opacity: 0,
      };
    }
  }

  return (
    <div
      ref={sectionRef}
      className={`${className}`}
      style={animationStyle}
      id={id}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

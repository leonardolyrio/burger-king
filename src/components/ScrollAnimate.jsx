import { useEffect, useRef, useState } from "react";

function ScrollAnimate({ children }) {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (element) observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-hidden ${isIntersecting ? "scroll-show" : ""}`}
    >
      {children}
    </div>
  );
}

export default ScrollAnimate;

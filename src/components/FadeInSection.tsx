import React, { useState, useRef, useEffect } from "react";

interface FadeInSectionProps {
  delay?: number | string;
  children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ delay, children }) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      });
    });

    observer.observe(node);
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}` }}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
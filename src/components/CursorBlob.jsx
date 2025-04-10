import React, { useEffect, useState } from "react";

function CursorBlob() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Hover edilen element
      const target = e.target;
      const interactiveTags = ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT"];
      const isInteractive =
        interactiveTags.includes(target.tagName) ||
        target.closest("a, button, input, textarea, select");

      setIsHoveringInteractive(!!isInteractive);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference bg-gradient-to-tr from-indigo-500 to-purple-500 transition-all duration-150 ease-out ${
        isHoveringInteractive ? "w-6 h-6" : "w-3 h-3"
      }`}
      style={{
        transform: `translate(${position.x - (isHoveringInteractive ? 12 : 6)}px, ${
          position.y - (isHoveringInteractive ? 12 : 6)
        }px)`,
      }}
    />
  );
}

export default CursorBlob;

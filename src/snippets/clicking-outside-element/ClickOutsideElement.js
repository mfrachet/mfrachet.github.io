import React, { useEffect, useRef } from "react";
import { MdxExample } from "../../components/MdxExample";

const useClickOutside = (ref, callback) => {
  const callbackRef = useRef(callback);

  // Keep the callback fresh between renders
  // preventing from passing "callback" to the useEffect
  // that would clear the listener on every render when "callback" reference changes
  callbackRef.current = callback;

  useEffect(() => {
    const handleMouseUp = (e) => {
      // Do not trigger click outside on auxiliary buttons
      // See MDN => https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button#value
      if (e.button > 0) return false;

      // Verify if the clicked element is contained by the one stored in "ref"
      if (!ref.current?.contains(e.target)) {
        callbackRef.current(e);
      }
    };

    document.addEventListener("mouseup", handleMouseUp, true);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp, true);
    };
  }, []);
};

export const ClickOutsideElement = () => {
  const modalRef = React.useRef(null);
  const [showContent, setShowContent] = React.useState(false);

  useClickOutside(modalRef, () => setShowContent(false));

  const handleToggle = () => {
    setShowContent(true);
  };

  return (
    <MdxExample>
      <button onClick={handleToggle}>Toggle content</button>

      {showContent && (
        <div
          style={{
            background: "var(--bg-active)",
            marginTop: "var(--s-2)",
            borderRadius: 4,
            padding: "var(--s-4)",
          }}
          ref={modalRef}
        >
          <p style={{ margin: 0 }}>
            This is the content. If you click outside the box, the content will
            be hidden.
          </p>

          <button>Clicking inside</button>
        </div>
      )}
    </MdxExample>
  );
};

import React, { useEffect } from "react";
import "./modal.css";

type Props = {
  active: boolean;
  setActive(arg0: boolean): void;
  children: React.ReactElement;
};

function Modal({ active, setActive, children }: Props) {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        setActive(false);
      }
      setActive(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div
      className={active ? "modal open" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;

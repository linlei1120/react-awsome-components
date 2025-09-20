import { useState } from "react";
import "./FabButton.css";

const Icon = ({ children }) => (
  <span className="material-symbols-outlined">{children}</span>
);

export const FabButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="page fab-button-page">
      <div className={`fab ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Icon>add</Icon>
        </button>
        <div className="fab-menu">
          <button>
            AA
          </button>
          <button>
            BB
          </button>
          <button>
            CC
          </button>
        </div>
      </div>
    </section>
  );
};

import { useRef, useState } from "react";
import avatar from "./avatar.png";
import "./Navbar1.css";

const items = [
  {
    name: "About",
  },
  {
    name: "Skills",
    items: ["UI/UX", "Development", "Design"],
  },
  {
    name: "Projects",
    items: ["Chatbot", "Calculator", "Weather"],
  },
  {
    name: "Work",
    items: ["Portfolio", "Resume", "GitHub"],
  },
];

const Link = ({ item, activeItem, onHover }) => {
  const linkRef = useRef();

  const handleHover = () => {
    if (item.items) {
      const rect = linkRef.current.getBoundingClientRect();
      onHover(item, `${rect.x}px`);
    }
  };

  const handleMouseLeave = () => {
    if (!item.items) {
      onHover(null, "0");
    }
  };

  return (
    <a
      className={item?.name === activeItem?.name ? "active" : ""}
      ref={linkRef}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {item.name}
    </a>
  );
};

const Search = () => (
  <div className="navbar-3-search">
    <span className="material-symbols-outlined">search</span>
    <input type="text" placeholder="Search" />
  </div>
);

export const Navbar1 = () => {
  const [translateX, setTranslateX] = useState("0");
  const [activeItem, setActiveItem] = useState(null);

  const handleLinkHover = (item, x) => {
    setActiveItem(item || null);
    setTranslateX(x);
  };

  return (
    <section className="page navbar-3-page">
      <nav className="navbar-3">
        <img src={avatar} />
        <div className="navbar-3-menu">
          {items.map((item) => (
            <Link
              activeItem={activeItem}
              item={item}
              onHover={handleLinkHover}
            />
          ))}
          <div
            style={{
              translate: `${translateX} 0`,
            }}
            className={`navbar-3-dropdown ${activeItem?.items ? "visible" : ""}`}
          >
            {activeItem?.items?.map((link) => (
              <a key={link}>{link}</a>
            ))}
          </div>
        </div>
        <Search />
      </nav>
    </section>
  );
};

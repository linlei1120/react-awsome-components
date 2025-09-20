import { useRef, useState, useEffect, useCallback } from "react";
import logo from "./logo.svg";
import "./Sidebar1.css";

const items = [
  {
    name: "home",
    icon: "home-2",
    path: "/",
  },
  {
    name: "favourites",
    icon: "heart",
    path: "/favourites",
  },
  {
    name: "products",
    icon: "cart-2",
    path: "/products",
  },
  {
    name: "testimonials",
    icon: "comment-1",
    path: "/testimonials",
  },
  {
    name: "security",
    icon: "locked-2",
    path: "/security",
  },
  {
    name: "settings",
    icon: "gear-1",
    path: "/settings",
  },
];

const Icon = ({ children }) => <i className={`lni lni-${children}`} />;

export const Sidebar1 = () => {
  const [width, setWidth] = useState(260);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef(null);
  const resizeRef = useRef(null);

  // 处理响应式
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setWidth(260);
        setIsCollapsed(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 优化拖拽性能
  const resize = useCallback((e) => {
    if (!resizeRef.current) return;
    
    const newWidth = e.clientX - sidebarRef.current?.offsetLeft;
    if (newWidth >= 60 && newWidth <= 260) {
      setWidth(newWidth);
      setIsCollapsed(newWidth <= 80);
    }
  }, []);

  const stopResize = useCallback(() => {
    document.body.style.cursor = "default";
    resizeRef.current = false;
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stopResize);
  }, [resize]);

  const initResize = useCallback(() => {
    document.body.style.cursor = "col-resize";
    resizeRef.current = true;
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResize);
  }, [resize, stopResize]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setWidth(isCollapsed ? 260 : 60);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    if (isMobile) {
      setIsCollapsed(true);
    }
  };

  return (
    <section className="page sidebar-5-page">
      <aside
        ref={sidebarRef}
        style={{ width: `${width}px` }}
        className={`sidebar-5 ${isCollapsed ? "collapsed" : ""} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <div className="handle" onMouseDown={initResize}></div>
        <div className="sidebar-inner">
          <header className="sidebar-header">
            <button 
              type="button" 
              className="sidebar-burger"
              onClick={toggleCollapse}
            >
              <Icon>{isCollapsed ? "menu-hamburger-1" : "cross"}</Icon>
            </button>
            {/* <img src={logo} className="sidebar-logo" /> */}
            <h3>Sidebar Name</h3>
          </header>
          <nav className="sidebar-menu">
            {items.map((item) => (
              <button
                key={item.name}
                type="button"
                className={`sidebar-button ${activeItem === item.name ? "active" : ""}`}
                onClick={() => handleItemClick(item.name)}
                title={isCollapsed ? item.name : ""}
              >
                <Icon>{item.icon}</Icon>
                <p>{item.name}</p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};

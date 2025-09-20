import { useState, useEffect, useCallback, memo } from "react";
import "./styles.css";

// 提取单个手风琴项为独立组件
const AccordionItem = memo(({ item, isActive, isLoaded, onMouseEnter }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      // 等待展开动画完成后显示内容
      timer = setTimeout(() => {
        setShowContent(true);
      }, 350); // 与展开动画时间相匹配
    } else {
      setShowContent(false);
    }
    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <div
      className={`image-accordion-item ${isActive ? 'active' : ''} ${isLoaded ? 'loaded' : ''}`}
      onMouseEnter={onMouseEnter}
    >
      {!isLoaded && (
        <div className="loading-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      <img 
        src={item.image} 
        alt={item.header}
        style={{ opacity: isLoaded ? 1 : 0 }}
        loading="eager"
      />
      <div className={`content ${showContent ? 'show-content' : ''}`}>
        <span className="material-symbols-outlined">photo_camera</span>
        <div>
          <h2>{item.header}</h2>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
});

AccordionItem.displayName = 'AccordionItem';

export const Accordion1 = ({ items }) => {
  const [active, setActive] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // 使用 useCallback 优化事件处理函数
  const handleMouseEnter = useCallback((index) => {
    requestAnimationFrame(() => {
      setActive(index);
    });
  }, []);

  useEffect(() => {
    // 预加载所有图片
    const preloadImages = async () => {
      const imagePromises = items.map((item) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = item.image;
          img.onload = () => {
            setLoadedImages((prev) => ({
              ...prev,
              [item.image]: true,
            }));
            resolve();
          };
        });
      });

      await Promise.all(imagePromises);
      // 使用 requestAnimationFrame 优化状态更新
      requestAnimationFrame(() => {
        setIsFirstLoad(false);
      });
    };

    preloadImages();
  }, [items]);

  return (
    <section className={`image-accordion ${isFirstLoad ? 'loading' : 'loaded'}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.image}
          item={item}
          isActive={active === index}
          isLoaded={loadedImages[item.image]}
          onMouseEnter={() => handleMouseEnter(index)}
        />
      ))}
    </section>
  );
};
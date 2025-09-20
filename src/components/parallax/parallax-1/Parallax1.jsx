import { useState, useEffect } from "react";
import "./styles.css";

export const Parallax1 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => setScrollPosition(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="page parallax-1-page">
      <section
        style={{
          backgroundSize: `${(window.outerHeight - scrollPosition) / 3}%`,
        }}
        className="parallax-banner parallax-container"
      >
        <h2>Parallax</h2>
        <button>Get Started</button>
      </section>
      <section className="parallax-container">
        <h2>什么是视差效果？</h2>
        <p>
          视差是指从两个不同的视线观察同一物体时，物体表观位置的位移或差异。
          这种差异通过这两条视线之间的倾角或半倾角来测量。由于近大远小的效应，
          近处物体表现出比远处物体更大的视差，因此视差可以用来测定距离。
        </p>
        <p>
          视差效果也影响着各种光学仪器，如步枪瞄准镜、双筒望远镜、显微镜和
          双镜头反光相机等，这些仪器都是从略微不同的角度观察物体。许多动物，
          包括人类在内，都有两只眼睛，它们的视野重叠，利用视差来获得深度感知，
          这个过程被称为立体视觉。在计算机视觉领域，这种效果被用于计算机立体
          视觉系统，还有一种叫做视差测距仪的设备利用这一原理来测量距离，某些
          型号还可以测量目标的高度。
        </p>
        <p>
          视差是指从两个不同的视线观察同一物体时，物体表观位置的位移或差异。
          这种差异通过这两条视线之间的倾角或半倾角来测量。由于近大远小的效应，
          近处物体表现出比远处物体更大的视差，因此视差可以用来测定距离。
        </p>
        <p>
          视差效果也影响着各种光学仪器，如步枪瞄准镜、双筒望远镜、显微镜和
          双镜头反光相机等，这些仪器都是从略微不同的角度观察物体。许多动物，
          包括人类在内，都有两只眼睛，它们的视野重叠，利用视差来获得深度感知，
          这个过程被称为立体视觉。在计算机视觉领域，这种效果被用于计算机立体
          视觉系统，还有一种叫做视差测距仪的设备利用这一原理来测量距离，某些
          型号还可以测量目标的高度。
        </p>
      </section>
    </div>
  );
};

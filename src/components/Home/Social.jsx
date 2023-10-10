import React from "react";
import "./Home.css";
const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/dvslvdr"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil- uil-instagram"></i>
      </a>

      <a
        href="https://www.facebook.com/contsdavesalvador"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil- uil-facebook"></i>
      </a>

      <a
        href="https://github.com/davesalvador"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil- uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;

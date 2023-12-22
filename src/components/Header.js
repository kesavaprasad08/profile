import Classes from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  let resizeHandler = () => {
    if (!showLinks && window.innerWidth > 729)  {
      setShowLinks(true);
    } else if(showLinks && window.innerWidth < 730)  {
      setShowLinks(false);
    }
  };
  resizeHandler();
  window.addEventListener("resize", resizeHandler);
  let content = (
    <div className={Classes.linkList}>
      <li className={Classes.link}>
        <a href="#top">Home</a>
      </li>
      <li className={Classes.link}>
        <a href="#about">About</a>
      </li>
      <li className={Classes.link}>
        <a href="#skills">Skills</a>
      </li>
      <li className={Classes.link}>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li className={Classes.link}>
        <a href="#contactMe">Contact</a>
      </li>
    </div>
  );
  return (
    <section id="Header" className={Classes.header}>
      <nav>
        <ul className={Classes.nav}>
          <li className={Classes.name}>
            <p>KESAVA</p> <p className={Classes.second_name}>PRASAD</p>
          </li>
          {showLinks && content}
        </ul>
      </nav>
    </section>
  );
};

export default Header;

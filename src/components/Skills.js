import Classes from "./Skills.module.css";

import javaScript from "../images/javascript.svg";
import css from "../images/css.png";
import html from "../images/html.webp";
import reactImg from "../images/react.png";
import NodeJsImg from "../images/Nodejs.png";
import bootstrapImg from "../images/bootstrap.png";

const Skills = () => {
  return (
    <section id="skills" className={Classes.skills}>
      <h1>Skills</h1>
      <h2>My Tech Stack</h2>
      <div className={Classes.techSkills}>
        <img src={javaScript} alt="js" />
        <img src={css} alt="css" />
        <img src={html} alt="html" />
        <img src={reactImg} alt="react" />
        <img src={NodeJsImg} alt="node" />
        <img src={bootstrapImg} alt="bootstrap" />
      </div>
    </section>
  );
};

export default Skills;

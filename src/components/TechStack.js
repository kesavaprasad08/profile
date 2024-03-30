import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

const TechStack = () => {
  return (
    <div className="m-4  text-white flex flex-col items-center text-center pt-16" id='skills'>
      <p className="text-white text-3xl mb-10"> My Tech Stack</p>
      <ul className="flex  flex-wrap lg:w-5/12 mt-5 justify-center col-start-2 pl-5">
        <li className="pr-10  pb-5 hover:scale-110">
          <IoLogoJavascript className="text-6xl " />
          JavaScript
        </li>
        <li className="pr-10  pb-5 hover:scale-110">
          <FaHtml5 className="text-6xl" />
          HTML
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <FaCss3 className="text-6xl" />
          CSS
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <FaReact className="text-6xl" />
          React Js
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <FaNodeJs className="text-6xl" />
          Node Js
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <SiExpress className="text-6xl" />
          Express Js
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <SiMongodb className="text-6xl" />
          Mongo DB
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <GrMysql className="text-6xl" />
          MySQL
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <SiRedux className="text-6xl" />
          Redux
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <SiTailwindcss className="text-6xl" />
          Tailwind CSS
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <FaGithub className="text-6xl" />
          Github
        </li>
        <li className="pr-10 pb-5 hover:scale-110">
          <FaAws className="text-6xl" />
          AWS
        </li>
      </ul>
    </div>
  );
};

export default TechStack;

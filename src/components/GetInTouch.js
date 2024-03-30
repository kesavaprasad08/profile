import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <div className="flex flex-col items-center bg-navGreen p-11" id="contact">
      <p className="text-green-500 text-3xl mb-5">Get In Touch</p>
      <div className="flex">
        <a href="mailto:kesav2661998@gmail.com" className="mr-5">
          kesav2661998@gmail.com
        </a>
        <a href="https://github.com/kesavaprasad08" className="mr-5">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kesava-prasad">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default GetInTouch;

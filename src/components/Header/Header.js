const Header = () => {

  const toggleHandler = () => {
    const dropdown = document.getElementById("drpDwn");
    dropdown.classList.toggle("hidden");
  };

  return (
    <nav className="fixed w-screen items-end">
      <div className="bg-navGreen p-3 flex justify-between w-full lg:pl-16 ">
        <p>
          <span className="text-white text-2xl">KESAVA </span>{" "}
          <span className="text-green-500 text-2xl"> PRASAD</span>
        </p>
        <ul className="hidden lg:flex pr-20 text-white">
          
          <li className="ml-5 hover:text-green-500">
            <a href="#skills">Skills </a>
          </li>
          <li className="ml-5 hover:text-green-500">
            <a href="#myProjects">My Works </a>
          </li>
          <li className="ml-5 hover:text-green-500">
            <a href="#contact">Contact </a>
          </li>
        </ul>
        <button className="lg:hidden text-white mr-5 text-2xl " id="toggleBtn" onClick={toggleHandler}>
          ☰<i className="fa fa-caret-down"></i>
        </button>
      </div>
      <ul
        className=" sticky lg:hidden w-full bg-navGreen flex flex-col items-center text-white p-2 hidden"
        id="drpDwn"
      >
        
        <li className="ml-3 mt-3 hover:text-green-500 w-full text-center p-1">
          <a href="#skills">Skills </a>
        </li>
        <li className="ml-3 mt-3 hover:text-green-500 w-full text-center p-1">
          <a href="#myProjects">My Works </a>
        </li>
        <li className="ml-3 mt-3 hover:text-green-500 w-full text-center p-1">
          <a href="#contact">Contact </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

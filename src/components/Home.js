
import { TypeAnimation } from "react-type-animation"; 
const Home = () => {
  return (
    <section
      className=" flex flex-col lg:flex-row   items-center bg-pageGreen  p-10 text-white pt-32"
      id="Home"
    >
      <div className="flex flex-col lg:ml-10 mt-18 flex-wrap p-1 lg:pr-20 ">
        <img
          src="https://media.licdn.com/dms/image/D5603AQFJUUPNXYL5ew/profile-displayphoto-shrink_800_800/0/1701245934705?e=1716422400&v=beta&t=RAN8Zf-2CN8arq53nq1TUiUNsnwh3MKoUdNKWJypXbw"
          alt="kesav"
          className="w-64 rounded-full mb-6 lg:hidden"
        />
        <p className="text-2 xl lg:text-4xl pl-2 ">Hi, I'm </p>
        <h1 className="text-2xl lg:text-5xl pl-2 ">KESAVA PRASAD</h1>
        <TypeAnimation
        className="text-1xl p-2 text-green-500"
      sequence={[
        // Same substring at the start will only be typed out once, initially
         // wait 1s before replacing "Mice" with "Hamsters"
         'Full Stack Developer',
        5000,
        'React Js',
        1000,
        'Node Js',
        1000,
        'Express Js',
        1000,        
        'MongoDb',
        1000,
        'MYSQL',
        700,
       
        
      ]}
      wrapper="span"
      speed={25}
      
      repeat={Infinity}
    />
    
        {/* <p className="text-2xl p-2 text-green-500"> Web Developer</p> */}
        <p className=" pt- pb-5 p-2  ">
          Full Stack Web Developer specialized in MERN Stack adept at building
          responsive web applications. Passionate about Learning new
          technologies,bringing ideas to life and working with dedicated teams
          to build efficient and robust applications suited to the user's needs.
        </p>
        <div>
          <a href="#myProjects" className="bg-green-500 p-2 hover:bg-green-300 mr-2 ">
            
              View My Works
            
          </a>
          <a
            href="https://drive.google.com/file/d/13K8uc9tgvyvZqesnmBEJmrfbWqS9SOa8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-2 hover:bg-green-300"
          >
            Get Resume
          </a>
        </div>
      </div>
      <img
        src="https://media.licdn.com/dms/image/D5603AQFJUUPNXYL5ew/profile-displayphoto-shrink_800_800/0/1701245934705?e=1716422400&v=beta&t=RAN8Zf-2CN8arq53nq1TUiUNsnwh3MKoUdNKWJypXbw"
        alt="kesav"
        className="w-64 rounded-full hidden lg:block"
      />
    </section>
  );
};

export default Home;

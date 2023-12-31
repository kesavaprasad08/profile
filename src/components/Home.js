import Classes from "./Home.module.css";
const Home = () => {
  return (
    <section className={Classes.home} id="Home">
      <div className={Classes.box}>
        <h1 className={Classes.name}>Hi, I'm KESAVA PRASAD</h1>
        <p className={Classes.desc}> Front-End developer</p>
        <a href="#portfolio">
          <button className={Classes.btn}>View My Works</button>
        </a>
      </div>
    </section>
  );
};

export default Home;

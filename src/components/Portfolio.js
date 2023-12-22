import Classes from "./PortFolio.module.css";
import ecom from "../images/e-com1.png";
import expense from "../images/expense-tracker1.png";
import mailBox from "../images/mailBox1.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className={Classes.portfolio}>
      <h1>Portfolio</h1>
      <h2>Some of my Most Recent Projects</h2>
      <div className={Classes.works}>
        <div className={Classes.work}>
          <img
            className={Classes.porImg}
            src={ecom}
            alt="e-com"
            title="E-Commerce Website"
          />
          <p>E-Commerce Store</p>
        </div>
        <div className={Classes.work}>
          <img className={Classes.porImg} src={expense} alt="e-com" />
          <p>Expense Tracker</p>
        </div>
        <div className={Classes.work}>
          <img className={Classes.porImg} src={mailBox} alt="e-com" />
          <p>Maill-Box Client</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

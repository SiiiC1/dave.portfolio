import React, { useState } from "react";
import "./Services.css";
import P1 from "../../assets/P1.png";
import P2 from "../../assets/P2.png";
import P3 from "../../assets/P3.png";
import P4 from "../../assets/P4.png";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I made</span>
      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil services__icon"></i>
            <h3 className="services__title">0</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">BulSU Pips</h3>
              <p className="services__modal-description">
                The BulSU PDO Investment Programming System (BULSUPIPS) is a
                specialized online platform developed exclusively by the
                Planning and Development Office (PDO) of Bulacan State
                University. This innovative system aims to streamlinbe and
                enhance the process of Investment programming, project proposal
                submission, evaluation, and managament for various colleges and
                offices within the university. Leveraging the power of the
                MERN(MongoDB, Express.js, React.js, Node.js) stack, Bulsupips
                facilitates efficient collaboration, informed decision-making.
                and optimized resource allcoation. The front end is securely
                hosted on Firebase at bulsupips-main-web-app, while the back end
                is deployed on Heroku
              </p>
              <p>Contribution:</p>
              <p>*Created all the Frontend-side</p>
              <p>Tech stack used:</p>
              <p>*React.js, Firebase </p>
              <a href="https://bulsupips-main.web.app/" target="_blank">
                View{" "}
              </a>
              <img src={P1} alt="" className="P1" id="modalImage" />

              {/*
              
              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">I develop the UI</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">Web page development</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">OJT MAN</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">Wala na</p> 
                </li> 
              </ul>*/}
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil services__icon"></i>
            <h3 className="services__title">1</h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
              <h3 className="services__modal-title">Monitoring System</h3>
              <p className="services__modal-description">
                This device is capable of monitoring the electrical parameters
                of cabled streetlight. More so, the device can detect power
                cable theft, lamb theft, burn-out lamp, and electricity theft,
                and inform the streetlight administrators of the said event.
              </p>
              <p>Contribution:</p>
              <p>*Created the Full Website and the design</p>
              <p>Tech stack used:</p>
              <p>*MERN STACK</p>
              <img src={P2} alt="" className="P2" />
              {/* <img src={P3} alt="" className="P2" /> */}
              <img src={P4} alt="" className="P2" />

              {/* <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">test2</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">test</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">test</p>
                </li>
              </ul>

              <ul className="services__modal-services grid">
                <li className="services__modal-services">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal__info">test</p>
                </li>
          </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

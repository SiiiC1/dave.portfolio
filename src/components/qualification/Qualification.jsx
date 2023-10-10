import React, { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content">
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Lead Programmer</h3>
                <span className="qualification__subtitle">
                  Bulacan State University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> 2022 - PRESENT</i>
                </div>
              </div>
            </div>{" "}
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Software Developer</h3>
                <span className="qualification__subtitle">
                  The Philippine Stock Exchange, Inc. (PSE)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt">
                    {" "}
                    May 2021 - September 2021
                  </i>
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Internship as a Technical Staff
                </h3>
                <span className="qualification__subtitle">
                  Philippine Overseas Employment Administration
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"> 2019</i>
                </div>
              </div>
            </div>
            <div className="qualification__content">
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <span className="qualification__subtitle">
                    Bulacan State Univeristy
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"> 2015 - 2020</i>
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

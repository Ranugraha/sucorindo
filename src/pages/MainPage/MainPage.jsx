import React from "react";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <section>
        <div className="hero container">
          <div className="hero-container">
            <h1>авіаційна галузь </h1>
            <p>
              Одна з найважливіших складових транспортної інфраструктури
              України, яка має значний потенціал розвитку авіаційного
              транспорту.
            </p>
            <div className="hero-btns">
              <button className="btn-primary-light-normal">Приєднатися</button>
              <button className="btn-secondary-dark-normal">
                Дізнатися Більше
              </button>
            </div>
          </div>
        </div>
         
        <div className="paggination">
          <button className="btn-paggination active" />
          <button className="btn-paggination" />
          <button className="btn-paggination" />
          <button className="btn-paggination" />
        </div>
      </section>
      <div className="dummy-section"></div>
    </div>
  );
};

export default MainPage;




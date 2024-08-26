import React from "react";
import "./MainPage.css";
import { icons, assets } from "../../assets";

const MainPage = () => {
  return (
    <div>
      <section>
        <div className="hero container">
          <div className="hero-container">
            <h1 className="h1-medium-uppercase">авіаційна галузь </h1>
            <p className="h3-regular">
              Одна з найважливіших складових транспортної інфраструктури
              України, яка має значний потенціал розвитку авіаційного
              транспорту.
            </p>
            <div className="hero-btns">
              <button className="btn-primary-light-normal body-medium">
                Приєднатися
              </button>
              <button className="btn-secondary-dark-normal body-medium">
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
      <section>
        <div className="main-about0us">
          <div className="right-about-us">
            <h2>Інфраструктурна рада</h2>
            <p>
              Сприємо формуванню ефективної транспортної системи в державі,
              протидіємо корупції та розвиваємо інфраструктуру
            </p>
            <div className="main-buttons-about-us">
              <button>Приєднатися</button>
              <button>Дізнатися Більше</button>
            </div>
          </div>
          <div className="icons-sosial-about-us">
            <assets.YtNormal className1="" />
          </div>
          <div className="left-about-us"></div>
        </div>
      </section>
      <div className="dummy-section"></div>
    </div>
  );
};

export default MainPage;

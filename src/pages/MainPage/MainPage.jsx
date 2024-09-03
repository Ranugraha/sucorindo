import React from "react";
import "./MainPage.css";
import { icons, assets } from "../../assets";
import ActionSection from "../../components/ActionSection/ActionSection";

const MainPage = () => {
  return (
    <div>
      <section>
        <div className="space-navbar" />
        <div className="hero">
          <div className="hero-container container">
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
              <button className="btn-secondary-light-normal body-medium">
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
      <section className="about-us-section">
        {/* <div className="about-us-background" /> */}
        <div className="main-about-us">
          <div className="right-about-us container ">
            <h2 className="h2-medium-uppercase">Інфраструктурна рада</h2>
            <p className="body2-regular">
              Сприємо формуванню ефективної транспортної системи в державі,
              протидіємо корупції та розвиваємо інфраструктуру
            </p>
            <div className="main-buttons-about-us">
              <button className="btn-primary-light-normal">Приєднатися</button>
              <button className="btn-secondary-light-normal">
                Дізнатися Більше
              </button>
            </div>
            <div className="icons-sosial-about-us">
              <a href="/node_modulesyt">
                <icons.YtNormal className1="" />
              </a>
              <a href="/facebook">
                <icons.FbNormal className1="" />
              </a>
            </div>
          </div>
          <div />
          <div className="main-imgs-about-us-container container">
            <div className="main-imgs-about-us">
              <img src={assets.ImgOneAboutUs} alt="" />
              <img src={assets.ImgtwoAboutUs} alt="" />
              <img src={assets.ImgThreeAboutUs} alt="" />
              <img src={assets.ImgfourAboutUs} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <ActionSection /> */}
      <section className="mainAnalitic container">
        <h2 className="h2-medium-uppercase">Аналітика</h2>
        <div className="mainAnaliticcontainer">
          <img src={assets.Stones} alt="" />
          <div className="analiticCOntent">
            <h3 className="h3-regular">
              Время собирать камни: краткий обзор транспортной инфраструктуры
              Украины
            </h3>
            <p className="body-regular">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              tempore ratione assumenda voluptate distinctio impedit expedita
              ipsa dolorem, natus architecto sit recusandae in veniam culpa
              dignissimos reiciendis! Nulla tempora aliquam quibusdam repellat
              et expedita molestiae excepturi, fuga dolor dolores culpa fugit
              dolorum libero dolorem atque cumque! Quis voluptates error
              deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ullam dignissimos dolorum amet, incidunt voluptatum eos libero
              nihil autem. Delectus voluptates quos alias illo et praesentium
              consequatur at, magni omnis dignissimos natus provident maxime hic
              nisi porro exercitationem? Quis consequuntur, commodi dolores fuga
              recusandae perspiciatis iure, fugiat incidunt odio, excepturi
              temporibus.
            </p>
            <div className="footerContent">
              <button className="btn-secondary-dark-normal body-medium">
                Дізнатися Більше
              </button>
              <div>
                <icons.Calendar />
                <span>17.06.2021</span>
              </div>
            </div>
          </div>
          <div className="analiticContentNavigation">
            <button>
              <icons.ArrowTop />
            </button>
            <icons.ArrowTop />
            <icons.ArrowBottom />
          </div>
        </div>
        <button className="btn-primary-dark">Більше Аналітики</button>
      </section>
    </div>
  );
};

export default MainPage;

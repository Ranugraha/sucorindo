import React from "react";
import "./ActionSection.css";

const ActionSection = () => {
  return (
    <section>
      <div className="action">
        <div className="activeContent container">
          <p className="h2-medium">Ваша організація хоче стати членом ІР?</p>
          <button className="btn-primary-light-normal">Приєднатися</button>
        </div>
      </div>
    </section>
  );
};

export default ActionSection;

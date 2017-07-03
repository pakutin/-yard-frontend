import React from "react";
import "./complex.css";
export default () => {
  return (
    <section className="complex-top-features">
      <div className="complex-top-feature">
        <h2 className="complex-heading">
          950<br />
          <div className="complex-top-feature-caption">предложений</div>
        </h2>
      </div>
      <div className="complex-top-feature complex-top-feature-architect">
        <h2 className="complex-heading">
          John McAslan + Partners<br />
          <div className="complex-top-feature-caption">архитектор</div>
        </h2>
      </div>
      <div className="complex-top-feature">
        <h2 className="complex-heading">
          Группа «ПСН»<br />
          <div className="complex-top-feature-caption">застройщик</div>
        </h2>
      </div>
    </section>
  );
};

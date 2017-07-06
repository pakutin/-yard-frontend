import React from "react";
import TopFeature from "./TopFeature";

export default () => {
  return (
    <section className="complex-top-features">
      <TopFeature value="950" label="предложений" />
      <TopFeature value="John McAslan + Partners" label="архитектор" />
      <TopFeature value="Группа «ПСН»" label="застройщик" />
    </section>
  );
};

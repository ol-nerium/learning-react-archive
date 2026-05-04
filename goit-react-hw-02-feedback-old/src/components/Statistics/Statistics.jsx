import React from "react";
import PropTypes from "prop-types";

import { StatisticsItem, StatisticsList } from "./Statistics.styled";

function Statistics({ statistics, total, positivePercentage }) {
  return (
    <StatisticsList>
      {statistics.map(([name, value]) => (
        <StatisticsItem key={name}>
          {name}:{value}
        </StatisticsItem>
      ))}
      <StatisticsItem>Total: {total}</StatisticsItem>
      <StatisticsItem>Positive feedback: {positivePercentage}%</StatisticsItem>
    </StatisticsList>
  );
}

export default Statistics;

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(PropTypes.array),
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

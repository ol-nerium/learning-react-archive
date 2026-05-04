import React from "react";
import PropTypes from "prop-types";

import { Buttons, ButtonItem } from "./FeedbackOption.styled";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Buttons>
      {options.map((option) => (
        <ButtonItem
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </ButtonItem>
      ))}
    </Buttons>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Container } from "./Button.style";
import Loader from "../Loader/Loading";

const Button = function (props) {
  const handleClick = (e) => {
    props.onClick(e);
  };
  return (
    <Container
      data-test="button-container"
      {...props}
      onClick={props.isDisabled || props.isLoading ? null : handleClick}
      marginTop={props.marginTop}
      isDisabled={props.isDisabled}
      disabled={props.isDisabled}
    >
      {props.isLoading ? <Loader /> : null}
      {props.text}
    </Container>
  );
};

Button.propTypes = {
  /** This is your button text */
  text: PropTypes.string,

  /** on click handler accepts a function */
  onClick: PropTypes.func,

  /** provide a margin top value */
  marginTop: PropTypes.number,

  /**enable or disable the button */
  isDisabled: PropTypes.number,

  /**enable or disable loading spinner */
  isLoading: PropTypes.number,
};

Button.defaultProps = {
  text: "Click Me",
  onClick: () => {
    alert("clicked");
  },
  marginTop: 0,
  isDisabled: 0,
};

export default React.memo(Button);

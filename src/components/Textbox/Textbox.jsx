import React, { useState, Fragment } from "react";
import { Container, Error } from "./Textbox.style";
import PropTypes from "prop-types";

const Textbox = function (props) {
  const handleChange = (e) => {
    props.update(e);
  };

  return (
    <Fragment>
      <Container
        data-test="Text-container"
        placeholder={props.placeholder}
        type={props.type}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={(e) => handleChange(e.target.value)}
        error={props.error}
      />
      {props.error && <Error>{props.error}</Error>}
    </Fragment>
  );
};

Textbox.propTypes = {
  /** This is your placeholder*/
  placeholder: PropTypes.string,

  /** Provide input type*/
  type: PropTypes.string,

  /**Error Text */
  error: PropTypes.string,
};

Textbox.defaultProps = {
  placeholder: "I am a placeholder",
  type: "text",
  error: null,
};

export default React.memo(Textbox);

import React from "react";
import { Container, Image, Breadcrumb } from "./Header.style";
import PropTypes from "prop-types";
import LOGO from "../../../public/assets/images/logo.png";
import { rem } from "Utils/style.util";

const Header = function (props) {
  return (
    <Container data-test="Header-container">
      <Image src={LOGO} />
      <Breadcrumb>{props.text}</Breadcrumb>
    </Container>
  );
};

Header.propTypes = {
  /** This is your amazing breadcrumb text*/
  text: PropTypes.string,
};

Header.defaultProps = {
  text: "Welcome!",
};

export default React.memo(Header);
